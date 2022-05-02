%%% This file was automatically generated by snmpc_mib_to_hrl version 5.5.0.4
%%% Date: 26-Jan-2022::09:31:31
-ifndef('SNMPv2-MIB').
-define('SNMPv2-MIB', true).

%% Notifications
-define(authenticationFailure, [1,3,6,1,6,3,1,1,5,5]).
-define(warmStart, [1,3,6,1,6,3,1,1,5,2]).
-define(coldStart, [1,3,6,1,6,3,1,1,5,1]).

%% Oids

-define(system, [1,3,6,1,2,1,1]).
-define(sysDescr, [1,3,6,1,2,1,1,1]).
-define(sysDescr_instance, [1,3,6,1,2,1,1,1,0]).
-define(sysObjectID, [1,3,6,1,2,1,1,2]).
-define(sysObjectID_instance, [1,3,6,1,2,1,1,2,0]).
-define(sysUpTime, [1,3,6,1,2,1,1,3]).
-define(sysUpTime_instance, [1,3,6,1,2,1,1,3,0]).
-define(sysContact, [1,3,6,1,2,1,1,4]).
-define(sysContact_instance, [1,3,6,1,2,1,1,4,0]).
-define(sysName, [1,3,6,1,2,1,1,5]).
-define(sysName_instance, [1,3,6,1,2,1,1,5,0]).
-define(sysLocation, [1,3,6,1,2,1,1,6]).
-define(sysLocation_instance, [1,3,6,1,2,1,1,6,0]).
-define(sysServices, [1,3,6,1,2,1,1,7]).
-define(sysServices_instance, [1,3,6,1,2,1,1,7,0]).
-define(sysORLastChange, [1,3,6,1,2,1,1,8]).
-define(sysORLastChange_instance, [1,3,6,1,2,1,1,8,0]).

-define(sysORTable, [1,3,6,1,2,1,1,9]).

-define(sysOREntry, [1,3,6,1,2,1,1,9,1]).
-define(sysORIndex, 1).
-define(sysORID, 2).
-define(sysORDescr, 3).
-define(sysORUpTime, 4).

-define(snmp, [1,3,6,1,2,1,11]).
-define(snmpInPkts, [1,3,6,1,2,1,11,1]).
-define(snmpInPkts_instance, [1,3,6,1,2,1,11,1,0]).
-define(snmpInBadVersions, [1,3,6,1,2,1,11,3]).
-define(snmpInBadVersions_instance, [1,3,6,1,2,1,11,3,0]).
-define(snmpInBadCommunityNames, [1,3,6,1,2,1,11,4]).
-define(snmpInBadCommunityNames_instance, [1,3,6,1,2,1,11,4,0]).
-define(snmpInBadCommunityUses, [1,3,6,1,2,1,11,5]).
-define(snmpInBadCommunityUses_instance, [1,3,6,1,2,1,11,5,0]).
-define(snmpInASNParseErrs, [1,3,6,1,2,1,11,6]).
-define(snmpInASNParseErrs_instance, [1,3,6,1,2,1,11,6,0]).
-define(snmpEnableAuthenTraps, [1,3,6,1,2,1,11,30]).
-define(snmpEnableAuthenTraps_instance, [1,3,6,1,2,1,11,30,0]).
-define(snmpSilentDrops, [1,3,6,1,2,1,11,31]).
-define(snmpSilentDrops_instance, [1,3,6,1,2,1,11,31,0]).
-define(snmpProxyDrops, [1,3,6,1,2,1,11,32]).
-define(snmpProxyDrops_instance, [1,3,6,1,2,1,11,32,0]).

-define(snmpMIB, [1,3,6,1,6,3,1]).

-define(snmpMIBObjects, [1,3,6,1,6,3,1,1]).

-define(snmpTrap, [1,3,6,1,6,3,1,1,4]).
-define(snmpTrapOID, [1,3,6,1,6,3,1,1,4,1]).
-define(snmpTrapOID_instance, [1,3,6,1,6,3,1,1,4,1,0]).
-define(snmpTrapEnterprise, [1,3,6,1,6,3,1,1,4,3]).
-define(snmpTrapEnterprise_instance, [1,3,6,1,6,3,1,1,4,3,0]).

-define(snmpTraps, [1,3,6,1,6,3,1,1,5]).

-define(snmpSet, [1,3,6,1,6,3,1,1,6]).
-define(snmpSetSerialNo, [1,3,6,1,6,3,1,1,6,1]).
-define(snmpSetSerialNo_instance, [1,3,6,1,6,3,1,1,6,1,0]).

-define(snmpMIBConformance, [1,3,6,1,6,3,1,2]).

-define(snmpMIBCompliances, [1,3,6,1,6,3,1,2,1]).

-define(snmpMIBGroups, [1,3,6,1,6,3,1,2,2]).

-define(snmpSetGroup, [1,3,6,1,6,3,1,2,2,5]).

-define(systemGroup, [1,3,6,1,6,3,1,2,2,6]).

-define(snmpBasicNotificationsGroup, [1,3,6,1,6,3,1,2,2,7]).

-define(snmpGroup, [1,3,6,1,6,3,1,2,2,8]).

-define(snmpCommunityGroup, [1,3,6,1,6,3,1,2,2,9]).

-define(snmpObsoleteGroup, [1,3,6,1,6,3,1,2,2,10]).

-define(snmpWarmStartNotificationGroup, [1,3,6,1,6,3,1,2,2,11]).

-define(snmpNotificationGroup, [1,3,6,1,6,3,1,2,2,12]).


%% Range values
-define(low_sysDescr, 0).
-define(high_sysDescr, 255).
-define(low_sysContact, 0).
-define(high_sysContact, 255).
-define(low_sysName, 0).
-define(high_sysName, 255).
-define(low_sysLocation, 0).
-define(high_sysLocation, 255).
-define(low_sysServices, 0).
-define(high_sysServices, 127).
-define(low_sysORIndex, 1).
-define(high_sysORIndex, 2147483647).
-define(low_sysORDescr, 0).
-define(high_sysORDescr, 255).
-define(low_snmpInPkts, 0).
-define(high_snmpInPkts, 4294967295).
-define(low_snmpInBadVersions, 0).
-define(high_snmpInBadVersions, 4294967295).
-define(low_snmpInBadCommunityNames, 0).
-define(high_snmpInBadCommunityNames, 4294967295).
-define(low_snmpInBadCommunityUses, 0).
-define(high_snmpInBadCommunityUses, 4294967295).
-define(low_snmpInASNParseErrs, 0).
-define(high_snmpInASNParseErrs, 4294967295).
-define(low_snmpSilentDrops, 0).
-define(high_snmpSilentDrops, 4294967295).
-define(low_snmpProxyDrops, 0).
-define(high_snmpProxyDrops, 4294967295).
-define(low_snmpSetSerialNo, 0).
-define(high_snmpSetSerialNo, 2147483647).


%% Enum definitions from snmpEnableAuthenTraps
-define(snmpEnableAuthenTraps_disabled, 2).
-define(snmpEnableAuthenTraps_enabled, 1).

%% Default values
-define(default_sysDescr, []).
-define(default_sysObjectID, [0,0]).
-define(default_sysUpTime, 0).
-define(default_sysContact, []).
-define(default_sysName, []).
-define(default_sysLocation, []).
-define(default_sysServices, 0).
-define(default_sysORLastChange, 0).
-define(default_snmpInPkts, 0).
-define(default_snmpInBadVersions, 0).
-define(default_snmpInBadCommunityNames, 0).
-define(default_snmpInBadCommunityUses, 0).
-define(default_snmpInASNParseErrs, 0).
-define(default_snmpEnableAuthenTraps, 1).
-define(default_snmpSilentDrops, 0).
-define(default_snmpProxyDrops, 0).
-define(default_snmpTrapOID, [0,0]).
-define(default_snmpTrapEnterprise, [0,0]).
-define(default_snmpSetSerialNo, 0).

-endif.
