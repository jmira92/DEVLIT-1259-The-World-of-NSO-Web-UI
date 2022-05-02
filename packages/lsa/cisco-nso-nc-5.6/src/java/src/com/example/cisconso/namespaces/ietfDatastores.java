/*
 * BEWARE BEWARE BEWARE BEWARE BEWARE BEWARE BEWARE BEWARE BEWARE
 * This file has been auto-generated by the confdc compiler.
 * Source: ../load-dir/ietf-datastores.fxs
 * BEWARE BEWARE BEWARE BEWARE BEWARE BEWARE BEWARE BEWARE BEWARE
 */

package com.example.cisconso.namespaces;

import com.tailf.conf.ConfNamespace;

/** Autogenerated namespace class for YANG module ietf-datastores.yang */
public class ietfDatastores extends ConfNamespace {
    public static final int hash = 921773853;
    public int hash() {
        return ietfDatastores.hash;
    }

    public static final String id = "_cisco-nso-nc-5.6:cisco-nso-nc-5.6#urn:ietf:params:xml:ns:yang:ietf-datastores";
    public String id() {
        return ietfDatastores.id;
    }

    public static final String uri = "_cisco-nso-nc-5.6:cisco-nso-nc-5.6#urn:ietf:params:xml:ns:yang:ietf-datastores";
    public String uri() {
        return ietfDatastores.uri;
    }

    public String xmlUri() {
        return ConfNamespace.truncateToXMLUri(ietfDatastores.uri);
    }

    public static final String prefix = "ds";
    public String prefix() {
        return ietfDatastores.prefix;
    }

    public ietfDatastores() {}

    public static int stringToHash(String str) {
        return ConfNamespace.stringToHash(str);
    }

    public static String hashToString(int hash) {
        return ConfNamespace.hashToString(hash);
    }

    public static final int    _operational = 177233883;
    public static final String _operational_ = "operational";
    public static final int    _dynamic = 1339207079;
    public static final String _dynamic_ = "dynamic";
    public static final int    _datastore = 449538578;
    public static final String _datastore_ = "datastore";
    public static final int    _candidate = 1374401854;
    public static final String _candidate_ = "candidate";
    public static final int    _startup = 1476781227;
    public static final String _startup_ = "startup";
    public static final int    _running = 59151599;
    public static final String _running_ = "running";
    public static final int    _intended = 270744734;
    public static final String _intended_ = "intended";
    public static final int    _conventional = 1535769645;
    public static final String _conventional_ = "conventional";
}
