
export enum CommonConstants {
  // Error and Success Responses from POST and GET calls
  RESP_ERR_HTTP_INVALID_HEADER_VALUE = 'ERR_HTTP_INVALID_HEADER_VALUE',
  RESP_ERR_401 = 401,
  RESP_ERR_NOT_FOUND = 404,
  RESP_BAD_REQUEST = 400,
  RESP_ERR_UNPROCESSABLE_ENTITY = 422,
  RESP_SUCCESS_200 = 200,
  RESP_SUCCESS_201 = 201,
  RESP_SUCCESS_204 = 204,
  RESP_ERR_500 = 500,
  UNAUTH_MSG = 'UNAUTHORISED ACCESS',
  DATA_ALREADY_PRESENT = 'RECORD ALREADY EXIST',
  RESP_CONFLICT = 409,
  // URL constants for various GET/POST calls
  // CONNECTION SERVICES
  URL_CONN_GET_CONNECTIONS = '/connections',
  URL_CONN_GET_CONNECTION_BY_ID = '/connections/#',
  URL_CONN_CREATE_CONNECTION_INVITE = '/connections/create-invitation',
  URL_CONN_RECEIVE_CONNECTION_INVITE = '/connections/receive-invitation',
  URL_CONN_ACCEPT_CONNECTION_INVITE = '/connections/#/accept-invitation',
  URL_CONN_ACCEPT_CONNECTION_REQUEST = '/connections/#/accept-request',
  URL_CONN_REMOVE_CONNECTION_BY_ID = '/connections/#/remove',
  URL_CONN_METADATA = '/connections/#/metadata',
  URL_CONN_LEGACY_INVITE = '/oob/create-legacy-invitation',
  URL_CONN_INVITATION = '/url',

  // WALLET SERVICES
  URL_WALLET_CREATE_DID = '/wallet/did/create',
  URL_WALLET_LIST_DID = '/wallet/did',
  URL_WALLET_FETCH_CURR_PUB_DID = '/wallet/did/public',
  URL_WALLET_ASSIGN_CURR_DID_PUB = '/wallet/did/public',
  URL_WALLET_GET_TAGGING_POLICY = '/wallet/tag-policy/#',
  URL_WALLET_SET_TAGGING_POLICY = '/wallet/tag-policy/#',
  URL_WALLET_PROVISION = '/wallet/provision',

  // LEDGER SERVICES
  URL_LEDG_GET_DID_VERKEY = '/ledger/did-verkey?did=#',
  URL_LEDG_REGISTER_NYM = '/ledger/register-nym?did=#&verkey=@&role=$',
  URL_LEDG_GET_DID_ENDPOINT = '/ledger/did-endpoint?did=#',
  URL_LEDG_GET_TAA = '/ledger/taa',
  URL_LEDG_POST_TAA_ACCEPT = '/ledger/taa/accept',


  // MESSAGING SERVICES
  URL_MSG_SEND_MESSAGE = '/connections/#/send-message',
  URL_MSG_TRUST_PING = '/connections/#/send-ping',
  URL_MSG_BY_CONN = '/basic-message/#',

  // CREDENTIAL ISSUANCE SERVICES
  URL_ISSUE_GET_CREDS = '/credentials',
  URL_ISSUE_GET_CREDEX_RECS = '/issue-credential/records',
  URL_ISSUE_GET_CRED_REC_BY_ID = '/credentials/#',
  URL_ISSUE_SEND_CRED = '/credentials/offer-credential',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  URL_ISSUE_SEND_CRED_OFFER = '/credentials/offer-credential',
  URL_ISSUE_CREATE_SEND_PROPOSAL = '/issue-credential/send-proposal',
  URL_ISSUE_CREATE_CRED_OFFER = '/issue-credential/send-offer',
  URL_ISSUE_CREAT_CRED_OFFER_BY_CRED_ID = '/credentials/#/accept-proposal',
  URL_ISSUE_CREATE_CRED_REQUEST = '/issue-credential/records/#/send-request',
  URL_ISSUE_SEND_ISSUED_CRED = '/issue-credential/records/#/issue',
  URL_ISSUE_STORE_CRED = '/issue-credential/records/#/store',
  URL_ISSUE_REPORT_PROB_CREDEX = '/issue-credential/records/#/problem-report',
  URL_ISSUE_REMOVE_CRED = '/issue-credential/records/#/remove',
  URL_ISSUE_REVOKE_CRED = '/revocation/revoke',
  URL_PUBLISH_REVOCATION = '/issue-credential/publish-revocations',
  URL_CREATE_ISSUE_CREDENTIAL_OUT_OF_BAND = '/issue-credential/create',
  URL_CREATE_OUT_OF_BAND_INVITATION = '/out-of-band/create-invitation',
  URL_ISSUE_CREATE_CRED_OFFER_AFJ= '/credentials/create-offer',
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  URL_ISSUE_GET_CREDS_AFJ= '/credentials',
  URL_ISSUE_GET_CREDS_AFJ_BY_CRED_REC_ID= '/credentials',

  // SCHEMA & CRED DEF SERVICES
  URL_SCHM_CREATE_SCHEMA = '/schemas',
  URL_SCHM_GET_SCHEMA_BY_ID = '/schemas/#',
  URL_SCHM_GET_SCHEMA_BY_ATTRB = '/schemas/created',
  URL_SCHM_CREATE_CRED_DEF = '/credential-definitions',
  URL_SCHM_GET_CRED_DEF_BY_ID = '/credential-definitions/#',
  URL_SCHM_GET_CRED_DEF_BY_ATTRB = '/credential-definitions/created',

  // SHARED AGENT
  URL_SHAGENT_CREATE_TENANT = '/multi-tenancy/create-tenant',
  URL_SHAGENT_WITH_TENANT_AGENT = '/multi-tenancy/with-tenant-agent',
  URL_SHAGENT_CREATE_INVITATION = '/multi-tenancy/create-invitation/#',
  URL_SHAGENT_CREATE_OFFER = '/multi-tenancy/credentials/create-offer/#',
  URL_SHAGENT_CREATE_OFFER_OUT_OF_BAND = '/multi-tenancy/credentials/create-offer-oob/#',
  URL_SHAGENT_GET_CREDENTIALS = '/multi-tenancy/credentials/#',
  URL_SHAGENT_GET_CREDENTIALS_BY_CREDENTIAL_ID = '/multi-tenancy/credentials/#/@',
  URL_SHAGENT_GET_PROOFS = '/multi-tenancy/proofs/#',
  URL_SHAGENT_GET_PROOFS_BY_PRESENTATION_ID = '/multi-tenancy/proofs/#/@',
  URL_SHAGENT_REQUEST_PROOF = '/multi-tenancy/proofs/request-proof/#',
  URL_SHAGENT_ACCEPT_PRESENTATION = '/multi-tenancy/proofs/@/accept-presentation/#',

  // PROOF SERVICES
  URL_SEND_PROOF_REQUEST = '/proofs/request-proof',
  URL_GET_PROOF_PRESENTATIONS = '/proofs',
  URL_GET_PROOF_PRESENTATION_BY_ID = '/proofs/#',
  URL_VERIFY_PRESENTATION = '/proofs/#/accept-presentation',

  // server or agent
  URL_SERVER_STATUS = '/status',
  URL_AGENT_WRITE_DID = '/dids/write',
  URL_AGENT_GET_DID = '/dids/#',
  URL_AGENT_GET_DIDS = '/dids',
  URL_AGENT_GET_ENDPOINT = '/agent',

  // ENTITY NAMES
  ENTITY_NAME_TEMPLATE = 'templates',
  ENTITY_NAME_CRED_DEF = 'credential_definition',
  ENTITY_NAME_ISSUED_CRED = 'issue_credentials',
  ENTITY_NAME_PROOF_REQ = 'proof_request',
  ENTITY_NAME_PROOF_PRESENTED = 'presented_proof',

  // ENTITY ACTION
  ENTITY_ACTION_INSERT = 'insert',
  ENTITY_ACTION_UPDATE = 'update',
  ENTITY_ACTION_DELETE = 'delete',


  // EVENTS
  EVENT_AUDIT = 'audit_event',

  // DOMAIN EVENTS
  DOMAIN_EVENT_SCHEMA_CREATED = 'Schema Created',
  DOMAIN_EVENT_CRED_DEF_CREATED = 'Cred-Def Created',
  DOMAIN_EVENT_CRED_ISSUED = 'Credential Issued',
  DOMAIN_EVENT_PROOF_REQ = 'Proof Requested',
  DOMAIN_EVENT_PROOF_VERIFIED = 'Proof Verified',
  DOMAIN_EVENT_CONN_SEND = 'Connection Send',
  DOMAIN_EVENT_USER_ONBOARD = 'User Onboard',
  DOMAIN_EVENT_WALLET_CREATED = 'Wallet Created',

  // (Platform) admin permissions 
  PERMISSION_TENANT_MGMT = 'Tenant Management',
  PERMISSION_ROLE_MGMT = 'Role Management',
  PERMISSION_ORG_REPORTS = 'Organization Reports',
  PERMISSION_TENANT_REPORTS = 'Tenant Reports',

  // Tenant permissions 
  PERMISSION_ORG_MGMT = 'Organization Management',
  PERMISSION_MODIFY_ORG = 'Modify Organizations',


  // Roles And Permissions
  PERMISSION_PLATFORM_MANAGEMENT = 'Platform Management',
  PERMISSION_USER_MANAGEMENT = 'User Management',
  PERMISSION_ROLE_MANAGEMENT = 'Role Management',

  PERMISSION_CONNECTIONS = 'Connections',

  PERMISSION_CREATE_SCHEMA = 'Create Schema',
  PERMISSION_VIEW_SCHEMA = 'View Schema',

  PERMISSION_CREATE_CRED_DEF = 'Create Credential Definition',
  PERMISSION_VIEW_CRED_DEF = 'View Credential Definition',

  PERMISSION_ISSUE_CREDENTIAL = 'Issue Credential',

  PERMISSION_REVOKE_CREDENTIAL = 'Revoke Credential',

  PERMISSION_SEND_PROOF_REQUEST = 'Send Proof Request',

  PERMISSION_VERIFY_PROOF = 'Verify Proof',

  GENERATE_PRESENTATION_PROOF_REQUEST = '/present-proof/create-request',

  ROLE_TRUST_ANCHOR = 'TRUST_ANCHOR',
  ROLE_ENDORSER = 'ENDORSER',

  CONNECTION = 'Connection',
  SCHEMA = 'Schema',
  CREDENTIAL_DEFINITION = 'Credential Definition',
  ISSUE_CREDENTIAL = 'Issue Credentials',
  REVOKE = 'Revoke',
  PROOF_REQUEST = 'Proof Request',
  VERIFY = 'Verify',

  //REVOCATION
  URL_REVOC_REG_CREATE = '/revocation/create-registry',
  URL_GET_REVOC_REG_DATA = '/revocation/registry/#/tails-file',
  URL_UPDATE_FILE = '/revocation/registry/#',
  URL_REVOC_PUBLISH = '/revocation/registry/#/publish',
  URL_REVOC_GETBY_CREDDEF = '/revocation/active-registry/#',
  URL_REVOC_REG_BYID = '/revocation/registry/#',

  // SUBSCRIPTION TYPES
  SUBSCRIPTION_COMMON = 'common',
  SUBSCRIPTION_BOTH = 'both',
  SUBSCRIPTION_ISSUER = 'Issuer',
  SUBSCRIPTION_VERIFIER = 'Verifier',

  URL_KEYCLOAK_MANAGEMENT_AUDIENCE = '/api/v2/',
  URL_KEYCLOAK_MANAGEMENT_APPLICATIONS = '/api/v2/clients',
  URL_KEYCLOAK_MANAGEMENT_APPLICATIONS_SEARCH = '/api/v2/clients/{id}',
  URL_KEYCLOAK_MANAGEMENT_GRANTS = '/api/v2/client-grants',
  URL_KEYCLOAK_MANAGEMENT_ROLES = '/api/v2/roles',
  URL_KEYCLOAK_MANAGEMENT_PERMISSIONS = '/api/v2/roles/{id}/permissions',
  URL_KEYCLOAK_AUTHORIZE = '/authorize',
  URL_KEYCLOAK_TOKEN = '/oauth/token',
  URL_KEYCLOAK_USERINFO = '/userinfo',
  URL_KEYCLOAK_CLIENT_SECRET = 'admin/realms/credebl-platform/clients/{id}/client-secret',
  URL_KEYCLOAK_JWKS = '/protocol/openid-connect/certs',
  URL_KEYCLOAK_MANAGEMENT_CONNECTIONS = '/api/v2/connections',
  SET_TRANSACTION_ROLE = '/transactions/#/set-endorser-role',
  SET_TRANSACTION_INFO = '/transactions/#/set-endorser-info',
  TRANSACTION_CREATE_REQUEST = '/transactions/create-request',
  ENDORSE_TRANSACTION = '/transactions/#/endorse',
  WRITE_TRANSACTION = '/transactions/#/write',

  // Tenant Status
  PENDING_STATE = 0,
  REJECT_STATE = 2,
  APPROVE_STATE = 1,

  //User roles
  TENANT_ROLE = 2,
  SUPER_ADMIN_ROLE = 4,
  PLATFORM_ADMIN_ROLE = 1,
  ORG_ROLE = 3,

  ORG_PLATFORM_ROLE = 1,
  ORG_TENANT_ROLE = 2,
  ORG_ENTITY_ROLE = 3,

  // Organizations Status
  PENDING_ORG = 0,
  REJECT_ORG = 2,
  APPROVE_ORG = 1,

  // Organizations Status
  PENDING_NON_ADMIN_USER = 0,
  INACTIVE_NON_ADMIN_USER = 2,
  ACTIVE_NON_ADMIN_USER = 1,
  ALL_NON_ADMIN_USER = 3,

  //passwordLess-login
  PASSWORDLESS_LOGIN_SCHEMA_ORG = 1,
  PASSWORDLESS_LOGIN_SCHEMA_NAME = 'CREDEBL-PLA',
  PLATFORM_ADMIN_CRED_DEF_NAME = 'CREDEBL-PLA',
  PLATFORM_ADMIN_SCHEMA_VERSION = '1.0',

  LOGIN_PASSWORDLESS = 'passwordless',
  LOGIN_PASSWORD = 'password',


  //onBoarding Type
  ONBOARDING_TYPE_ADMIN = 0,
  ONBOARDING_TYPE_EXTERNAL = 1,
  ONBOARDING_TYPE_INVITATION = 2,


  // Network 
  TESTNET = 'testnet',
  STAGINGNET = 'stagingnet',
  BUILDERNET = 'buildernet',
  MAINNET = 'mainnet',
  LIVENET = 'livenet',


  // Features Id
  SCHEMA_CREATION = 1,
  CREATE_CREDENTIAL_DEFINITION = 2,
  CREATION_OF_ATTRIBUTE = 3,
  CREDENTIAL_ISSUANCE = 4,
  REVOCATION_REGISTRY = 5,
  REVOCATION_UPDATE = 6,
  VERIFY_PROOF = 7,
  ENDORSER_DID = 8,
  ORGANIZATION_CREATION = 9,
  ADD_USER = 10,
}

export const postgresqlErrorCodes = [];
postgresqlErrorCodes['23503'] = 'foreign_key_violation';
postgresqlErrorCodes['00000'] = 'successful_completion';
postgresqlErrorCodes['01000'] = 'warning';
postgresqlErrorCodes['0100C'] = 'dynamic_result_sets_returned';
postgresqlErrorCodes['01008'] = 'implicit_zero_bit_padding';
postgresqlErrorCodes['01003'] = 'null_value_eliminated_in_set_function';
postgresqlErrorCodes['01007'] = 'privilege_not_granted';
postgresqlErrorCodes['01006'] = 'string_data_right_truncation';
postgresqlErrorCodes['01P01'] = 'deprecated_feature';
postgresqlErrorCodes['02000'] = 'no_data';

postgresqlErrorCodes['02001'] = 'no_additional_dynamic_result_sets_returned';
postgresqlErrorCodes['03000'] = 'sql_statement_not_yet_complete';
postgresqlErrorCodes['08000'] = 'connection_exception';
postgresqlErrorCodes['08003'] = 'connection_does_not_exist';
postgresqlErrorCodes['08006'] = 'connection_failure';
postgresqlErrorCodes['08001'] = 'sqlclient_unable_to_establish_sqlconnection';
postgresqlErrorCodes['08004'] = 'sqlserver_rejected_establishment_of_sqlconnection';
postgresqlErrorCodes['08007'] = 'transaction_resolution_unknown';
postgresqlErrorCodes['08P01'] = 'protocol_violation';
postgresqlErrorCodes['09000'] = 'triggered_action_exception';
postgresqlErrorCodes['0A000'] = 'feature_not_supported';
postgresqlErrorCodes['0B000'] = 'invalid_transaction_initiation';
postgresqlErrorCodes['0F000'] = 'locator_exception';
postgresqlErrorCodes['0F001'] = 'invalid_locator_specification';
postgresqlErrorCodes['0L000'] = 'invalid_grantor';
postgresqlErrorCodes['0LP01'] = 'invalid_grant_operation';
postgresqlErrorCodes['0P000'] = 'invalid_role_specification';
postgresqlErrorCodes['0Z000'] = 'diagnostics_exception';
postgresqlErrorCodes['0Z002'] = 'stacked_diagnostics_accessed_without_active_handler';
postgresqlErrorCodes['20000'] = 'case_not_found';
postgresqlErrorCodes['21000'] = 'cardinality_violation';
postgresqlErrorCodes['22000'] = 'data_exception';
postgresqlErrorCodes['2202E'] = 'array_subscript_error';
postgresqlErrorCodes['22021'] = 'character_not_in_repertoire';
postgresqlErrorCodes['22008'] = 'datetime_field_overflow';
postgresqlErrorCodes['22012'] = 'division_by_zero';
postgresqlErrorCodes['22005'] = 'error_in_assignment';
postgresqlErrorCodes['2200B'] = 'escape_character_conflict';


postgresqlErrorCodes['22022'] = 'indicator_overflow';
postgresqlErrorCodes['22015'] = 'interval_field_overflow';
postgresqlErrorCodes['2201E'] = 'invalid_argument_for_logarithm';
postgresqlErrorCodes['22014'] = 'invalid_argument_for_ntile_function';
postgresqlErrorCodes['22016'] = 'invalid_argument_for_nth_value_function';
postgresqlErrorCodes['2201F'] = 'invalid_argument_for_power_function';
postgresqlErrorCodes['2201G'] = 'invalid_argument_for_width_bucket_function';
postgresqlErrorCodes['22018'] = 'invalid_character_value_for_cast';
postgresqlErrorCodes['22007'] = 'invalid_datetime_format';
postgresqlErrorCodes['22019'] = 'invalid_escape_character';
postgresqlErrorCodes['22P02'] = 'invalid_datatype';
postgresqlErrorCodes[''] = '';
