/*

This file is generated by gen-constants.py. 2022-01-26 09:36:16.682726

Edit at your own risk!!!!

*/


/* /Users/jenkins/workspace/tailf/confd_dir/include/confd_lib.h */

/* Generated by clang -E -DCONFD_C_PRODUCT_NCS -dD - command */

ADD_CONST(CONFD_LIB_VSN, "LIB_VSN");
ADD_CONST_STR(CONFD_LIB_VSN_STR, "LIB_VSN_STR");
ADD_CONST(CONFD_LIB_API_VSN, "LIB_API_VSN");
ADD_CONST_STR(CONFD_LIB_API_VSN_STR, "LIB_API_VSN_STR");
ADD_CONST(CONFD_LIB_PROTO_VSN, "LIB_PROTO_VSN");
ADD_CONST_STR(CONFD_LIB_PROTO_VSN_STR, "LIB_PROTO_VSN_STR");
/* enum confd_dbname { */
     ADD_CONST(CONFD_NO_DB, "NO_DB");
     ADD_CONST(CONFD_CANDIDATE, "CANDIDATE");
     ADD_CONST(CONFD_RUNNING, "RUNNING");
     ADD_CONST(CONFD_STARTUP, "STARTUP");
     ADD_CONST(CONFD_OPERATIONAL, "OPERATIONAL");
     ADD_CONST(CONFD_TRANSACTION, "TRANSACTION");
     ADD_CONST(CONFD_PRE_COMMIT_RUNNING, "PRE_COMMIT_RUNNING");
     ADD_CONST(CONFD_INTENDED, "INTENDED");
/* }; */
/* enum confd_db_status { */
     ADD_CONST(CONFD_DB_INVALID, "DB_INVALID");
     ADD_CONST(CONFD_DB_VALID, "DB_VALID");
/* }; */
/* enum confd_vtype { */
     ADD_CONST(C_NOEXISTS, "C_NOEXISTS");
     ADD_CONST(C_XMLTAG, "C_XMLTAG");
     ADD_CONST(C_SYMBOL, "C_SYMBOL");
     ADD_CONST(C_STR, "C_STR");
     ADD_CONST(C_BUF, "C_BUF");
     ADD_CONST(C_INT8, "C_INT8");
     ADD_CONST(C_INT16, "C_INT16");
     ADD_CONST(C_INT32, "C_INT32");
     ADD_CONST(C_INT64, "C_INT64");
     ADD_CONST(C_UINT8, "C_UINT8");
     ADD_CONST(C_UINT16, "C_UINT16");
     ADD_CONST(C_UINT32, "C_UINT32");
     ADD_CONST(C_UINT64, "C_UINT64");
     ADD_CONST(C_DOUBLE, "C_DOUBLE");
     ADD_CONST(C_IPV4, "C_IPV4");
     ADD_CONST(C_IPV6, "C_IPV6");
     ADD_CONST(C_BOOL, "C_BOOL");
     ADD_CONST(C_QNAME, "C_QNAME");
     ADD_CONST(C_DATETIME, "C_DATETIME");
     ADD_CONST(C_DATE, "C_DATE");
     ADD_CONST(C_TIME, "C_TIME");
     ADD_CONST(C_DURATION, "C_DURATION");
     ADD_CONST(C_ENUM_VALUE, "C_ENUM_VALUE");
     ADD_CONST(C_BIT32, "C_BIT32");
     ADD_CONST(C_BIT64, "C_BIT64");
     ADD_CONST(C_LIST, "C_LIST");
     ADD_CONST(C_XMLBEGIN, "C_XMLBEGIN");
     ADD_CONST(C_XMLEND, "C_XMLEND");
     ADD_CONST(C_OBJECTREF, "C_OBJECTREF");
     ADD_CONST(C_UNION, "C_UNION");
     ADD_CONST(C_PTR, "C_PTR");
     ADD_CONST(C_CDBBEGIN, "C_CDBBEGIN");
     ADD_CONST(C_OID, "C_OID");
     ADD_CONST(C_BINARY, "C_BINARY");
     ADD_CONST(C_IPV4PREFIX, "C_IPV4PREFIX");
     ADD_CONST(C_IPV6PREFIX, "C_IPV6PREFIX");
     ADD_CONST(C_DEFAULT, "C_DEFAULT");
     ADD_CONST(C_DECIMAL64, "C_DECIMAL64");
     ADD_CONST(C_IDENTITYREF, "C_IDENTITYREF");
     ADD_CONST(C_XMLBEGINDEL, "C_XMLBEGINDEL");
     ADD_CONST(C_DQUAD, "C_DQUAD");
     ADD_CONST(C_HEXSTR, "C_HEXSTR");
     ADD_CONST(C_IPV4_AND_PLEN, "C_IPV4_AND_PLEN");
     ADD_CONST(C_IPV6_AND_PLEN, "C_IPV6_AND_PLEN");
     ADD_CONST(C_BITBIG, "C_BITBIG");
     ADD_CONST(C_XMLMOVEFIRST, "C_XMLMOVEFIRST");
     ADD_CONST(C_XMLMOVEAFTER, "C_XMLMOVEAFTER");
/* }; */
ADD_CONST(C_ENUM_HASH, "C_ENUM_HASH");
ADD_CONST(CONFD_TIMEZONE_UNDEF, "TIMEZONE_UNDEF");
ADD_CONST(CONFD_ATTR_TAGS, "ATTR_TAGS");
ADD_CONST(CONFD_ATTR_ANNOTATION, "ATTR_ANNOTATION");
ADD_CONST(CONFD_ATTR_INACTIVE, "ATTR_INACTIVE");
ADD_CONST(CONFD_ATTR_BACKPOINTER, "ATTR_BACKPOINTER");
ADD_CONST(CONFD_ATTR_ORIGIN, "ATTR_ORIGIN");
/* enum confd_query_result_type { */
     ADD_CONST(CONFD_QUERY_STRING, "QUERY_STRING");
     ADD_CONST(CONFD_QUERY_HKEYPATH, "QUERY_HKEYPATH");
     ADD_CONST(CONFD_QUERY_HKEYPATH_VALUE, "QUERY_HKEYPATH_VALUE");
     ADD_CONST(CONFD_QUERY_TAG_VALUE, "QUERY_TAG_VALUE");
/* }; */
/* enum confd_errcode { */
     ADD_CONST(CONFD_ERRCODE_IN_USE, "ERRCODE_IN_USE");
     ADD_CONST(CONFD_ERRCODE_RESOURCE_DENIED, "ERRCODE_RESOURCE_DENIED");
     ADD_CONST(CONFD_ERRCODE_INCONSISTENT_VALUE, "ERRCODE_INCONSISTENT_VALUE");
     ADD_CONST(CONFD_ERRCODE_ACCESS_DENIED, "ERRCODE_ACCESS_DENIED");
     ADD_CONST(CONFD_ERRCODE_APPLICATION, "ERRCODE_APPLICATION");
     ADD_CONST(CONFD_ERRCODE_APPLICATION_INTERNAL, "ERRCODE_APPLICATION_INTERNAL");
     ADD_CONST(CONFD_ERRCODE_PROTO_USAGE, "ERRCODE_PROTO_USAGE");
     ADD_CONST(CONFD_ERRCODE_INTERNAL, "ERRCODE_INTERNAL");
     ADD_CONST(CONFD_ERRCODE_DATA_MISSING, "ERRCODE_DATA_MISSING");
     ADD_CONST(CONFD_ERRCODE_INTERRUPT, "ERRCODE_INTERRUPT");
/* }; */
/* enum confd_errinfo_ptype { */
     ADD_CONST(CONFD_ERRINFO_KEYPATH, "ERRINFO_KEYPATH");
     ADD_CONST(CONFD_ERRINFO_STRING, "ERRINFO_STRING");
/* }; */
/* enum confd_debug_level { */
     ADD_CONST(CONFD_SILENT, "SILENT");
     ADD_CONST(CONFD_DEBUG, "DEBUG");
     ADD_CONST(CONFD_TRACE, "TRACE");
     ADD_CONST(CONFD_PROTO_TRACE, "PROTO_TRACE");
/* }; */
/* enum confd_proto { */
     ADD_CONST(CONFD_PROTO_UNKNOWN, "PROTO_UNKNOWN");
     ADD_CONST(CONFD_PROTO_TCP, "PROTO_TCP");
     ADD_CONST(CONFD_PROTO_SSH, "PROTO_SSH");
     ADD_CONST(CONFD_PROTO_SYSTEM, "PROTO_SYSTEM");
     ADD_CONST(CONFD_PROTO_CONSOLE, "PROTO_CONSOLE");
     ADD_CONST(CONFD_PROTO_SSL, "PROTO_SSL");
     ADD_CONST(CONFD_PROTO_HTTP, "PROTO_HTTP");
     ADD_CONST(CONFD_PROTO_HTTPS, "PROTO_HTTPS");
     ADD_CONST(CONFD_PROTO_UDP, "PROTO_UDP");
     ADD_CONST(CONFD_PROTO_TLS, "PROTO_TLS");
/* }; */
/* enum confd_usess_lock_mode { */
     ADD_CONST(CONFD_USESS_LOCK_MODE_NONE, "USESS_LOCK_MODE_NONE");
     ADD_CONST(CONFD_USESS_LOCK_MODE_PRIVATE, "USESS_LOCK_MODE_PRIVATE");
     ADD_CONST(CONFD_USESS_LOCK_MODE_EXCLUSIVE, "USESS_LOCK_MODE_EXCLUSIVE");
     ADD_CONST(CONFD_USESS_LOCK_MODE_SHARED, "USESS_LOCK_MODE_SHARED");
/* }; */
ADD_CONST(CONFD_USESS_FLAG_FORWARD, "USESS_FLAG_FORWARD");
ADD_CONST(CONFD_USESS_FLAG_HAS_IDENTIFICATION, "USESS_FLAG_HAS_IDENTIFICATION");
ADD_CONST(CONFD_USESS_FLAG_HAS_OPAQUE, "USESS_FLAG_HAS_OPAQUE");
/* enum confd_trans_mode { */
     ADD_CONST(CONFD_READ, "READ");
     ADD_CONST(CONFD_READ_WRITE, "READ_WRITE");
/* }; */
ADD_CONST(CONFD_VALIDATION_FLAG_TEST, "VALIDATION_FLAG_TEST");
ADD_CONST(CONFD_VALIDATION_FLAG_COMMIT, "VALIDATION_FLAG_COMMIT");
/* enum confd_list_filter_type { */
     ADD_CONST(CONFD_LF_OR, "LF_OR");
     ADD_CONST(CONFD_LF_AND, "LF_AND");
     ADD_CONST(CONFD_LF_NOT, "LF_NOT");
     ADD_CONST(CONFD_LF_CMP, "LF_CMP");
     ADD_CONST(CONFD_LF_EXISTS, "LF_EXISTS");
     ADD_CONST(CONFD_LF_EXEC, "LF_EXEC");
     ADD_CONST(CONFD_LF_ORIGIN, "LF_ORIGIN");
     ADD_CONST(CONFD_LF_CMP_LL, "LF_CMP_LL");
/* }; */
/* enum confd_expr_op { */
     ADD_CONST(CONFD_CMP_NOP, "CMP_NOP");
     ADD_CONST(CONFD_CMP_EQ, "CMP_EQ");
     ADD_CONST(CONFD_CMP_NEQ, "CMP_NEQ");
     ADD_CONST(CONFD_CMP_GT, "CMP_GT");
     ADD_CONST(CONFD_CMP_GTE, "CMP_GTE");
     ADD_CONST(CONFD_CMP_LT, "CMP_LT");
     ADD_CONST(CONFD_CMP_LTE, "CMP_LTE");
     ADD_CONST(CONFD_EXEC_STARTS_WITH, "EXEC_STARTS_WITH");
     ADD_CONST(CONFD_EXEC_RE_MATCH, "EXEC_RE_MATCH");
     ADD_CONST(CONFD_EXEC_DERIVED_FROM, "EXEC_DERIVED_FROM");
     ADD_CONST(CONFD_EXEC_DERIVED_FROM_OR_SELF, "EXEC_DERIVED_FROM_OR_SELF");
/* }; */
ADD_CONST(CONFD_TRANS_CB_FLAG_FILTERED, "TRANS_CB_FLAG_FILTERED");
ADD_CONST(CONFD_DELAYED_RESPONSE, "DELAYED_RESPONSE");
ADD_CONST(CONFD_ACCUMULATE, "ACCUMULATE");
ADD_CONST(CONFD_OK, "OK");
ADD_CONST(CONFD_ERR, "ERR");
ADD_CONST(CONFD_EOF, "EOF");
ADD_CONST(CONFD_VALIDATION_WARN, "VALIDATION_WARN");
ADD_CONST(CONFD_ALREADY_LOCKED, "ALREADY_LOCKED");
ADD_CONST(CONFD_IN_USE, "IN_USE");
/* enum confd_find_next_type { */
     ADD_CONST(CONFD_FIND_NEXT, "FIND_NEXT");
     ADD_CONST(CONFD_FIND_SAME_OR_NEXT, "FIND_SAME_OR_NEXT");
/* }; */
/* enum confd_bool { */
     ADD_CONST(CONFD_FALSE, "FALSE");
     ADD_CONST(CONFD_TRUE, "TRUE");
/* }; */
ADD_CONST(CS_NODE_IS_LIST, "CS_NODE_IS_LIST");
ADD_CONST(CS_NODE_IS_WRITE, "CS_NODE_IS_WRITE");
ADD_CONST(CS_NODE_IS_CDB, "CS_NODE_IS_CDB");
ADD_CONST(CS_NODE_IS_ACTION, "CS_NODE_IS_ACTION");
ADD_CONST(CS_NODE_IS_PARAM, "CS_NODE_IS_PARAM");
ADD_CONST(CS_NODE_IS_RESULT, "CS_NODE_IS_RESULT");
ADD_CONST(CS_NODE_IS_NOTIF, "CS_NODE_IS_NOTIF");
ADD_CONST(CS_NODE_IS_CASE, "CS_NODE_IS_CASE");
ADD_CONST(CS_NODE_IS_CONTAINER, "CS_NODE_IS_CONTAINER");
ADD_CONST(CS_NODE_HAS_WHEN, "CS_NODE_HAS_WHEN");
ADD_CONST(CS_NODE_HAS_DISPLAY_WHEN, "CS_NODE_HAS_DISPLAY_WHEN");
ADD_CONST(CS_NODE_HAS_META_DATA, "CS_NODE_HAS_META_DATA");
ADD_CONST(CS_NODE_IS_WRITE_ALL, "CS_NODE_IS_WRITE_ALL");
ADD_CONST(CS_NODE_IS_LEAF_LIST, "CS_NODE_IS_LEAF_LIST");
ADD_CONST(CS_NODE_IS_LEAFREF, "CS_NODE_IS_LEAFREF");
ADD_CONST(CS_NODE_HAS_MOUNT_POINT, "CS_NODE_HAS_MOUNT_POINT");
ADD_CONST(CS_NODE_IS_STRING_AS_BINARY, "CS_NODE_IS_STRING_AS_BINARY");
ADD_CONST(CS_NODE_IS_DYN, "CS_NODE_IS_DYN");
ADD_CONST(CS_NODE_CMP_NORMAL, "CS_NODE_CMP_NORMAL");
ADD_CONST(CS_NODE_CMP_SNMP, "CS_NODE_CMP_SNMP");
ADD_CONST(CS_NODE_CMP_SNMP_IMPLIED, "CS_NODE_CMP_SNMP_IMPLIED");
ADD_CONST(CS_NODE_CMP_USER, "CS_NODE_CMP_USER");
ADD_CONST(CS_NODE_CMP_UNSORTED, "CS_NODE_CMP_UNSORTED");
ADD_CONST(CONFD_LOAD_SCHEMA_NODES, "LOAD_SCHEMA_NODES");
ADD_CONST(CONFD_LOAD_SCHEMA_TYPES, "LOAD_SCHEMA_TYPES");
ADD_CONST(CONFD_LOAD_SCHEMA_HASH, "LOAD_SCHEMA_HASH");
ADD_CONST(CONFD_LISTENER_IPC, "LISTENER_IPC");
ADD_CONST(CONFD_LISTENER_NETCONF, "LISTENER_NETCONF");
ADD_CONST(CONFD_LISTENER_SNMP, "LISTENER_SNMP");
ADD_CONST(CONFD_LISTENER_CLI, "LISTENER_CLI");
ADD_CONST(CONFD_LISTENER_WEBUI, "LISTENER_WEBUI");
ADD_CONST(NCS_LISTENER_NETCONF_CALL_HOME, "NCS_LISTENER_NETCONF_CALL_HOME");
/* enum confd_snmp_var_type { */
     ADD_CONST(CONFD_SNMP_VARIABLE, "SNMP_VARIABLE");
     ADD_CONST(CONFD_SNMP_OID, "SNMP_OID");
     ADD_CONST(CONFD_SNMP_COL_ROW, "SNMP_COL_ROW");
/* }; */
/* enum confd_snmp_type { */
     ADD_CONST(CONFD_SNMP_NULL, "SNMP_NULL");
     ADD_CONST(CONFD_SNMP_INTEGER, "SNMP_INTEGER");
     ADD_CONST(CONFD_SNMP_Interger32, "SNMP_Interger32");
     ADD_CONST(CONFD_SNMP_OCTET_STRING, "SNMP_OCTET_STRING");
     ADD_CONST(CONFD_SNMP_OBJECT_IDENTIFIER, "SNMP_OBJECT_IDENTIFIER");
     ADD_CONST(CONFD_SNMP_IpAddress, "SNMP_IpAddress");
     ADD_CONST(CONFD_SNMP_Counter32, "SNMP_Counter32");
     ADD_CONST(CONFD_SNMP_TimeTicks, "SNMP_TimeTicks");
     ADD_CONST(CONFD_SNMP_Opaque, "SNMP_Opaque");
     ADD_CONST(CONFD_SNMP_Counter64, "SNMP_Counter64");
     ADD_CONST(CONFD_SNMP_Unsigned32, "SNMP_Unsigned32");
/* }; */
/* enum confd_iter_op { */
     ADD_CONST(MOP_CREATED, "MOP_CREATED");
     ADD_CONST(MOP_DELETED, "MOP_DELETED");
     ADD_CONST(MOP_MODIFIED, "MOP_MODIFIED");
     ADD_CONST(MOP_VALUE_SET, "MOP_VALUE_SET");
     ADD_CONST(MOP_MOVED_AFTER, "MOP_MOVED_AFTER");
     ADD_CONST(MOP_ATTR_SET, "MOP_ATTR_SET");
/* }; */
/* enum confd_iter_ret { */
     ADD_CONST(ITER_STOP, "ITER_STOP");
     ADD_CONST(ITER_RECURSE, "ITER_RECURSE");
     ADD_CONST(ITER_CONTINUE, "ITER_CONTINUE");
     ADD_CONST(ITER_SUSPEND, "ITER_SUSPEND");
     ADD_CONST(ITER_UP, "ITER_UP");
/* }; */
/* enum confd_iter_flags { */
     ADD_CONST(ITER_WANT_PREV, "ITER_WANT_PREV");
     ADD_CONST(ITER_WANT_ANCESTOR_DELETE, "ITER_WANT_ANCESTOR_DELETE");
     ADD_CONST(ITER_WANT_ATTR, "ITER_WANT_ATTR");
     ADD_CONST(ITER_WANT_CLI_STR, "ITER_WANT_CLI_STR");
     ADD_CONST(ITER_WANT_SCHEMA_ORDER, "ITER_WANT_SCHEMA_ORDER");
     ADD_CONST(ITER_WANT_LEAF_FIRST_ORDER, "ITER_WANT_LEAF_FIRST_ORDER");
     ADD_CONST(ITER_WANT_LEAF_LAST_ORDER, "ITER_WANT_LEAF_LAST_ORDER");
     ADD_CONST(ITER_WANT_REVERSE, "ITER_WANT_REVERSE");
     ADD_CONST(ITER_WANT_P_CONTAINER, "ITER_WANT_P_CONTAINER");
     ADD_CONST(ITER_WANT_LEAF_LIST_AS_LEAF, "ITER_WANT_LEAF_LIST_AS_LEAF");
     ADD_CONST(ITER_WANT_CLI_ORDER, "ITER_WANT_CLI_ORDER");
/* }; */
ADD_CONST(CONFD_HKP_MATCH_NONE, "HKP_MATCH_NONE");
ADD_CONST(CONFD_HKP_MATCH_TAGS, "HKP_MATCH_TAGS");
ADD_CONST(CONFD_HKP_MATCH_HKP, "HKP_MATCH_HKP");
ADD_CONST(CONFD_HKP_MATCH_FULL, "HKP_MATCH_FULL");
ADD_CONST(CONFD_MMAP_SCHEMAS_KEEP_SIZE, "MMAP_SCHEMAS_KEEP_SIZE");
ADD_CONST(CONFD_MMAP_SCHEMAS_FIXED_ADDR, "MMAP_SCHEMAS_FIXED_ADDR");
/* enum confd_serializable_type { */
     ADD_CONST(CONFD_SERIAL_NONE, "SERIAL_NONE");
     ADD_CONST(CONFD_SERIAL_VALUE_T, "SERIAL_VALUE_T");
     ADD_CONST(CONFD_SERIAL_HKEYPATH, "SERIAL_HKEYPATH");
     ADD_CONST(CONFD_SERIAL_TAG_VALUE, "SERIAL_TAG_VALUE");
/* }; */
/* enum confd_progress_verbosity { */
     ADD_CONST(CONFD_VERBOSITY_NORMAL, "VERBOSITY_NORMAL");
     ADD_CONST(CONFD_VERBOSITY_VERBOSE, "VERBOSITY_VERBOSE");
     ADD_CONST(CONFD_VERBOSITY_VERY_VERBOSE, "VERBOSITY_VERY_VERBOSE");
     ADD_CONST(CONFD_VERBOSITY_DEBUG, "VERBOSITY_DEBUG");
/* }; */
/* enum confd_progress_event_type { */
     ADD_CONST(CONFD_PROGRESS_START, "PROGRESS_START");
     ADD_CONST(CONFD_PROGRESS_STOP, "PROGRESS_STOP");
     ADD_CONST(CONFD_PROGRESS_INFO, "PROGRESS_INFO");
/* }; */
ADD_CONST(CONFD_ERR_NOEXISTS, "ERR_NOEXISTS");
ADD_CONST(CONFD_ERR_ALREADY_EXISTS, "ERR_ALREADY_EXISTS");
ADD_CONST(CONFD_ERR_ACCESS_DENIED, "ERR_ACCESS_DENIED");
ADD_CONST(CONFD_ERR_NOT_WRITABLE, "ERR_NOT_WRITABLE");
ADD_CONST(CONFD_ERR_BADTYPE, "ERR_BADTYPE");
ADD_CONST(CONFD_ERR_NOTCREATABLE, "ERR_NOTCREATABLE");
ADD_CONST(CONFD_ERR_NOTDELETABLE, "ERR_NOTDELETABLE");
ADD_CONST(CONFD_ERR_BADPATH, "ERR_BADPATH");
ADD_CONST(CONFD_ERR_NOSTACK, "ERR_NOSTACK");
ADD_CONST(CONFD_ERR_LOCKED, "ERR_LOCKED");
ADD_CONST(CONFD_ERR_INUSE, "ERR_INUSE");
ADD_CONST(CONFD_ERR_NOTSET, "ERR_NOTSET");
ADD_CONST(CONFD_ERR_NON_UNIQUE, "ERR_NON_UNIQUE");
ADD_CONST(CONFD_ERR_BAD_KEYREF, "ERR_BAD_KEYREF");
ADD_CONST(CONFD_ERR_TOO_FEW_ELEMS, "ERR_TOO_FEW_ELEMS");
ADD_CONST(CONFD_ERR_TOO_MANY_ELEMS, "ERR_TOO_MANY_ELEMS");
ADD_CONST(CONFD_ERR_BADSTATE, "ERR_BADSTATE");
ADD_CONST(CONFD_ERR_INTERNAL, "ERR_INTERNAL");
ADD_CONST(CONFD_ERR_EXTERNAL, "ERR_EXTERNAL");
ADD_CONST(CONFD_ERR_MALLOC, "ERR_MALLOC");
ADD_CONST(CONFD_ERR_PROTOUSAGE, "ERR_PROTOUSAGE");
ADD_CONST(CONFD_ERR_NOSESSION, "ERR_NOSESSION");
ADD_CONST(CONFD_ERR_TOOMANYTRANS, "ERR_TOOMANYTRANS");
ADD_CONST(CONFD_ERR_OS, "ERR_OS");
ADD_CONST(CONFD_ERR_HA_CONNECT, "ERR_HA_CONNECT");
ADD_CONST(CONFD_ERR_HA_CLOSED, "ERR_HA_CLOSED");
ADD_CONST(CONFD_ERR_HA_BADFXS, "ERR_HA_BADFXS");
ADD_CONST(CONFD_ERR_HA_BADTOKEN, "ERR_HA_BADTOKEN");
ADD_CONST(CONFD_ERR_HA_BADNAME, "ERR_HA_BADNAME");
ADD_CONST(CONFD_ERR_HA_BIND, "ERR_HA_BIND");
ADD_CONST(CONFD_ERR_HA_NOTICK, "ERR_HA_NOTICK");
ADD_CONST(CONFD_ERR_VALIDATION_WARNING, "ERR_VALIDATION_WARNING");
ADD_CONST(CONFD_ERR_SUBAGENT_DOWN, "ERR_SUBAGENT_DOWN");
ADD_CONST(CONFD_ERR_LIB_NOT_INITIALIZED, "ERR_LIB_NOT_INITIALIZED");
ADD_CONST(CONFD_ERR_TOO_MANY_SESSIONS, "ERR_TOO_MANY_SESSIONS");
ADD_CONST(CONFD_ERR_BAD_CONFIG, "ERR_BAD_CONFIG");
ADD_CONST(CONFD_ERR_RESOURCE_DENIED, "ERR_RESOURCE_DENIED");
ADD_CONST(CONFD_ERR_INCONSISTENT_VALUE, "ERR_INCONSISTENT_VALUE");
ADD_CONST(CONFD_ERR_APPLICATION_INTERNAL, "ERR_APPLICATION_INTERNAL");
ADD_CONST(CONFD_ERR_UNSET_CHOICE, "ERR_UNSET_CHOICE");
ADD_CONST(CONFD_ERR_MUST_FAILED, "ERR_MUST_FAILED");
ADD_CONST(CONFD_ERR_MISSING_INSTANCE, "ERR_MISSING_INSTANCE");
ADD_CONST(CONFD_ERR_INVALID_INSTANCE, "ERR_INVALID_INSTANCE");
ADD_CONST(CONFD_ERR_UNAVAILABLE, "ERR_UNAVAILABLE");
ADD_CONST(CONFD_ERR_EOF, "ERR_EOF");
ADD_CONST(CONFD_ERR_NOTMOVABLE, "ERR_NOTMOVABLE");
ADD_CONST(CONFD_ERR_HA_WITH_UPGRADE, "ERR_HA_WITH_UPGRADE");
ADD_CONST(CONFD_ERR_TIMEOUT, "ERR_TIMEOUT");
ADD_CONST(CONFD_ERR_ABORTED, "ERR_ABORTED");
ADD_CONST(CONFD_ERR_XPATH, "ERR_XPATH");
ADD_CONST(CONFD_ERR_NOT_IMPLEMENTED, "ERR_NOT_IMPLEMENTED");
ADD_CONST(CONFD_ERR_HA_BADVSN, "ERR_HA_BADVSN");
ADD_CONST(CONFD_ERR_POLICY_FAILED, "ERR_POLICY_FAILED");
ADD_CONST(CONFD_ERR_POLICY_COMPILATION_FAILED, "ERR_POLICY_COMPILATION_FAILED");
ADD_CONST(CONFD_ERR_POLICY_EVALUATION_FAILED, "ERR_POLICY_EVALUATION_FAILED");
ADD_CONST(NCS_ERR_CONNECTION_REFUSED, "NCS_ERR_CONNECTION_REFUSED");
ADD_CONST(CONFD_ERR_START_FAILED, "ERR_START_FAILED");
ADD_CONST(CONFD_ERR_DATA_MISSING, "ERR_DATA_MISSING");
ADD_CONST(CONFD_ERR_CLI_CMD, "ERR_CLI_CMD");
ADD_CONST(CONFD_ERR_UPGRADE_IN_PROGRESS, "ERR_UPGRADE_IN_PROGRESS");
ADD_CONST(CONFD_ERR_NOTRANS, "ERR_NOTRANS");
ADD_CONST(NCS_ERR_SERVICE_CONFLICT, "NCS_ERR_SERVICE_CONFLICT");
ADD_CONST(NCS_ERR_CONNECTION_TIMEOUT, "NCS_ERR_CONNECTION_TIMEOUT");
ADD_CONST(NCS_ERR_CONNECTION_CLOSED, "NCS_ERR_CONNECTION_CLOSED");
ADD_CONST(NCS_ERR_DEVICE, "NCS_ERR_DEVICE");
ADD_CONST(NCS_ERR_TEMPLATE, "NCS_ERR_TEMPLATE");
ADD_CONST(CONFD_ERR_NO_MOUNT_ID, "ERR_NO_MOUNT_ID");
ADD_CONST(CONFD_ERR_STALE_INSTANCE, "ERR_STALE_INSTANCE");
