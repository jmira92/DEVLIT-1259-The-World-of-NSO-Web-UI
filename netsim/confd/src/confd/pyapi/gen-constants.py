# Copyright 2020 Cisco
import sys
import os.path
import subprocess
import re
import datetime

mod_name = os.path.expandvars('${PROD}')
umod_name = mod_name.upper()

FILES = ['confd_lib.h',
         'confd_maapi.h',
         'confd_cdb.h',
         'confd_dp.h',
         'confd_events.h',
         'confd_ha.h',
         'confd_errcode.h']


def gen_input_files(files):
    print(" ".join(files))


class GenerateConstants(object):
    def __init__(self):
        skip = [
            '\\S+\\(.*',
            'confd_ini\\S+',
            'confd_errno',
            '(cdb|maapi)_iter_op',
            '(cdb|maapi)_iter_ret',
            '(cdb|maapi)_get_enum_hash\\S*',
            '(cdb|maapi)_vget_enum_hash\\S*',
            'CONFD_ASSER\\S+',
            'CONFD_[GS]ET_\\S+',
            '(CONFD|NCS)_PORT',
            'CONFD_SNMPA_PDU_\\S+',
            'C_MAXTYPE',
            'MAX\\S+',
            'LASTERRSIZ',
            'PRINT\\S+',
            '__MAAPI_SYM__.*',
            '__MAAPI_STR__.*',
            '__MAAPI_CLIENT_ID__',
            'maapi_start_user_session.*',
            'maapi_start_trans.*']

        self.skip = '^(' + '|'.join(skip) + ')$'

    def generate(self, confdIncludeDir, files):
        for file in files:
            path = os.path.join(confdIncludeDir, file)
            self._generate_one_file(sys.stdout, file, path, None)

    def generate_const_file(self, confdIncludeDir, compiler, hFilename,
                            removePrefix, outFilename):
        self.compiler = compiler
        with open(outFilename, 'w') as f:
            path = os.path.join(confdIncludeDir, hFilename)
            self._generate_one_file(f, hFilename, path, removePrefix)

    def _generate_one_file(self, f, file, path, removePrefix):
        f.write('/*\n\n')
        f.write('This file is generated by gen-constants.py. {0}\n\n'.format(
            datetime.datetime.today()))
        f.write('Edit at your own risk!!!!\n\n')
        f.write('*/\n\n')
        f.write('\n/* {0} */\n'.format(path))

        startSymbol = '_' + file.upper().replace('.', '_')

        sed = subprocess.Popen(['sed', '/^#include/d', path],
                               universal_newlines=True,
                               stdout=subprocess.PIPE)
        # Clang lacks an option to drop predefined macros
        if self.compiler.find("clang") != -1:
            cc = os.getenv('CC')
            if cc:
                cc = cc.split()
            else:
                cc = ['clang']

            cc.extend(['-E', '-DCONFD_C_PRODUCT_%s' %(umod_name), '-dD', '-'])

            f.write('\n/* Generated by ' + ' '.join(cc) + ' command */\n\n')

            clang = subprocess.Popen(cc,
                                     universal_newlines=True,
                                     stdin=sed.stdout,
                                     stdout=subprocess.PIPE)
            ref = subprocess.Popen(cc,
                                   universal_newlines=True,
                                   stdin=subprocess.DEVNULL,
                                   stdout=subprocess.PIPE)
            reflist = [s for s in ref.stdout]
            # Also Clang sorts its macros printout alphabetically so
            # the predefined macros and the 'stop signal' aka startSymbol
            # have to be exluded like below
            fIn = [s for s in clang.stdout if s not in reflist and \
                                              s.find(startSymbol) == -1]
        else:
            cc = os.getenv('CC')
            if cc:
                cc = cc.split()
            else:
                cc = ['gcc']
            cc.extend(['-w', '-E', '-DCONFD_C_PRODUCT_%s' %(umod_name),
                       '-dD', '-'])

            f.write('\n/* Generated by ' + ' '.join(cc) + ' command */\n\n')

            gcc = subprocess.Popen(cc,
                                   universal_newlines=True,
                                   stdin=sed.stdout,
                                   stdout=subprocess.PIPE)
            fIn = gcc.stdout

            # --- Skip input till our file starts
            for line in fIn:
                if line.find('#define ' + startSymbol) == 0:
                    break

        # --- Read loop
        state = self._state_define
        stateData = None

        for line in fIn:
            s = state(f, removePrefix, line, stateData)
            if s:
                state = s[0]
                stateData = s[1]

    def _state_define(self, f, removePrefix, line, data):
        match = re.match('^#define[\\s]+(\\S+)', line)
        if match:
            v = match.group(1)
            if not re.match(self.skip, v):
                if ((v.find('_STR') > 0 and
                     v.find('_STRINGSONLY') == -1 and
                     v.find('_STRING_FUN') == -1 and
                     v.find('_STR2VAL') == -1 and
                     v.find('_STRING_AS_BINARY') == -1)):
                    f.write('ADD_CONST_STR({0}, "{1}");\n'.format(
                        v, self._prefixRemove(v, removePrefix)))
                else:
                    f.write('ADD_CONST({0}, "{1}");\n'.format(
                        v, self._prefixRemove(v, removePrefix)))
        else:
            match = re.match('^enum\\s+(\\S+)\\s*{', line)
            if match:
                enumName = match.group(1)
                f.write('/* enum {0} {{ */\n'.format(enumName))
                return (self._state_enum, enumName)

    def _state_enum(self, f, removePrefix, line, data):
        match = re.match('}\\s*;\\s*$', line)
        if match:
            f.write('/* }; */\n')
            return (self._state_define, None)
        else:
            match = re.match('^\\s*([a-zA-Z_0-9]+)\\s*([,|=]|$)', line)
            if match:
                v = match.group(1)
                if not re.match(self.skip, v):
                    f.write('     ADD_CONST({0}, "{1}");\n'.format(
                        v, self._prefixRemove(v, removePrefix)))

    def _prefixRemove(self, txt, removePrefix):
        if not removePrefix:
            return txt

        if type(removePrefix) is list:
            for prefix in removePrefix:
                txt = txt.replace(prefix, '')
        else:
            txt = txt.replace(removePrefix, '')

        return txt

# ------------------------------------------------------------------------------


def gen_const(confdIncludeDir, files):
    GenerateConstants().generate(confdIncludeDir, files)


def gen_const_file(confdIncludeDir, compiler, hFilename,
                   removePrefix, outFilename):
    GenerateConstants().generate_const_file(confdIncludeDir, compiler,
                                            hFilename, removePrefix,
                                            outFilename)

# ------------------------------------------------------------------------------


if __name__ == '__main__':
    if (len(sys.argv) == 2) and (sys.argv[1] == '-p'):
        gen_input_files(FILES)
    else:
        confdIncludeDir = sys.argv[1]

        compiler = sys.argv[2]

        gen_const_file(confdIncludeDir, compiler, 'confd_lib.h', 'CONFD_',
                       'src/gen_add_lib_const.c')
        gen_const_file(confdIncludeDir, compiler, 'confd_maapi.h',
                       ['MAAPI_', 'CONFD_'],
                       'src/gen_add_maapi_const.c')
        gen_const_file(confdIncludeDir, compiler, 'confd_cdb.h', 'CDB_',
                       'src/gen_add_cdb_const.c')
        gen_const_file(confdIncludeDir, compiler, 'confd_dp.h', 'CONFD_',
                       'src/gen_add_dp_const.c')
        gen_const_file(confdIncludeDir, compiler, 'confd_events.h', 'CONFD_',
                       'src/gen_add_events_const.c')
        gen_const_file(confdIncludeDir, compiler, 'confd_ha.h', 'CONFD_HA_',
                       'src/gen_add_ha_const.c')
        gen_const_file(confdIncludeDir, compiler, 'confd_errcode.h', 'CONFD_',
                       'src/gen_add_errcode_const.c')
