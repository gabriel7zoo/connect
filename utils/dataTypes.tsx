import { getTicketMessages } from '@/services/serverSide/message';
import {
  getUserWorkspaces,
  getWorkspaceById,
} from '@/services/serverSide/workspace';

export interface InboundEmailPayload {
  FromName: string;
  MessageStream: string;
  From: string;
  FromFull: FromFull;
  To: string;
  ToFull: ToFull[];
  Cc: string;
  CcFull: CcFull[];
  Bcc: string;
  BccFull: BccFull[];
  OriginalRecipient: string;
  Subject: string;
  MessageID: string;
  ReplyTo: string;
  MailboxHash: string;
  Date: string;
  TextBody: string;
  HtmlBody: string;
  StrippedTextReply: string;
  Tag: string;
  Headers: Header[];
  Attachments: Attachment[];
}

export interface FromFull {
  Email: string;
  Name: string;
  MailboxHash: string;
}

export interface ToFull {
  Email: string;
  Name: string;
  MailboxHash: string;
}

export interface CcFull {
  Email: string;
  Name: string;
  MailboxHash: string;
}

export interface BccFull {
  Email: string;
  Name: string;
  MailboxHash: string;
}

export interface Header {
  Name: string;
  Value: string;
}

export interface Attachment {
  Name: string;
  Content: string;
  ContentType: string;
  ContentLength: number;
}

export interface InviteModal {
  name: string;
  email: string;
}

export type Workspace = NonNullable<
  Awaited<ReturnType<typeof getUserWorkspaces>>
>[0];

export type CurrentWorkspace = NonNullable<
  Awaited<ReturnType<typeof getWorkspaceById>>
>;

export type MessageDetails = NonNullable<
  Awaited<ReturnType<typeof getTicketMessages>>
>[0];

export interface GetAllApi {
  id: string;
  number: string;
  api_key: string;
  workspace_id: string;
  created_by: string;
  created_at: string;
}
