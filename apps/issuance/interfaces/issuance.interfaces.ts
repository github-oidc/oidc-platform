// eslint-disable-next-line camelcase
import { AutoAccept } from '@credebl/enum/enum';
import { IUserRequest } from '@credebl/user-request/user-request.interface';
import { organisation } from '@prisma/client';
import { IUserRequestInterface } from 'apps/agent-service/src/interface/agent-service.interface';
import { IssueCredentialType } from 'apps/api-gateway/src/issuance/interfaces';

export interface IAttributes {
  attributeName: string;
  name: string;
  value: string;
  isRequired?: boolean;
}

export interface JsonLdCredentialDetailCredentialStatusOptions {
  type: string
}

export class JsonLdCredentialDetailCredentialStatus {
  public constructor(options: JsonLdCredentialDetailCredentialStatusOptions) {
    if (options) {
      this.type = options.type;
    }
  }
  public type!: string;
}

export interface JsonLdCredentialDetailOptionsOptions {
  proofPurpose: string
  created?: string
  domain?: string
  challenge?: string
  credentialStatus?: JsonLdCredentialDetailCredentialStatus
  proofType: string
}

export class JsonLdCredentialDetailOptions {
  public constructor(options: JsonLdCredentialDetailOptionsOptions) {
    if (options) {
      this.proofPurpose = options.proofPurpose;
      this.created = options.created;
      this.domain = options.domain;
      this.challenge = options.challenge;
      this.credentialStatus = options.credentialStatus;
      this.proofType = options.proofType;
    }
  }
  public proofPurpose!: string;
  public created?: string;
  public domain?: string;
  public challenge?: string;
  public proofType!: string;
  public credentialStatus?: JsonLdCredentialDetailCredentialStatus;
}

export class Attribute {
  name: string;
  value: string;
  isRequired?: boolean = false;
}

export interface CredentialsIssuance {
  credentialDefinitionId: string;
  comment: string;
  protocolVersion?: string;
  goalCode?: string;
  parentThreadId?: string;
  willConfirm?: boolean;
  label?: string;
  imageUrl?: string;
  autoAcceptCredential?: AutoAccept;
  credentialType:IssueCredentialType;
  reuseConnection?: boolean;
  orgId: string;
}

export interface OOBIssueCredential extends CredentialsIssuance {
  attributes?: Attribute[];
  isShortenUrl?: boolean;
  credential?:Credential;
  options?:JsonLdCredentialDetailOptions;
}
export interface IIssuance extends OOBIssueCredential {
  user?: IUserRequest;
  connectionId: string;
}

interface IIndy {
  attributes: IAttributes[],
  credentialDefinitionId: string
}

export interface IIssueData {
  protocolVersion?: string;
  connectionId: string;
  credentialFormats: {
    indy: IIndy
  },
  autoAcceptCredential: string,
  comment?: string;
}

interface ICredentialAttribute {
  'mime-type': string;
  name: string;
  value: string;
}

export interface ICreateOfferResponse {
  _tags?: {
    connectionId: string;
    state: string;
    threadId: string;
  };
  metadata?: {
    '_anoncreds/credential'?: {
      schemaId: string;
      credentialDefinitionId: string;
    };
  };
  credentials?: unknown[];
  id: string;
  createdAt: string;
  state: string;
  connectionId: string;
  threadId: string;
  protocolVersion: string;
  credentialAttributes?: ICredentialAttribute[];
  autoAcceptCredential?: string;
  contextCorrelationId?: string;
}

export interface IIssueCredentials {
  issuedCredentialsSearchCriteria: IIssuedCredentialsSearchCriteria;
  user: IUserRequest;
  orgId: string;
}

export interface IPattern {
  cmd: string;
}

export interface ISendOfferNatsPayload {
  issueData: IIssueData,
  url: string,
  apiKey?: string;
  orgId?: string;
}

export interface IIssueCredentialsDefinitions {
  user: IUserRequest;
  credentialRecordId: string;
  orgId: string;
}

export interface IIssuanceWebhookInterface {
  createDateTime: string;
  connectionId: string;
  threadId: string;
  protocolVersion: string;
  credentialAttributes: ICredentialAttributesInterface[];
  orgId: string;
  schemaId: string;
  credDefId: string;
  id: string;
  state: string;
  contextCorrelationId: string;
  metadata: Metadata;
}

interface Metadata {
  '_anoncreds/credential': AnoncredsMetadata;
}

interface AnoncredsMetadata {
  schemaId?: string;
  credentialDefinitionId?: string;
}

export interface IssueCredentialWebhookPayload {
  issueCredentialDto: IIssuanceWebhookInterface;
  id: string;
}

export interface ICredentialAttributesInterface {
  'mime-type': string;
  name: string;
  value: string;
}

export interface ICredential{
  '@context':[];
  type: string[];
}
export interface IOptions{
  proofType:string;
  proofPurpose:string;
}
export interface CredentialOffer {
  emailId: string;
  attributes: IAttributes[];
  credential?:ICredential;
  options?:IOptions
}
export interface OutOfBandCredentialOfferPayload {
  credentialDefinitionId?: string;
  orgId: string;
  comment?: string;
  credentialOffer?: CredentialOffer[];
  emailId?: string;
  attributes?: IAttributes[];
  protocolVersion?: string;
  goalCode?: string,
  parentThreadId?: string,
  willConfirm?: boolean,
  label?: string,
  imageUrl?: string,
  autoAcceptCredential?: string;
  credentialType?:IssueCredentialType;
}

export interface OutOfBandCredentialOffer {
  user: IUserRequest;
  outOfBandCredentialDto: OutOfBandCredentialOfferPayload;
}
export interface SchemaDetails {
  credentialDefinitionId: string;
  tag: string;
  schemaLedgerId: string;
  attributes: string;
}
export interface ImportFileDetails {
  credDefId: string;
  fileKey: string;
  fileName: string;
}

export interface PreviewRequest {
  pageNumber: number,
  pageSize: number,
  searchByText: string,
  sortField: string,
  sortBy: string
}

export interface FileUpload {
  name?: string;
  upload_type?: string;
  status?: string;
  orgId?: string;
  createDateTime?: Date;
  lastChangedDateTime?: Date;
}

export interface FileUploadData {
  fileUpload: string;
  fileRow: string;
  isError: boolean;
  referenceId: string;
  createDateTime: Date;
  error?: string;
  detailError?: string;
  jobId: string;
}

export interface IClientDetails {
  clientId: string;
  userId?: string;
  isSelectiveIssuance?: boolean;
  fileName?: string;
}
export interface IIssuedCredentialsSearchInterface {
  issuedCredentialsSearchCriteria: IIssuedCredentialsSearchCriteria;
  user: IUserRequestInterface;
  orgId: string;
}
export interface IIssuedCredentialsSearchCriteria {
  pageNumber: number;
  pageSize: number;
  sortField: string;
  sortBy: string;
  search: string;
  user?: IUserRequestInterface;
}

export interface OrgAgent {
  organisation: organisation;
  id: string;
  createDateTime: Date;
  createdBy: string;
  lastChangedDateTime: Date;
  lastChangedBy: string;
  orgDid: string;
  verkey: string;
  agentEndPoint: string;
  agentId: string;
  isDidPublic: boolean;
  ledgerId: string;
  orgAgentTypeId: string;
  tenantId: string;
}

export interface SendEmailCredentialOffer {
  iterator: CredentialOffer;
  emailId: string;
  index: number;
  credentialType: IssueCredentialType; 
  protocolVersion: string;
  attributes: IAttributes[]; 
  credentialDefinitionId: string; 
  outOfBandCredential: OutOfBandCredentialOfferPayload;
  comment: string;
  organisation: organisation; 
  errors;
  url: string;
  orgId: string; 
  organizationDetails: organisation;
}