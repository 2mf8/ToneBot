/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Message, MessageReceipt } from "./onebot_base";

export const protobufPackage = "onebot";

export interface SendPrivateMsgReq {
  userId: number;
  message: Message[];
  autoEscape: boolean;
}

export interface SendPrivateMsgResp {
  /** int32 message_id = 1; // 废弃 */
  messageId: MessageReceipt | undefined;
}

export interface SendGroupMsgReq {
  groupId: number;
  message: Message[];
  autoEscape: boolean;
}

export interface SendGroupMsgResp {
  /** int32 message_id = 1; // 废弃 */
  messageId: MessageReceipt | undefined;
}

export interface SendMsgReq {
  messageType: string;
  userId: number;
  groupId: number;
  message: Message[];
  autoEscape: boolean;
}

export interface SendMsgResp {
  /** int32 message_id = 1; // 废弃 */
  messageId: MessageReceipt | undefined;
}

export interface DeleteMsgReq {
  /** int32 message_id = 1; */
  messageId: MessageReceipt | undefined;
}

export interface DeleteMsgResp {}

export interface GetMsgReq {
  messageId: number;
}

export interface GetMsgResp {
  time: number;
  messageType: string;
  messageId: number;
  realId: number;
  sender: GetMsgResp_Sender | undefined;
  message: Message[];
  rawMessage: string;
}

export interface GetMsgResp_Sender {
  userId: number;
  nickname: string;
  card: string;
  sex: string;
  age: number;
  area: string;
  level: string;
  role: string;
  title: string;
}

/** TODO 暂时不支持 */
export interface GetForwardMsgReq {
  id: string;
}

export interface GetForwardMsgResp {}

export interface SendLikeReq {
  userId: number;
  times: number;
}

export interface SendLikeResp {}

export interface SetGroupKickReq {
  groupId: number;
  userId: number;
  rejectAddRequest: boolean;
  userIds: number[];
}

export interface SetGroupKickResp {}

export interface SetGroupBanReq {
  groupId: number;
  userId: number;
  duration: number;
}

export interface SetGroupBanResp {}

export interface SetGroupAnonymousBanReq {
  groupId: number;
  anonymous: SetGroupAnonymousBanReq_Anonymous | undefined;
  anonymousFlag: string;
  flag: string;
  duration: number;
}

export interface SetGroupAnonymousBanReq_Anonymous {
  id: number;
  name: string;
  flag: string;
}

export interface SetGroupAnonymousBanResp {}

export interface SetGroupWholeBanReq {
  groupId: number;
  enable: boolean;
}

export interface SetGroupWholeBanResp {}

export interface SetGroupAdminReq {
  groupId: number;
  userId: number;
  enable: boolean;
}

export interface SetGroupAdminResp {}

export interface SetGroupAnonymousReq {
  groupId: number;
  enable: boolean;
}

export interface SetGroupAnonymousResp {}

export interface SetGroupCardReq {
  groupId: number;
  userId: number;
  card: string;
}

export interface SetGroupCardResp {}

export interface SetGroupNameReq {
  groupId: number;
  groupName: string;
}

export interface SetGroupNameResp {}

export interface SetGroupLeaveReq {
  groupId: number;
  isDismiss: boolean;
}

export interface SetGroupLeaveResp {}

export interface SetGroupSpecialTitleReq {
  groupId: number;
  userId: number;
  specialTitle: string;
  duration: number;
}

export interface SetGroupSpecialTitleResp {}

export interface SetFriendAddRequestReq {
  flag: string;
  approve: boolean;
  remark: string;
}

export interface SetFriendAddRequestResp {}

export interface SetGroupAddRequestReq {
  flag: string;
  subType: string;
  type: string;
  approve: boolean;
  reason: string;
}

export interface SetGroupAddRequestResp {}

export interface GetLoginInfoReq {}

export interface GetLoginInfoResp {
  userId: number;
  nickname: string;
}

export interface GetStrangerInfoReq {
  userId: number;
  noCache: boolean;
}

export interface GetStrangerInfoResp {
  userId: number;
  nickname: string;
  sex: string;
  age: number;
  /** 扩展 */
  level: number;
  /** 扩展 */
  loginDays: number;
}

export interface GetFriendListReq {}

export interface GetFriendListResp {
  friend: GetFriendListResp_Friend[];
}

export interface GetFriendListResp_Friend {
  userId: number;
  nickname: string;
  remark: string;
}

export interface GetGroupInfoReq {
  groupId: number;
  noCache: boolean;
}

export interface GetGroupInfoResp {
  groupId: number;
  groupName: string;
  memberCount: number;
  maxMemberCount: number;
}

export interface GetGroupListReq {}

export interface GetGroupListResp {
  group: GetGroupListResp_Group[];
}

export interface GetGroupListResp_Group {
  groupId: number;
  groupName: string;
  memberCount: number;
  maxMemberCount: number;
}

export interface GetGroupMemberInfoReq {
  groupId: number;
  userId: number;
  noCache: boolean;
}

export interface GetGroupMemberInfoResp {
  groupId: number;
  userId: number;
  nickname: string;
  card: string;
  sex: string;
  age: number;
  area: string;
  joinTime: number;
  lastSentTime: number;
  level: string;
  role: string;
  unfriendly: boolean;
  title: string;
  titleExpireTime: number;
  cardChangeable: boolean;
}

export interface GetGroupMemberListReq {
  groupId: number;
}

export interface GetGroupMemberListResp {
  groupMember: GetGroupMemberListResp_GroupMember[];
}

export interface GetGroupMemberListResp_GroupMember {
  groupId: number;
  userId: number;
  nickname: string;
  card: string;
  sex: string;
  age: number;
  area: string;
  joinTime: number;
  lastSentTime: number;
  level: string;
  role: string;
  unfriendly: boolean;
  title: string;
  titleExpireTime: number;
  cardChangeable: boolean;
}

export interface GetGroupHonorInfoReq {
  groupId: number;
  type: string;
}

export interface GetGroupHonorInfoResp {
  groupId: number;
  currentTalkative: GetGroupHonorInfoResp_CurrentTalkative | undefined;
  talkative: GetGroupHonorInfoResp_Honor[];
  performer: GetGroupHonorInfoResp_Honor[];
  legend: GetGroupHonorInfoResp_Honor[];
  strongNewbie: GetGroupHonorInfoResp_Honor[];
  emotion: GetGroupHonorInfoResp_Honor[];
}

export interface GetGroupHonorInfoResp_CurrentTalkative {
  userId: number;
  nickname: string;
  avatar: string;
  dayCount: number;
}

export interface GetGroupHonorInfoResp_Honor {
  userId: number;
  nickname: string;
  avatar: string;
  description: string;
}

export interface GetCookiesReq {
  domain: string;
}

export interface GetCookiesResp {
  cookies: string;
}

export interface GetCsrfTokenReq {}

export interface GetCsrfTokenResp {
  token: number;
}

export interface GetCredentialsReq {
  domain: string;
}

export interface GetCredentialsResp {
  cookies: string;
  csrfToken: number;
}

export interface GetRecordReq {
  file: string;
  outFormat: string;
}

export interface GetRecordResp {
  file: string;
}

export interface GetImageReq {
  file: string;
}

export interface GetImageResp {
  file: string;
}

export interface CanSendImageReq {}

export interface CanSendImageResp {
  yes: boolean;
}

export interface CanSendRecordReq {}

export interface CanSendRecordResp {
  yes: boolean;
}

export interface GetStatusReq {}

export interface GetStatusResp {
  online: boolean;
  good: boolean;
}

export interface GetVersionInfoReq {}

export interface GetVersionInfoResp {
  appName: string;
  appVersion: string;
  protocolVersion: string;
  extra: { [key: string]: string };
}

export interface GetVersionInfoResp_ExtraEntry {
  key: string;
  value: string;
}

export interface SetRestartReq {
  delay: number;
}

export interface SetRestartResp {}

export interface CleanCacheReq {}

export interface CleanCacheResp {}

export interface SetGroupSignInReq {
  groupId: number;
}

export interface SetGroupSignInResp {}

function createBaseSendPrivateMsgReq(): SendPrivateMsgReq {
  return { userId: 0, message: [], autoEscape: false };
}

export const SendPrivateMsgReq = {
  encode(
    message: SendPrivateMsgReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    for (const v of message.message) {
      Message.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.autoEscape === true) {
      writer.uint32(24).bool(message.autoEscape);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendPrivateMsgReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendPrivateMsgReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.message.push(Message.decode(reader, reader.uint32()));
          break;
        case 3:
          message.autoEscape = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendPrivateMsgReq {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => Message.fromJSON(e))
        : [],
      autoEscape: isSet(object.autoEscape) ? Boolean(object.autoEscape) : false,
    };
  },

  toJSON(message: SendPrivateMsgReq): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    message.autoEscape !== undefined && (obj.autoEscape = message.autoEscape);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendPrivateMsgReq>, I>>(
    object: I
  ): SendPrivateMsgReq {
    const message = createBaseSendPrivateMsgReq();
    message.userId = object.userId ?? 0;
    message.message = object.message?.map((e) => Message.fromPartial(e)) || [];
    message.autoEscape = object.autoEscape ?? false;
    return message;
  },
};

function createBaseSendPrivateMsgResp(): SendPrivateMsgResp {
  return { messageId: undefined };
}

export const SendPrivateMsgResp = {
  encode(
    message: SendPrivateMsgResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageId !== undefined) {
      MessageReceipt.encode(
        message.messageId,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendPrivateMsgResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendPrivateMsgResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.messageId = MessageReceipt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendPrivateMsgResp {
    return {
      messageId: isSet(object.messageId)
        ? MessageReceipt.fromJSON(object.messageId)
        : undefined,
    };
  },

  toJSON(message: SendPrivateMsgResp): unknown {
    const obj: any = {};
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageReceipt.toJSON(message.messageId)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendPrivateMsgResp>, I>>(
    object: I
  ): SendPrivateMsgResp {
    const message = createBaseSendPrivateMsgResp();
    message.messageId =
      object.messageId !== undefined && object.messageId !== null
        ? MessageReceipt.fromPartial(object.messageId)
        : undefined;
    return message;
  },
};

function createBaseSendGroupMsgReq(): SendGroupMsgReq {
  return { groupId: 0, message: [], autoEscape: false };
}

export const SendGroupMsgReq = {
  encode(
    message: SendGroupMsgReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    for (const v of message.message) {
      Message.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.autoEscape === true) {
      writer.uint32(24).bool(message.autoEscape);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendGroupMsgReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendGroupMsgReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.message.push(Message.decode(reader, reader.uint32()));
          break;
        case 3:
          message.autoEscape = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendGroupMsgReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => Message.fromJSON(e))
        : [],
      autoEscape: isSet(object.autoEscape) ? Boolean(object.autoEscape) : false,
    };
  },

  toJSON(message: SendGroupMsgReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    message.autoEscape !== undefined && (obj.autoEscape = message.autoEscape);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendGroupMsgReq>, I>>(
    object: I
  ): SendGroupMsgReq {
    const message = createBaseSendGroupMsgReq();
    message.groupId = object.groupId ?? 0;
    message.message = object.message?.map((e) => Message.fromPartial(e)) || [];
    message.autoEscape = object.autoEscape ?? false;
    return message;
  },
};

function createBaseSendGroupMsgResp(): SendGroupMsgResp {
  return { messageId: undefined };
}

export const SendGroupMsgResp = {
  encode(
    message: SendGroupMsgResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageId !== undefined) {
      MessageReceipt.encode(
        message.messageId,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendGroupMsgResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendGroupMsgResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.messageId = MessageReceipt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendGroupMsgResp {
    return {
      messageId: isSet(object.messageId)
        ? MessageReceipt.fromJSON(object.messageId)
        : undefined,
    };
  },

  toJSON(message: SendGroupMsgResp): unknown {
    const obj: any = {};
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageReceipt.toJSON(message.messageId)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendGroupMsgResp>, I>>(
    object: I
  ): SendGroupMsgResp {
    const message = createBaseSendGroupMsgResp();
    message.messageId =
      object.messageId !== undefined && object.messageId !== null
        ? MessageReceipt.fromPartial(object.messageId)
        : undefined;
    return message;
  },
};

function createBaseSendMsgReq(): SendMsgReq {
  return {
    messageType: "",
    userId: 0,
    groupId: 0,
    message: [],
    autoEscape: false,
  };
}

export const SendMsgReq = {
  encode(
    message: SendMsgReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageType !== "") {
      writer.uint32(10).string(message.messageType);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.groupId !== 0) {
      writer.uint32(24).int64(message.groupId);
    }
    for (const v of message.message) {
      Message.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.autoEscape === true) {
      writer.uint32(40).bool(message.autoEscape);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendMsgReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendMsgReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageType = reader.string();
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.message.push(Message.decode(reader, reader.uint32()));
          break;
        case 5:
          message.autoEscape = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendMsgReq {
    return {
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => Message.fromJSON(e))
        : [],
      autoEscape: isSet(object.autoEscape) ? Boolean(object.autoEscape) : false,
    };
  },

  toJSON(message: SendMsgReq): unknown {
    const obj: any = {};
    message.messageType !== undefined &&
      (obj.messageType = message.messageType);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    message.autoEscape !== undefined && (obj.autoEscape = message.autoEscape);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendMsgReq>, I>>(
    object: I
  ): SendMsgReq {
    const message = createBaseSendMsgReq();
    message.messageType = object.messageType ?? "";
    message.userId = object.userId ?? 0;
    message.groupId = object.groupId ?? 0;
    message.message = object.message?.map((e) => Message.fromPartial(e)) || [];
    message.autoEscape = object.autoEscape ?? false;
    return message;
  },
};

function createBaseSendMsgResp(): SendMsgResp {
  return { messageId: undefined };
}

export const SendMsgResp = {
  encode(
    message: SendMsgResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageId !== undefined) {
      MessageReceipt.encode(
        message.messageId,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendMsgResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendMsgResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.messageId = MessageReceipt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendMsgResp {
    return {
      messageId: isSet(object.messageId)
        ? MessageReceipt.fromJSON(object.messageId)
        : undefined,
    };
  },

  toJSON(message: SendMsgResp): unknown {
    const obj: any = {};
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageReceipt.toJSON(message.messageId)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendMsgResp>, I>>(
    object: I
  ): SendMsgResp {
    const message = createBaseSendMsgResp();
    message.messageId =
      object.messageId !== undefined && object.messageId !== null
        ? MessageReceipt.fromPartial(object.messageId)
        : undefined;
    return message;
  },
};

function createBaseDeleteMsgReq(): DeleteMsgReq {
  return { messageId: undefined };
}

export const DeleteMsgReq = {
  encode(
    message: DeleteMsgReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageId !== undefined) {
      MessageReceipt.encode(
        message.messageId,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMsgReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMsgReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.messageId = MessageReceipt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteMsgReq {
    return {
      messageId: isSet(object.messageId)
        ? MessageReceipt.fromJSON(object.messageId)
        : undefined,
    };
  },

  toJSON(message: DeleteMsgReq): unknown {
    const obj: any = {};
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageReceipt.toJSON(message.messageId)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMsgReq>, I>>(
    object: I
  ): DeleteMsgReq {
    const message = createBaseDeleteMsgReq();
    message.messageId =
      object.messageId !== undefined && object.messageId !== null
        ? MessageReceipt.fromPartial(object.messageId)
        : undefined;
    return message;
  },
};

function createBaseDeleteMsgResp(): DeleteMsgResp {
  return {};
}

export const DeleteMsgResp = {
  encode(
    _: DeleteMsgResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMsgResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteMsgResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteMsgResp {
    return {};
  },

  toJSON(_: DeleteMsgResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMsgResp>, I>>(
    _: I
  ): DeleteMsgResp {
    const message = createBaseDeleteMsgResp();
    return message;
  },
};

function createBaseGetMsgReq(): GetMsgReq {
  return { messageId: 0 };
}

export const GetMsgReq = {
  encode(
    message: GetMsgReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.messageId !== 0) {
      writer.uint32(8).int32(message.messageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMsgReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMsgReq {
    return {
      messageId: isSet(object.messageId) ? Number(object.messageId) : 0,
    };
  },

  toJSON(message: GetMsgReq): unknown {
    const obj: any = {};
    message.messageId !== undefined &&
      (obj.messageId = Math.round(message.messageId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMsgReq>, I>>(
    object: I
  ): GetMsgReq {
    const message = createBaseGetMsgReq();
    message.messageId = object.messageId ?? 0;
    return message;
  },
};

function createBaseGetMsgResp(): GetMsgResp {
  return {
    time: 0,
    messageType: "",
    messageId: 0,
    realId: 0,
    sender: undefined,
    message: [],
    rawMessage: "",
  };
}

export const GetMsgResp = {
  encode(
    message: GetMsgResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int32(message.time);
    }
    if (message.messageType !== "") {
      writer.uint32(18).string(message.messageType);
    }
    if (message.messageId !== 0) {
      writer.uint32(24).int32(message.messageId);
    }
    if (message.realId !== 0) {
      writer.uint32(32).int32(message.realId);
    }
    if (message.sender !== undefined) {
      GetMsgResp_Sender.encode(
        message.sender,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.message) {
      Message.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.rawMessage !== "") {
      writer.uint32(58).string(message.rawMessage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMsgResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.int32();
          break;
        case 2:
          message.messageType = reader.string();
          break;
        case 3:
          message.messageId = reader.int32();
          break;
        case 4:
          message.realId = reader.int32();
          break;
        case 5:
          message.sender = GetMsgResp_Sender.decode(reader, reader.uint32());
          break;
        case 6:
          message.message.push(Message.decode(reader, reader.uint32()));
          break;
        case 7:
          message.rawMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMsgResp {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      messageId: isSet(object.messageId) ? Number(object.messageId) : 0,
      realId: isSet(object.realId) ? Number(object.realId) : 0,
      sender: isSet(object.sender)
        ? GetMsgResp_Sender.fromJSON(object.sender)
        : undefined,
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => Message.fromJSON(e))
        : [],
      rawMessage: isSet(object.rawMessage) ? String(object.rawMessage) : "",
    };
  },

  toJSON(message: GetMsgResp): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.messageType !== undefined &&
      (obj.messageType = message.messageType);
    message.messageId !== undefined &&
      (obj.messageId = Math.round(message.messageId));
    message.realId !== undefined && (obj.realId = Math.round(message.realId));
    message.sender !== undefined &&
      (obj.sender = message.sender
        ? GetMsgResp_Sender.toJSON(message.sender)
        : undefined);
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    message.rawMessage !== undefined && (obj.rawMessage = message.rawMessage);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMsgResp>, I>>(
    object: I
  ): GetMsgResp {
    const message = createBaseGetMsgResp();
    message.time = object.time ?? 0;
    message.messageType = object.messageType ?? "";
    message.messageId = object.messageId ?? 0;
    message.realId = object.realId ?? 0;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? GetMsgResp_Sender.fromPartial(object.sender)
        : undefined;
    message.message = object.message?.map((e) => Message.fromPartial(e)) || [];
    message.rawMessage = object.rawMessage ?? "";
    return message;
  },
};

function createBaseGetMsgResp_Sender(): GetMsgResp_Sender {
  return {
    userId: 0,
    nickname: "",
    card: "",
    sex: "",
    age: 0,
    area: "",
    level: "",
    role: "",
    title: "",
  };
}

export const GetMsgResp_Sender = {
  encode(
    message: GetMsgResp_Sender,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.card !== "") {
      writer.uint32(26).string(message.card);
    }
    if (message.sex !== "") {
      writer.uint32(34).string(message.sex);
    }
    if (message.age !== 0) {
      writer.uint32(40).int32(message.age);
    }
    if (message.area !== "") {
      writer.uint32(50).string(message.area);
    }
    if (message.level !== "") {
      writer.uint32(58).string(message.level);
    }
    if (message.role !== "") {
      writer.uint32(66).string(message.role);
    }
    if (message.title !== "") {
      writer.uint32(74).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMsgResp_Sender {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMsgResp_Sender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.card = reader.string();
          break;
        case 4:
          message.sex = reader.string();
          break;
        case 5:
          message.age = reader.int32();
          break;
        case 6:
          message.area = reader.string();
          break;
        case 7:
          message.level = reader.string();
          break;
        case 8:
          message.role = reader.string();
          break;
        case 9:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMsgResp_Sender {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      card: isSet(object.card) ? String(object.card) : "",
      sex: isSet(object.sex) ? String(object.sex) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
      area: isSet(object.area) ? String(object.area) : "",
      level: isSet(object.level) ? String(object.level) : "",
      role: isSet(object.role) ? String(object.role) : "",
      title: isSet(object.title) ? String(object.title) : "",
    };
  },

  toJSON(message: GetMsgResp_Sender): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.card !== undefined && (obj.card = message.card);
    message.sex !== undefined && (obj.sex = message.sex);
    message.age !== undefined && (obj.age = Math.round(message.age));
    message.area !== undefined && (obj.area = message.area);
    message.level !== undefined && (obj.level = message.level);
    message.role !== undefined && (obj.role = message.role);
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetMsgResp_Sender>, I>>(
    object: I
  ): GetMsgResp_Sender {
    const message = createBaseGetMsgResp_Sender();
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    message.card = object.card ?? "";
    message.sex = object.sex ?? "";
    message.age = object.age ?? 0;
    message.area = object.area ?? "";
    message.level = object.level ?? "";
    message.role = object.role ?? "";
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseGetForwardMsgReq(): GetForwardMsgReq {
  return { id: "" };
}

export const GetForwardMsgReq = {
  encode(
    message: GetForwardMsgReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetForwardMsgReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetForwardMsgReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetForwardMsgReq {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: GetForwardMsgReq): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetForwardMsgReq>, I>>(
    object: I
  ): GetForwardMsgReq {
    const message = createBaseGetForwardMsgReq();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetForwardMsgResp(): GetForwardMsgResp {
  return {};
}

export const GetForwardMsgResp = {
  encode(
    _: GetForwardMsgResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetForwardMsgResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetForwardMsgResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetForwardMsgResp {
    return {};
  },

  toJSON(_: GetForwardMsgResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetForwardMsgResp>, I>>(
    _: I
  ): GetForwardMsgResp {
    const message = createBaseGetForwardMsgResp();
    return message;
  },
};

function createBaseSendLikeReq(): SendLikeReq {
  return { userId: 0, times: 0 };
}

export const SendLikeReq = {
  encode(
    message: SendLikeReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.times !== 0) {
      writer.uint32(16).int32(message.times);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendLikeReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendLikeReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.times = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SendLikeReq {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      times: isSet(object.times) ? Number(object.times) : 0,
    };
  },

  toJSON(message: SendLikeReq): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.times !== undefined && (obj.times = Math.round(message.times));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendLikeReq>, I>>(
    object: I
  ): SendLikeReq {
    const message = createBaseSendLikeReq();
    message.userId = object.userId ?? 0;
    message.times = object.times ?? 0;
    return message;
  },
};

function createBaseSendLikeResp(): SendLikeResp {
  return {};
}

export const SendLikeResp = {
  encode(
    _: SendLikeResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendLikeResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendLikeResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SendLikeResp {
    return {};
  },

  toJSON(_: SendLikeResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SendLikeResp>, I>>(
    _: I
  ): SendLikeResp {
    const message = createBaseSendLikeResp();
    return message;
  },
};

function createBaseSetGroupKickReq(): SetGroupKickReq {
  return { groupId: 0, userId: 0, rejectAddRequest: false, userIds: [] };
}

export const SetGroupKickReq = {
  encode(
    message: SetGroupKickReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.rejectAddRequest === true) {
      writer.uint32(24).bool(message.rejectAddRequest);
    }
    writer.uint32(34).fork();
    for (const v of message.userIds) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupKickReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupKickReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.rejectAddRequest = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.userIds.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.userIds.push(longToNumber(reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupKickReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      rejectAddRequest: isSet(object.rejectAddRequest)
        ? Boolean(object.rejectAddRequest)
        : false,
      userIds: Array.isArray(object?.userIds)
        ? object.userIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SetGroupKickReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.rejectAddRequest !== undefined &&
      (obj.rejectAddRequest = message.rejectAddRequest);
    if (message.userIds) {
      obj.userIds = message.userIds.map((e) => Math.round(e));
    } else {
      obj.userIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupKickReq>, I>>(
    object: I
  ): SetGroupKickReq {
    const message = createBaseSetGroupKickReq();
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.rejectAddRequest = object.rejectAddRequest ?? false;
    message.userIds = object.userIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseSetGroupKickResp(): SetGroupKickResp {
  return {};
}

export const SetGroupKickResp = {
  encode(
    _: SetGroupKickResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupKickResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupKickResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupKickResp {
    return {};
  },

  toJSON(_: SetGroupKickResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupKickResp>, I>>(
    _: I
  ): SetGroupKickResp {
    const message = createBaseSetGroupKickResp();
    return message;
  },
};

function createBaseSetGroupBanReq(): SetGroupBanReq {
  return { groupId: 0, userId: 0, duration: 0 };
}

export const SetGroupBanReq = {
  encode(
    message: SetGroupBanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.duration !== 0) {
      writer.uint32(24).int32(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupBanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupBanReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.duration = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupBanReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: SetGroupBanReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupBanReq>, I>>(
    object: I
  ): SetGroupBanReq {
    const message = createBaseSetGroupBanReq();
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseSetGroupBanResp(): SetGroupBanResp {
  return {};
}

export const SetGroupBanResp = {
  encode(
    _: SetGroupBanResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupBanResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupBanResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupBanResp {
    return {};
  },

  toJSON(_: SetGroupBanResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupBanResp>, I>>(
    _: I
  ): SetGroupBanResp {
    const message = createBaseSetGroupBanResp();
    return message;
  },
};

function createBaseSetGroupAnonymousBanReq(): SetGroupAnonymousBanReq {
  return {
    groupId: 0,
    anonymous: undefined,
    anonymousFlag: "",
    flag: "",
    duration: 0,
  };
}

export const SetGroupAnonymousBanReq = {
  encode(
    message: SetGroupAnonymousBanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.anonymous !== undefined) {
      SetGroupAnonymousBanReq_Anonymous.encode(
        message.anonymous,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.anonymousFlag !== "") {
      writer.uint32(26).string(message.anonymousFlag);
    }
    if (message.flag !== "") {
      writer.uint32(34).string(message.flag);
    }
    if (message.duration !== 0) {
      writer.uint32(40).int64(message.duration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupAnonymousBanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAnonymousBanReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.anonymous = SetGroupAnonymousBanReq_Anonymous.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.anonymousFlag = reader.string();
          break;
        case 4:
          message.flag = reader.string();
          break;
        case 5:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupAnonymousBanReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      anonymous: isSet(object.anonymous)
        ? SetGroupAnonymousBanReq_Anonymous.fromJSON(object.anonymous)
        : undefined,
      anonymousFlag: isSet(object.anonymousFlag)
        ? String(object.anonymousFlag)
        : "",
      flag: isSet(object.flag) ? String(object.flag) : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: SetGroupAnonymousBanReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.anonymous !== undefined &&
      (obj.anonymous = message.anonymous
        ? SetGroupAnonymousBanReq_Anonymous.toJSON(message.anonymous)
        : undefined);
    message.anonymousFlag !== undefined &&
      (obj.anonymousFlag = message.anonymousFlag);
    message.flag !== undefined && (obj.flag = message.flag);
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupAnonymousBanReq>, I>>(
    object: I
  ): SetGroupAnonymousBanReq {
    const message = createBaseSetGroupAnonymousBanReq();
    message.groupId = object.groupId ?? 0;
    message.anonymous =
      object.anonymous !== undefined && object.anonymous !== null
        ? SetGroupAnonymousBanReq_Anonymous.fromPartial(object.anonymous)
        : undefined;
    message.anonymousFlag = object.anonymousFlag ?? "";
    message.flag = object.flag ?? "";
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseSetGroupAnonymousBanReq_Anonymous(): SetGroupAnonymousBanReq_Anonymous {
  return { id: 0, name: "", flag: "" };
}

export const SetGroupAnonymousBanReq_Anonymous = {
  encode(
    message: SetGroupAnonymousBanReq_Anonymous,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.flag !== "") {
      writer.uint32(26).string(message.flag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupAnonymousBanReq_Anonymous {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAnonymousBanReq_Anonymous();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.flag = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupAnonymousBanReq_Anonymous {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      flag: isSet(object.flag) ? String(object.flag) : "",
    };
  },

  toJSON(message: SetGroupAnonymousBanReq_Anonymous): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.flag !== undefined && (obj.flag = message.flag);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SetGroupAnonymousBanReq_Anonymous>, I>
  >(object: I): SetGroupAnonymousBanReq_Anonymous {
    const message = createBaseSetGroupAnonymousBanReq_Anonymous();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.flag = object.flag ?? "";
    return message;
  },
};

function createBaseSetGroupAnonymousBanResp(): SetGroupAnonymousBanResp {
  return {};
}

export const SetGroupAnonymousBanResp = {
  encode(
    _: SetGroupAnonymousBanResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupAnonymousBanResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAnonymousBanResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupAnonymousBanResp {
    return {};
  },

  toJSON(_: SetGroupAnonymousBanResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupAnonymousBanResp>, I>>(
    _: I
  ): SetGroupAnonymousBanResp {
    const message = createBaseSetGroupAnonymousBanResp();
    return message;
  },
};

function createBaseSetGroupWholeBanReq(): SetGroupWholeBanReq {
  return { groupId: 0, enable: false };
}

export const SetGroupWholeBanReq = {
  encode(
    message: SetGroupWholeBanReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.enable === true) {
      writer.uint32(16).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupWholeBanReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupWholeBanReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupWholeBanReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
    };
  },

  toJSON(message: SetGroupWholeBanReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupWholeBanReq>, I>>(
    object: I
  ): SetGroupWholeBanReq {
    const message = createBaseSetGroupWholeBanReq();
    message.groupId = object.groupId ?? 0;
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseSetGroupWholeBanResp(): SetGroupWholeBanResp {
  return {};
}

export const SetGroupWholeBanResp = {
  encode(
    _: SetGroupWholeBanResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupWholeBanResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupWholeBanResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupWholeBanResp {
    return {};
  },

  toJSON(_: SetGroupWholeBanResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupWholeBanResp>, I>>(
    _: I
  ): SetGroupWholeBanResp {
    const message = createBaseSetGroupWholeBanResp();
    return message;
  },
};

function createBaseSetGroupAdminReq(): SetGroupAdminReq {
  return { groupId: 0, userId: 0, enable: false };
}

export const SetGroupAdminReq = {
  encode(
    message: SetGroupAdminReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.enable === true) {
      writer.uint32(24).bool(message.enable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupAdminReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAdminReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupAdminReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
    };
  },

  toJSON(message: SetGroupAdminReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupAdminReq>, I>>(
    object: I
  ): SetGroupAdminReq {
    const message = createBaseSetGroupAdminReq();
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseSetGroupAdminResp(): SetGroupAdminResp {
  return {};
}

export const SetGroupAdminResp = {
  encode(
    _: SetGroupAdminResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupAdminResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAdminResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupAdminResp {
    return {};
  },

  toJSON(_: SetGroupAdminResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupAdminResp>, I>>(
    _: I
  ): SetGroupAdminResp {
    const message = createBaseSetGroupAdminResp();
    return message;
  },
};

function createBaseSetGroupAnonymousReq(): SetGroupAnonymousReq {
  return { groupId: 0, enable: false };
}

export const SetGroupAnonymousReq = {
  encode(
    message: SetGroupAnonymousReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.enable === true) {
      writer.uint32(16).bool(message.enable);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupAnonymousReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAnonymousReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.enable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupAnonymousReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
    };
  },

  toJSON(message: SetGroupAnonymousReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.enable !== undefined && (obj.enable = message.enable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupAnonymousReq>, I>>(
    object: I
  ): SetGroupAnonymousReq {
    const message = createBaseSetGroupAnonymousReq();
    message.groupId = object.groupId ?? 0;
    message.enable = object.enable ?? false;
    return message;
  },
};

function createBaseSetGroupAnonymousResp(): SetGroupAnonymousResp {
  return {};
}

export const SetGroupAnonymousResp = {
  encode(
    _: SetGroupAnonymousResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupAnonymousResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAnonymousResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupAnonymousResp {
    return {};
  },

  toJSON(_: SetGroupAnonymousResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupAnonymousResp>, I>>(
    _: I
  ): SetGroupAnonymousResp {
    const message = createBaseSetGroupAnonymousResp();
    return message;
  },
};

function createBaseSetGroupCardReq(): SetGroupCardReq {
  return { groupId: 0, userId: 0, card: "" };
}

export const SetGroupCardReq = {
  encode(
    message: SetGroupCardReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.card !== "") {
      writer.uint32(26).string(message.card);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupCardReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupCardReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.card = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupCardReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      card: isSet(object.card) ? String(object.card) : "",
    };
  },

  toJSON(message: SetGroupCardReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.card !== undefined && (obj.card = message.card);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupCardReq>, I>>(
    object: I
  ): SetGroupCardReq {
    const message = createBaseSetGroupCardReq();
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.card = object.card ?? "";
    return message;
  },
};

function createBaseSetGroupCardResp(): SetGroupCardResp {
  return {};
}

export const SetGroupCardResp = {
  encode(
    _: SetGroupCardResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupCardResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupCardResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupCardResp {
    return {};
  },

  toJSON(_: SetGroupCardResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupCardResp>, I>>(
    _: I
  ): SetGroupCardResp {
    const message = createBaseSetGroupCardResp();
    return message;
  },
};

function createBaseSetGroupNameReq(): SetGroupNameReq {
  return { groupId: 0, groupName: "" };
}

export const SetGroupNameReq = {
  encode(
    message: SetGroupNameReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupNameReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupNameReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.groupName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupNameReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
    };
  },

  toJSON(message: SetGroupNameReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.groupName !== undefined && (obj.groupName = message.groupName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupNameReq>, I>>(
    object: I
  ): SetGroupNameReq {
    const message = createBaseSetGroupNameReq();
    message.groupId = object.groupId ?? 0;
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBaseSetGroupNameResp(): SetGroupNameResp {
  return {};
}

export const SetGroupNameResp = {
  encode(
    _: SetGroupNameResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupNameResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupNameResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupNameResp {
    return {};
  },

  toJSON(_: SetGroupNameResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupNameResp>, I>>(
    _: I
  ): SetGroupNameResp {
    const message = createBaseSetGroupNameResp();
    return message;
  },
};

function createBaseSetGroupLeaveReq(): SetGroupLeaveReq {
  return { groupId: 0, isDismiss: false };
}

export const SetGroupLeaveReq = {
  encode(
    message: SetGroupLeaveReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.isDismiss === true) {
      writer.uint32(16).bool(message.isDismiss);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupLeaveReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupLeaveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.isDismiss = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupLeaveReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      isDismiss: isSet(object.isDismiss) ? Boolean(object.isDismiss) : false,
    };
  },

  toJSON(message: SetGroupLeaveReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.isDismiss !== undefined && (obj.isDismiss = message.isDismiss);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupLeaveReq>, I>>(
    object: I
  ): SetGroupLeaveReq {
    const message = createBaseSetGroupLeaveReq();
    message.groupId = object.groupId ?? 0;
    message.isDismiss = object.isDismiss ?? false;
    return message;
  },
};

function createBaseSetGroupLeaveResp(): SetGroupLeaveResp {
  return {};
}

export const SetGroupLeaveResp = {
  encode(
    _: SetGroupLeaveResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupLeaveResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupLeaveResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupLeaveResp {
    return {};
  },

  toJSON(_: SetGroupLeaveResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupLeaveResp>, I>>(
    _: I
  ): SetGroupLeaveResp {
    const message = createBaseSetGroupLeaveResp();
    return message;
  },
};

function createBaseSetGroupSpecialTitleReq(): SetGroupSpecialTitleReq {
  return { groupId: 0, userId: 0, specialTitle: "", duration: 0 };
}

export const SetGroupSpecialTitleReq = {
  encode(
    message: SetGroupSpecialTitleReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.specialTitle !== "") {
      writer.uint32(26).string(message.specialTitle);
    }
    if (message.duration !== 0) {
      writer.uint32(32).int64(message.duration);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupSpecialTitleReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupSpecialTitleReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.specialTitle = reader.string();
          break;
        case 4:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupSpecialTitleReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      specialTitle: isSet(object.specialTitle)
        ? String(object.specialTitle)
        : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: SetGroupSpecialTitleReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.specialTitle !== undefined &&
      (obj.specialTitle = message.specialTitle);
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupSpecialTitleReq>, I>>(
    object: I
  ): SetGroupSpecialTitleReq {
    const message = createBaseSetGroupSpecialTitleReq();
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.specialTitle = object.specialTitle ?? "";
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseSetGroupSpecialTitleResp(): SetGroupSpecialTitleResp {
  return {};
}

export const SetGroupSpecialTitleResp = {
  encode(
    _: SetGroupSpecialTitleResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupSpecialTitleResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupSpecialTitleResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupSpecialTitleResp {
    return {};
  },

  toJSON(_: SetGroupSpecialTitleResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupSpecialTitleResp>, I>>(
    _: I
  ): SetGroupSpecialTitleResp {
    const message = createBaseSetGroupSpecialTitleResp();
    return message;
  },
};

function createBaseSetFriendAddRequestReq(): SetFriendAddRequestReq {
  return { flag: "", approve: false, remark: "" };
}

export const SetFriendAddRequestReq = {
  encode(
    message: SetFriendAddRequestReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.flag !== "") {
      writer.uint32(10).string(message.flag);
    }
    if (message.approve === true) {
      writer.uint32(16).bool(message.approve);
    }
    if (message.remark !== "") {
      writer.uint32(26).string(message.remark);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetFriendAddRequestReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFriendAddRequestReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flag = reader.string();
          break;
        case 2:
          message.approve = reader.bool();
          break;
        case 3:
          message.remark = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetFriendAddRequestReq {
    return {
      flag: isSet(object.flag) ? String(object.flag) : "",
      approve: isSet(object.approve) ? Boolean(object.approve) : false,
      remark: isSet(object.remark) ? String(object.remark) : "",
    };
  },

  toJSON(message: SetFriendAddRequestReq): unknown {
    const obj: any = {};
    message.flag !== undefined && (obj.flag = message.flag);
    message.approve !== undefined && (obj.approve = message.approve);
    message.remark !== undefined && (obj.remark = message.remark);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFriendAddRequestReq>, I>>(
    object: I
  ): SetFriendAddRequestReq {
    const message = createBaseSetFriendAddRequestReq();
    message.flag = object.flag ?? "";
    message.approve = object.approve ?? false;
    message.remark = object.remark ?? "";
    return message;
  },
};

function createBaseSetFriendAddRequestResp(): SetFriendAddRequestResp {
  return {};
}

export const SetFriendAddRequestResp = {
  encode(
    _: SetFriendAddRequestResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetFriendAddRequestResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetFriendAddRequestResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetFriendAddRequestResp {
    return {};
  },

  toJSON(_: SetFriendAddRequestResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetFriendAddRequestResp>, I>>(
    _: I
  ): SetFriendAddRequestResp {
    const message = createBaseSetFriendAddRequestResp();
    return message;
  },
};

function createBaseSetGroupAddRequestReq(): SetGroupAddRequestReq {
  return { flag: "", subType: "", type: "", approve: false, reason: "" };
}

export const SetGroupAddRequestReq = {
  encode(
    message: SetGroupAddRequestReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.flag !== "") {
      writer.uint32(10).string(message.flag);
    }
    if (message.subType !== "") {
      writer.uint32(18).string(message.subType);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    if (message.approve === true) {
      writer.uint32(32).bool(message.approve);
    }
    if (message.reason !== "") {
      writer.uint32(42).string(message.reason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupAddRequestReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAddRequestReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flag = reader.string();
          break;
        case 2:
          message.subType = reader.string();
          break;
        case 3:
          message.type = reader.string();
          break;
        case 4:
          message.approve = reader.bool();
          break;
        case 5:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupAddRequestReq {
    return {
      flag: isSet(object.flag) ? String(object.flag) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      type: isSet(object.type) ? String(object.type) : "",
      approve: isSet(object.approve) ? Boolean(object.approve) : false,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: SetGroupAddRequestReq): unknown {
    const obj: any = {};
    message.flag !== undefined && (obj.flag = message.flag);
    message.subType !== undefined && (obj.subType = message.subType);
    message.type !== undefined && (obj.type = message.type);
    message.approve !== undefined && (obj.approve = message.approve);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupAddRequestReq>, I>>(
    object: I
  ): SetGroupAddRequestReq {
    const message = createBaseSetGroupAddRequestReq();
    message.flag = object.flag ?? "";
    message.subType = object.subType ?? "";
    message.type = object.type ?? "";
    message.approve = object.approve ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseSetGroupAddRequestResp(): SetGroupAddRequestResp {
  return {};
}

export const SetGroupAddRequestResp = {
  encode(
    _: SetGroupAddRequestResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SetGroupAddRequestResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupAddRequestResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupAddRequestResp {
    return {};
  },

  toJSON(_: SetGroupAddRequestResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupAddRequestResp>, I>>(
    _: I
  ): SetGroupAddRequestResp {
    const message = createBaseSetGroupAddRequestResp();
    return message;
  },
};

function createBaseGetLoginInfoReq(): GetLoginInfoReq {
  return {};
}

export const GetLoginInfoReq = {
  encode(
    _: GetLoginInfoReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginInfoReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLoginInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetLoginInfoReq {
    return {};
  },

  toJSON(_: GetLoginInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLoginInfoReq>, I>>(
    _: I
  ): GetLoginInfoReq {
    const message = createBaseGetLoginInfoReq();
    return message;
  },
};

function createBaseGetLoginInfoResp(): GetLoginInfoResp {
  return { userId: 0, nickname: "" };
}

export const GetLoginInfoResp = {
  encode(
    message: GetLoginInfoResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLoginInfoResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLoginInfoResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nickname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLoginInfoResp {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
    };
  },

  toJSON(message: GetLoginInfoResp): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetLoginInfoResp>, I>>(
    object: I
  ): GetLoginInfoResp {
    const message = createBaseGetLoginInfoResp();
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    return message;
  },
};

function createBaseGetStrangerInfoReq(): GetStrangerInfoReq {
  return { userId: 0, noCache: false };
}

export const GetStrangerInfoReq = {
  encode(
    message: GetStrangerInfoReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.noCache === true) {
      writer.uint32(16).bool(message.noCache);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStrangerInfoReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStrangerInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.noCache = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStrangerInfoReq {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      noCache: isSet(object.noCache) ? Boolean(object.noCache) : false,
    };
  },

  toJSON(message: GetStrangerInfoReq): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.noCache !== undefined && (obj.noCache = message.noCache);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStrangerInfoReq>, I>>(
    object: I
  ): GetStrangerInfoReq {
    const message = createBaseGetStrangerInfoReq();
    message.userId = object.userId ?? 0;
    message.noCache = object.noCache ?? false;
    return message;
  },
};

function createBaseGetStrangerInfoResp(): GetStrangerInfoResp {
  return { userId: 0, nickname: "", sex: "", age: 0, level: 0, loginDays: 0 };
}

export const GetStrangerInfoResp = {
  encode(
    message: GetStrangerInfoResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.sex !== "") {
      writer.uint32(26).string(message.sex);
    }
    if (message.age !== 0) {
      writer.uint32(32).int32(message.age);
    }
    if (message.level !== 0) {
      writer.uint32(40).int32(message.level);
    }
    if (message.loginDays !== 0) {
      writer.uint32(48).int64(message.loginDays);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStrangerInfoResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStrangerInfoResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.sex = reader.string();
          break;
        case 4:
          message.age = reader.int32();
          break;
        case 5:
          message.level = reader.int32();
          break;
        case 6:
          message.loginDays = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStrangerInfoResp {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      sex: isSet(object.sex) ? String(object.sex) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
      loginDays: isSet(object.loginDays) ? Number(object.loginDays) : 0,
    };
  },

  toJSON(message: GetStrangerInfoResp): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.sex !== undefined && (obj.sex = message.sex);
    message.age !== undefined && (obj.age = Math.round(message.age));
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.loginDays !== undefined &&
      (obj.loginDays = Math.round(message.loginDays));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStrangerInfoResp>, I>>(
    object: I
  ): GetStrangerInfoResp {
    const message = createBaseGetStrangerInfoResp();
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    message.sex = object.sex ?? "";
    message.age = object.age ?? 0;
    message.level = object.level ?? 0;
    message.loginDays = object.loginDays ?? 0;
    return message;
  },
};

function createBaseGetFriendListReq(): GetFriendListReq {
  return {};
}

export const GetFriendListReq = {
  encode(
    _: GetFriendListReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFriendListReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFriendListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetFriendListReq {
    return {};
  },

  toJSON(_: GetFriendListReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFriendListReq>, I>>(
    _: I
  ): GetFriendListReq {
    const message = createBaseGetFriendListReq();
    return message;
  },
};

function createBaseGetFriendListResp(): GetFriendListResp {
  return { friend: [] };
}

export const GetFriendListResp = {
  encode(
    message: GetFriendListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.friend) {
      GetFriendListResp_Friend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFriendListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFriendListResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.friend.push(
            GetFriendListResp_Friend.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFriendListResp {
    return {
      friend: Array.isArray(object?.friend)
        ? object.friend.map((e: any) => GetFriendListResp_Friend.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetFriendListResp): unknown {
    const obj: any = {};
    if (message.friend) {
      obj.friend = message.friend.map((e) =>
        e ? GetFriendListResp_Friend.toJSON(e) : undefined
      );
    } else {
      obj.friend = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFriendListResp>, I>>(
    object: I
  ): GetFriendListResp {
    const message = createBaseGetFriendListResp();
    message.friend =
      object.friend?.map((e) => GetFriendListResp_Friend.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetFriendListResp_Friend(): GetFriendListResp_Friend {
  return { userId: 0, nickname: "", remark: "" };
}

export const GetFriendListResp_Friend = {
  encode(
    message: GetFriendListResp_Friend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.remark !== "") {
      writer.uint32(26).string(message.remark);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFriendListResp_Friend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFriendListResp_Friend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.remark = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFriendListResp_Friend {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      remark: isSet(object.remark) ? String(object.remark) : "",
    };
  },

  toJSON(message: GetFriendListResp_Friend): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.remark !== undefined && (obj.remark = message.remark);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetFriendListResp_Friend>, I>>(
    object: I
  ): GetFriendListResp_Friend {
    const message = createBaseGetFriendListResp_Friend();
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    message.remark = object.remark ?? "";
    return message;
  },
};

function createBaseGetGroupInfoReq(): GetGroupInfoReq {
  return { groupId: 0, noCache: false };
}

export const GetGroupInfoReq = {
  encode(
    message: GetGroupInfoReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.noCache === true) {
      writer.uint32(16).bool(message.noCache);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupInfoReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.noCache = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupInfoReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      noCache: isSet(object.noCache) ? Boolean(object.noCache) : false,
    };
  },

  toJSON(message: GetGroupInfoReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.noCache !== undefined && (obj.noCache = message.noCache);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupInfoReq>, I>>(
    object: I
  ): GetGroupInfoReq {
    const message = createBaseGetGroupInfoReq();
    message.groupId = object.groupId ?? 0;
    message.noCache = object.noCache ?? false;
    return message;
  },
};

function createBaseGetGroupInfoResp(): GetGroupInfoResp {
  return { groupId: 0, groupName: "", memberCount: 0, maxMemberCount: 0 };
}

export const GetGroupInfoResp = {
  encode(
    message: GetGroupInfoResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    if (message.memberCount !== 0) {
      writer.uint32(24).int32(message.memberCount);
    }
    if (message.maxMemberCount !== 0) {
      writer.uint32(32).int32(message.maxMemberCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupInfoResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupInfoResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.groupName = reader.string();
          break;
        case 3:
          message.memberCount = reader.int32();
          break;
        case 4:
          message.maxMemberCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupInfoResp {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
      maxMemberCount: isSet(object.maxMemberCount)
        ? Number(object.maxMemberCount)
        : 0,
    };
  },

  toJSON(message: GetGroupInfoResp): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.memberCount !== undefined &&
      (obj.memberCount = Math.round(message.memberCount));
    message.maxMemberCount !== undefined &&
      (obj.maxMemberCount = Math.round(message.maxMemberCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupInfoResp>, I>>(
    object: I
  ): GetGroupInfoResp {
    const message = createBaseGetGroupInfoResp();
    message.groupId = object.groupId ?? 0;
    message.groupName = object.groupName ?? "";
    message.memberCount = object.memberCount ?? 0;
    message.maxMemberCount = object.maxMemberCount ?? 0;
    return message;
  },
};

function createBaseGetGroupListReq(): GetGroupListReq {
  return {};
}

export const GetGroupListReq = {
  encode(
    _: GetGroupListReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupListReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetGroupListReq {
    return {};
  },

  toJSON(_: GetGroupListReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupListReq>, I>>(
    _: I
  ): GetGroupListReq {
    const message = createBaseGetGroupListReq();
    return message;
  },
};

function createBaseGetGroupListResp(): GetGroupListResp {
  return { group: [] };
}

export const GetGroupListResp = {
  encode(
    message: GetGroupListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.group) {
      GetGroupListResp_Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupListResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.group.push(
            GetGroupListResp_Group.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupListResp {
    return {
      group: Array.isArray(object?.group)
        ? object.group.map((e: any) => GetGroupListResp_Group.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetGroupListResp): unknown {
    const obj: any = {};
    if (message.group) {
      obj.group = message.group.map((e) =>
        e ? GetGroupListResp_Group.toJSON(e) : undefined
      );
    } else {
      obj.group = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupListResp>, I>>(
    object: I
  ): GetGroupListResp {
    const message = createBaseGetGroupListResp();
    message.group =
      object.group?.map((e) => GetGroupListResp_Group.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetGroupListResp_Group(): GetGroupListResp_Group {
  return { groupId: 0, groupName: "", memberCount: 0, maxMemberCount: 0 };
}

export const GetGroupListResp_Group = {
  encode(
    message: GetGroupListResp_Group,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.groupName !== "") {
      writer.uint32(18).string(message.groupName);
    }
    if (message.memberCount !== 0) {
      writer.uint32(24).int32(message.memberCount);
    }
    if (message.maxMemberCount !== 0) {
      writer.uint32(32).int32(message.maxMemberCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupListResp_Group {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupListResp_Group();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.groupName = reader.string();
          break;
        case 3:
          message.memberCount = reader.int32();
          break;
        case 4:
          message.maxMemberCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupListResp_Group {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      groupName: isSet(object.groupName) ? String(object.groupName) : "",
      memberCount: isSet(object.memberCount) ? Number(object.memberCount) : 0,
      maxMemberCount: isSet(object.maxMemberCount)
        ? Number(object.maxMemberCount)
        : 0,
    };
  },

  toJSON(message: GetGroupListResp_Group): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.groupName !== undefined && (obj.groupName = message.groupName);
    message.memberCount !== undefined &&
      (obj.memberCount = Math.round(message.memberCount));
    message.maxMemberCount !== undefined &&
      (obj.maxMemberCount = Math.round(message.maxMemberCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupListResp_Group>, I>>(
    object: I
  ): GetGroupListResp_Group {
    const message = createBaseGetGroupListResp_Group();
    message.groupId = object.groupId ?? 0;
    message.groupName = object.groupName ?? "";
    message.memberCount = object.memberCount ?? 0;
    message.maxMemberCount = object.maxMemberCount ?? 0;
    return message;
  },
};

function createBaseGetGroupMemberInfoReq(): GetGroupMemberInfoReq {
  return { groupId: 0, userId: 0, noCache: false };
}

export const GetGroupMemberInfoReq = {
  encode(
    message: GetGroupMemberInfoReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.noCache === true) {
      writer.uint32(24).bool(message.noCache);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupMemberInfoReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMemberInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.noCache = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupMemberInfoReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      noCache: isSet(object.noCache) ? Boolean(object.noCache) : false,
    };
  },

  toJSON(message: GetGroupMemberInfoReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.noCache !== undefined && (obj.noCache = message.noCache);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupMemberInfoReq>, I>>(
    object: I
  ): GetGroupMemberInfoReq {
    const message = createBaseGetGroupMemberInfoReq();
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.noCache = object.noCache ?? false;
    return message;
  },
};

function createBaseGetGroupMemberInfoResp(): GetGroupMemberInfoResp {
  return {
    groupId: 0,
    userId: 0,
    nickname: "",
    card: "",
    sex: "",
    age: 0,
    area: "",
    joinTime: 0,
    lastSentTime: 0,
    level: "",
    role: "",
    unfriendly: false,
    title: "",
    titleExpireTime: 0,
    cardChangeable: false,
  };
}

export const GetGroupMemberInfoResp = {
  encode(
    message: GetGroupMemberInfoResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.nickname !== "") {
      writer.uint32(26).string(message.nickname);
    }
    if (message.card !== "") {
      writer.uint32(34).string(message.card);
    }
    if (message.sex !== "") {
      writer.uint32(42).string(message.sex);
    }
    if (message.age !== 0) {
      writer.uint32(48).int32(message.age);
    }
    if (message.area !== "") {
      writer.uint32(58).string(message.area);
    }
    if (message.joinTime !== 0) {
      writer.uint32(64).int64(message.joinTime);
    }
    if (message.lastSentTime !== 0) {
      writer.uint32(72).int64(message.lastSentTime);
    }
    if (message.level !== "") {
      writer.uint32(82).string(message.level);
    }
    if (message.role !== "") {
      writer.uint32(90).string(message.role);
    }
    if (message.unfriendly === true) {
      writer.uint32(96).bool(message.unfriendly);
    }
    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }
    if (message.titleExpireTime !== 0) {
      writer.uint32(112).int64(message.titleExpireTime);
    }
    if (message.cardChangeable === true) {
      writer.uint32(120).bool(message.cardChangeable);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupMemberInfoResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMemberInfoResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.nickname = reader.string();
          break;
        case 4:
          message.card = reader.string();
          break;
        case 5:
          message.sex = reader.string();
          break;
        case 6:
          message.age = reader.int32();
          break;
        case 7:
          message.area = reader.string();
          break;
        case 8:
          message.joinTime = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.lastSentTime = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.level = reader.string();
          break;
        case 11:
          message.role = reader.string();
          break;
        case 12:
          message.unfriendly = reader.bool();
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.titleExpireTime = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.cardChangeable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupMemberInfoResp {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      card: isSet(object.card) ? String(object.card) : "",
      sex: isSet(object.sex) ? String(object.sex) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
      area: isSet(object.area) ? String(object.area) : "",
      joinTime: isSet(object.joinTime) ? Number(object.joinTime) : 0,
      lastSentTime: isSet(object.lastSentTime)
        ? Number(object.lastSentTime)
        : 0,
      level: isSet(object.level) ? String(object.level) : "",
      role: isSet(object.role) ? String(object.role) : "",
      unfriendly: isSet(object.unfriendly) ? Boolean(object.unfriendly) : false,
      title: isSet(object.title) ? String(object.title) : "",
      titleExpireTime: isSet(object.titleExpireTime)
        ? Number(object.titleExpireTime)
        : 0,
      cardChangeable: isSet(object.cardChangeable)
        ? Boolean(object.cardChangeable)
        : false,
    };
  },

  toJSON(message: GetGroupMemberInfoResp): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.card !== undefined && (obj.card = message.card);
    message.sex !== undefined && (obj.sex = message.sex);
    message.age !== undefined && (obj.age = Math.round(message.age));
    message.area !== undefined && (obj.area = message.area);
    message.joinTime !== undefined &&
      (obj.joinTime = Math.round(message.joinTime));
    message.lastSentTime !== undefined &&
      (obj.lastSentTime = Math.round(message.lastSentTime));
    message.level !== undefined && (obj.level = message.level);
    message.role !== undefined && (obj.role = message.role);
    message.unfriendly !== undefined && (obj.unfriendly = message.unfriendly);
    message.title !== undefined && (obj.title = message.title);
    message.titleExpireTime !== undefined &&
      (obj.titleExpireTime = Math.round(message.titleExpireTime));
    message.cardChangeable !== undefined &&
      (obj.cardChangeable = message.cardChangeable);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupMemberInfoResp>, I>>(
    object: I
  ): GetGroupMemberInfoResp {
    const message = createBaseGetGroupMemberInfoResp();
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    message.card = object.card ?? "";
    message.sex = object.sex ?? "";
    message.age = object.age ?? 0;
    message.area = object.area ?? "";
    message.joinTime = object.joinTime ?? 0;
    message.lastSentTime = object.lastSentTime ?? 0;
    message.level = object.level ?? "";
    message.role = object.role ?? "";
    message.unfriendly = object.unfriendly ?? false;
    message.title = object.title ?? "";
    message.titleExpireTime = object.titleExpireTime ?? 0;
    message.cardChangeable = object.cardChangeable ?? false;
    return message;
  },
};

function createBaseGetGroupMemberListReq(): GetGroupMemberListReq {
  return { groupId: 0 };
}

export const GetGroupMemberListReq = {
  encode(
    message: GetGroupMemberListReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupMemberListReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMemberListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupMemberListReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },

  toJSON(message: GetGroupMemberListReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupMemberListReq>, I>>(
    object: I
  ): GetGroupMemberListReq {
    const message = createBaseGetGroupMemberListReq();
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseGetGroupMemberListResp(): GetGroupMemberListResp {
  return { groupMember: [] };
}

export const GetGroupMemberListResp = {
  encode(
    message: GetGroupMemberListResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.groupMember) {
      GetGroupMemberListResp_GroupMember.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupMemberListResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMemberListResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupMember.push(
            GetGroupMemberListResp_GroupMember.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupMemberListResp {
    return {
      groupMember: Array.isArray(object?.groupMember)
        ? object.groupMember.map((e: any) =>
            GetGroupMemberListResp_GroupMember.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetGroupMemberListResp): unknown {
    const obj: any = {};
    if (message.groupMember) {
      obj.groupMember = message.groupMember.map((e) =>
        e ? GetGroupMemberListResp_GroupMember.toJSON(e) : undefined
      );
    } else {
      obj.groupMember = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupMemberListResp>, I>>(
    object: I
  ): GetGroupMemberListResp {
    const message = createBaseGetGroupMemberListResp();
    message.groupMember =
      object.groupMember?.map((e) =>
        GetGroupMemberListResp_GroupMember.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseGetGroupMemberListResp_GroupMember(): GetGroupMemberListResp_GroupMember {
  return {
    groupId: 0,
    userId: 0,
    nickname: "",
    card: "",
    sex: "",
    age: 0,
    area: "",
    joinTime: 0,
    lastSentTime: 0,
    level: "",
    role: "",
    unfriendly: false,
    title: "",
    titleExpireTime: 0,
    cardChangeable: false,
  };
}

export const GetGroupMemberListResp_GroupMember = {
  encode(
    message: GetGroupMemberListResp_GroupMember,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).int64(message.userId);
    }
    if (message.nickname !== "") {
      writer.uint32(26).string(message.nickname);
    }
    if (message.card !== "") {
      writer.uint32(34).string(message.card);
    }
    if (message.sex !== "") {
      writer.uint32(42).string(message.sex);
    }
    if (message.age !== 0) {
      writer.uint32(48).int32(message.age);
    }
    if (message.area !== "") {
      writer.uint32(58).string(message.area);
    }
    if (message.joinTime !== 0) {
      writer.uint32(64).int64(message.joinTime);
    }
    if (message.lastSentTime !== 0) {
      writer.uint32(72).int64(message.lastSentTime);
    }
    if (message.level !== "") {
      writer.uint32(82).string(message.level);
    }
    if (message.role !== "") {
      writer.uint32(90).string(message.role);
    }
    if (message.unfriendly === true) {
      writer.uint32(96).bool(message.unfriendly);
    }
    if (message.title !== "") {
      writer.uint32(106).string(message.title);
    }
    if (message.titleExpireTime !== 0) {
      writer.uint32(112).int64(message.titleExpireTime);
    }
    if (message.cardChangeable === true) {
      writer.uint32(120).bool(message.cardChangeable);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupMemberListResp_GroupMember {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupMemberListResp_GroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.nickname = reader.string();
          break;
        case 4:
          message.card = reader.string();
          break;
        case 5:
          message.sex = reader.string();
          break;
        case 6:
          message.age = reader.int32();
          break;
        case 7:
          message.area = reader.string();
          break;
        case 8:
          message.joinTime = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.lastSentTime = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.level = reader.string();
          break;
        case 11:
          message.role = reader.string();
          break;
        case 12:
          message.unfriendly = reader.bool();
          break;
        case 13:
          message.title = reader.string();
          break;
        case 14:
          message.titleExpireTime = longToNumber(reader.int64() as Long);
          break;
        case 15:
          message.cardChangeable = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupMemberListResp_GroupMember {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      card: isSet(object.card) ? String(object.card) : "",
      sex: isSet(object.sex) ? String(object.sex) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
      area: isSet(object.area) ? String(object.area) : "",
      joinTime: isSet(object.joinTime) ? Number(object.joinTime) : 0,
      lastSentTime: isSet(object.lastSentTime)
        ? Number(object.lastSentTime)
        : 0,
      level: isSet(object.level) ? String(object.level) : "",
      role: isSet(object.role) ? String(object.role) : "",
      unfriendly: isSet(object.unfriendly) ? Boolean(object.unfriendly) : false,
      title: isSet(object.title) ? String(object.title) : "",
      titleExpireTime: isSet(object.titleExpireTime)
        ? Number(object.titleExpireTime)
        : 0,
      cardChangeable: isSet(object.cardChangeable)
        ? Boolean(object.cardChangeable)
        : false,
    };
  },

  toJSON(message: GetGroupMemberListResp_GroupMember): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.card !== undefined && (obj.card = message.card);
    message.sex !== undefined && (obj.sex = message.sex);
    message.age !== undefined && (obj.age = Math.round(message.age));
    message.area !== undefined && (obj.area = message.area);
    message.joinTime !== undefined &&
      (obj.joinTime = Math.round(message.joinTime));
    message.lastSentTime !== undefined &&
      (obj.lastSentTime = Math.round(message.lastSentTime));
    message.level !== undefined && (obj.level = message.level);
    message.role !== undefined && (obj.role = message.role);
    message.unfriendly !== undefined && (obj.unfriendly = message.unfriendly);
    message.title !== undefined && (obj.title = message.title);
    message.titleExpireTime !== undefined &&
      (obj.titleExpireTime = Math.round(message.titleExpireTime));
    message.cardChangeable !== undefined &&
      (obj.cardChangeable = message.cardChangeable);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetGroupMemberListResp_GroupMember>, I>
  >(object: I): GetGroupMemberListResp_GroupMember {
    const message = createBaseGetGroupMemberListResp_GroupMember();
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    message.card = object.card ?? "";
    message.sex = object.sex ?? "";
    message.age = object.age ?? 0;
    message.area = object.area ?? "";
    message.joinTime = object.joinTime ?? 0;
    message.lastSentTime = object.lastSentTime ?? 0;
    message.level = object.level ?? "";
    message.role = object.role ?? "";
    message.unfriendly = object.unfriendly ?? false;
    message.title = object.title ?? "";
    message.titleExpireTime = object.titleExpireTime ?? 0;
    message.cardChangeable = object.cardChangeable ?? false;
    return message;
  },
};

function createBaseGetGroupHonorInfoReq(): GetGroupHonorInfoReq {
  return { groupId: 0, type: "" };
}

export const GetGroupHonorInfoReq = {
  encode(
    message: GetGroupHonorInfoReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupHonorInfoReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupHonorInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.type = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupHonorInfoReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      type: isSet(object.type) ? String(object.type) : "",
    };
  },

  toJSON(message: GetGroupHonorInfoReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupHonorInfoReq>, I>>(
    object: I
  ): GetGroupHonorInfoReq {
    const message = createBaseGetGroupHonorInfoReq();
    message.groupId = object.groupId ?? 0;
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseGetGroupHonorInfoResp(): GetGroupHonorInfoResp {
  return {
    groupId: 0,
    currentTalkative: undefined,
    talkative: [],
    performer: [],
    legend: [],
    strongNewbie: [],
    emotion: [],
  };
}

export const GetGroupHonorInfoResp = {
  encode(
    message: GetGroupHonorInfoResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    if (message.currentTalkative !== undefined) {
      GetGroupHonorInfoResp_CurrentTalkative.encode(
        message.currentTalkative,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.talkative) {
      GetGroupHonorInfoResp_Honor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.performer) {
      GetGroupHonorInfoResp_Honor.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.legend) {
      GetGroupHonorInfoResp_Honor.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.strongNewbie) {
      GetGroupHonorInfoResp_Honor.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.emotion) {
      GetGroupHonorInfoResp_Honor.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupHonorInfoResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupHonorInfoResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.currentTalkative =
            GetGroupHonorInfoResp_CurrentTalkative.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.talkative.push(
            GetGroupHonorInfoResp_Honor.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.performer.push(
            GetGroupHonorInfoResp_Honor.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.legend.push(
            GetGroupHonorInfoResp_Honor.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.strongNewbie.push(
            GetGroupHonorInfoResp_Honor.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.emotion.push(
            GetGroupHonorInfoResp_Honor.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupHonorInfoResp {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      currentTalkative: isSet(object.currentTalkative)
        ? GetGroupHonorInfoResp_CurrentTalkative.fromJSON(
            object.currentTalkative
          )
        : undefined,
      talkative: Array.isArray(object?.talkative)
        ? object.talkative.map((e: any) =>
            GetGroupHonorInfoResp_Honor.fromJSON(e)
          )
        : [],
      performer: Array.isArray(object?.performer)
        ? object.performer.map((e: any) =>
            GetGroupHonorInfoResp_Honor.fromJSON(e)
          )
        : [],
      legend: Array.isArray(object?.legend)
        ? object.legend.map((e: any) => GetGroupHonorInfoResp_Honor.fromJSON(e))
        : [],
      strongNewbie: Array.isArray(object?.strongNewbie)
        ? object.strongNewbie.map((e: any) =>
            GetGroupHonorInfoResp_Honor.fromJSON(e)
          )
        : [],
      emotion: Array.isArray(object?.emotion)
        ? object.emotion.map((e: any) =>
            GetGroupHonorInfoResp_Honor.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetGroupHonorInfoResp): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.currentTalkative !== undefined &&
      (obj.currentTalkative = message.currentTalkative
        ? GetGroupHonorInfoResp_CurrentTalkative.toJSON(
            message.currentTalkative
          )
        : undefined);
    if (message.talkative) {
      obj.talkative = message.talkative.map((e) =>
        e ? GetGroupHonorInfoResp_Honor.toJSON(e) : undefined
      );
    } else {
      obj.talkative = [];
    }
    if (message.performer) {
      obj.performer = message.performer.map((e) =>
        e ? GetGroupHonorInfoResp_Honor.toJSON(e) : undefined
      );
    } else {
      obj.performer = [];
    }
    if (message.legend) {
      obj.legend = message.legend.map((e) =>
        e ? GetGroupHonorInfoResp_Honor.toJSON(e) : undefined
      );
    } else {
      obj.legend = [];
    }
    if (message.strongNewbie) {
      obj.strongNewbie = message.strongNewbie.map((e) =>
        e ? GetGroupHonorInfoResp_Honor.toJSON(e) : undefined
      );
    } else {
      obj.strongNewbie = [];
    }
    if (message.emotion) {
      obj.emotion = message.emotion.map((e) =>
        e ? GetGroupHonorInfoResp_Honor.toJSON(e) : undefined
      );
    } else {
      obj.emotion = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupHonorInfoResp>, I>>(
    object: I
  ): GetGroupHonorInfoResp {
    const message = createBaseGetGroupHonorInfoResp();
    message.groupId = object.groupId ?? 0;
    message.currentTalkative =
      object.currentTalkative !== undefined && object.currentTalkative !== null
        ? GetGroupHonorInfoResp_CurrentTalkative.fromPartial(
            object.currentTalkative
          )
        : undefined;
    message.talkative =
      object.talkative?.map((e) =>
        GetGroupHonorInfoResp_Honor.fromPartial(e)
      ) || [];
    message.performer =
      object.performer?.map((e) =>
        GetGroupHonorInfoResp_Honor.fromPartial(e)
      ) || [];
    message.legend =
      object.legend?.map((e) => GetGroupHonorInfoResp_Honor.fromPartial(e)) ||
      [];
    message.strongNewbie =
      object.strongNewbie?.map((e) =>
        GetGroupHonorInfoResp_Honor.fromPartial(e)
      ) || [];
    message.emotion =
      object.emotion?.map((e) => GetGroupHonorInfoResp_Honor.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseGetGroupHonorInfoResp_CurrentTalkative(): GetGroupHonorInfoResp_CurrentTalkative {
  return { userId: 0, nickname: "", avatar: "", dayCount: 0 };
}

export const GetGroupHonorInfoResp_CurrentTalkative = {
  encode(
    message: GetGroupHonorInfoResp_CurrentTalkative,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.avatar !== "") {
      writer.uint32(26).string(message.avatar);
    }
    if (message.dayCount !== 0) {
      writer.uint32(32).int32(message.dayCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupHonorInfoResp_CurrentTalkative {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupHonorInfoResp_CurrentTalkative();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.avatar = reader.string();
          break;
        case 4:
          message.dayCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupHonorInfoResp_CurrentTalkative {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
      dayCount: isSet(object.dayCount) ? Number(object.dayCount) : 0,
    };
  },

  toJSON(message: GetGroupHonorInfoResp_CurrentTalkative): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    message.dayCount !== undefined &&
      (obj.dayCount = Math.round(message.dayCount));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GetGroupHonorInfoResp_CurrentTalkative>, I>
  >(object: I): GetGroupHonorInfoResp_CurrentTalkative {
    const message = createBaseGetGroupHonorInfoResp_CurrentTalkative();
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    message.avatar = object.avatar ?? "";
    message.dayCount = object.dayCount ?? 0;
    return message;
  },
};

function createBaseGetGroupHonorInfoResp_Honor(): GetGroupHonorInfoResp_Honor {
  return { userId: 0, nickname: "", avatar: "", description: "" };
}

export const GetGroupHonorInfoResp_Honor = {
  encode(
    message: GetGroupHonorInfoResp_Honor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).int64(message.userId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    if (message.avatar !== "") {
      writer.uint32(26).string(message.avatar);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetGroupHonorInfoResp_Honor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupHonorInfoResp_Honor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          message.avatar = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetGroupHonorInfoResp_Honor {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      avatar: isSet(object.avatar) ? String(object.avatar) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: GetGroupHonorInfoResp_Honor): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.avatar !== undefined && (obj.avatar = message.avatar);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetGroupHonorInfoResp_Honor>, I>>(
    object: I
  ): GetGroupHonorInfoResp_Honor {
    const message = createBaseGetGroupHonorInfoResp_Honor();
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    message.avatar = object.avatar ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseGetCookiesReq(): GetCookiesReq {
  return { domain: "" };
}

export const GetCookiesReq = {
  encode(
    message: GetCookiesReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCookiesReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCookiesReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCookiesReq {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
    };
  },

  toJSON(message: GetCookiesReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCookiesReq>, I>>(
    object: I
  ): GetCookiesReq {
    const message = createBaseGetCookiesReq();
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseGetCookiesResp(): GetCookiesResp {
  return { cookies: "" };
}

export const GetCookiesResp = {
  encode(
    message: GetCookiesResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cookies !== "") {
      writer.uint32(10).string(message.cookies);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCookiesResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCookiesResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cookies = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCookiesResp {
    return {
      cookies: isSet(object.cookies) ? String(object.cookies) : "",
    };
  },

  toJSON(message: GetCookiesResp): unknown {
    const obj: any = {};
    message.cookies !== undefined && (obj.cookies = message.cookies);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCookiesResp>, I>>(
    object: I
  ): GetCookiesResp {
    const message = createBaseGetCookiesResp();
    message.cookies = object.cookies ?? "";
    return message;
  },
};

function createBaseGetCsrfTokenReq(): GetCsrfTokenReq {
  return {};
}

export const GetCsrfTokenReq = {
  encode(
    _: GetCsrfTokenReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCsrfTokenReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCsrfTokenReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetCsrfTokenReq {
    return {};
  },

  toJSON(_: GetCsrfTokenReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCsrfTokenReq>, I>>(
    _: I
  ): GetCsrfTokenReq {
    const message = createBaseGetCsrfTokenReq();
    return message;
  },
};

function createBaseGetCsrfTokenResp(): GetCsrfTokenResp {
  return { token: 0 };
}

export const GetCsrfTokenResp = {
  encode(
    message: GetCsrfTokenResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.token !== 0) {
      writer.uint32(8).int32(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCsrfTokenResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCsrfTokenResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCsrfTokenResp {
    return {
      token: isSet(object.token) ? Number(object.token) : 0,
    };
  },

  toJSON(message: GetCsrfTokenResp): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = Math.round(message.token));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCsrfTokenResp>, I>>(
    object: I
  ): GetCsrfTokenResp {
    const message = createBaseGetCsrfTokenResp();
    message.token = object.token ?? 0;
    return message;
  },
};

function createBaseGetCredentialsReq(): GetCredentialsReq {
  return { domain: "" };
}

export const GetCredentialsReq = {
  encode(
    message: GetCredentialsReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.domain !== "") {
      writer.uint32(10).string(message.domain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCredentialsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCredentialsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.domain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCredentialsReq {
    return {
      domain: isSet(object.domain) ? String(object.domain) : "",
    };
  },

  toJSON(message: GetCredentialsReq): unknown {
    const obj: any = {};
    message.domain !== undefined && (obj.domain = message.domain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCredentialsReq>, I>>(
    object: I
  ): GetCredentialsReq {
    const message = createBaseGetCredentialsReq();
    message.domain = object.domain ?? "";
    return message;
  },
};

function createBaseGetCredentialsResp(): GetCredentialsResp {
  return { cookies: "", csrfToken: 0 };
}

export const GetCredentialsResp = {
  encode(
    message: GetCredentialsResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cookies !== "") {
      writer.uint32(10).string(message.cookies);
    }
    if (message.csrfToken !== 0) {
      writer.uint32(16).int32(message.csrfToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCredentialsResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCredentialsResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cookies = reader.string();
          break;
        case 2:
          message.csrfToken = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCredentialsResp {
    return {
      cookies: isSet(object.cookies) ? String(object.cookies) : "",
      csrfToken: isSet(object.csrfToken) ? Number(object.csrfToken) : 0,
    };
  },

  toJSON(message: GetCredentialsResp): unknown {
    const obj: any = {};
    message.cookies !== undefined && (obj.cookies = message.cookies);
    message.csrfToken !== undefined &&
      (obj.csrfToken = Math.round(message.csrfToken));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetCredentialsResp>, I>>(
    object: I
  ): GetCredentialsResp {
    const message = createBaseGetCredentialsResp();
    message.cookies = object.cookies ?? "";
    message.csrfToken = object.csrfToken ?? 0;
    return message;
  },
};

function createBaseGetRecordReq(): GetRecordReq {
  return { file: "", outFormat: "" };
}

export const GetRecordReq = {
  encode(
    message: GetRecordReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.outFormat !== "") {
      writer.uint32(18).string(message.outFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRecordReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRecordReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        case 2:
          message.outFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRecordReq {
    return {
      file: isSet(object.file) ? String(object.file) : "",
      outFormat: isSet(object.outFormat) ? String(object.outFormat) : "",
    };
  },

  toJSON(message: GetRecordReq): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.outFormat !== undefined && (obj.outFormat = message.outFormat);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRecordReq>, I>>(
    object: I
  ): GetRecordReq {
    const message = createBaseGetRecordReq();
    message.file = object.file ?? "";
    message.outFormat = object.outFormat ?? "";
    return message;
  },
};

function createBaseGetRecordResp(): GetRecordResp {
  return { file: "" };
}

export const GetRecordResp = {
  encode(
    message: GetRecordResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRecordResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRecordResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetRecordResp {
    return {
      file: isSet(object.file) ? String(object.file) : "",
    };
  },

  toJSON(message: GetRecordResp): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetRecordResp>, I>>(
    object: I
  ): GetRecordResp {
    const message = createBaseGetRecordResp();
    message.file = object.file ?? "";
    return message;
  },
};

function createBaseGetImageReq(): GetImageReq {
  return { file: "" };
}

export const GetImageReq = {
  encode(
    message: GetImageReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetImageReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetImageReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetImageReq {
    return {
      file: isSet(object.file) ? String(object.file) : "",
    };
  },

  toJSON(message: GetImageReq): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetImageReq>, I>>(
    object: I
  ): GetImageReq {
    const message = createBaseGetImageReq();
    message.file = object.file ?? "";
    return message;
  },
};

function createBaseGetImageResp(): GetImageResp {
  return { file: "" };
}

export const GetImageResp = {
  encode(
    message: GetImageResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetImageResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetImageResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetImageResp {
    return {
      file: isSet(object.file) ? String(object.file) : "",
    };
  },

  toJSON(message: GetImageResp): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetImageResp>, I>>(
    object: I
  ): GetImageResp {
    const message = createBaseGetImageResp();
    message.file = object.file ?? "";
    return message;
  },
};

function createBaseCanSendImageReq(): CanSendImageReq {
  return {};
}

export const CanSendImageReq = {
  encode(
    _: CanSendImageReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanSendImageReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanSendImageReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CanSendImageReq {
    return {};
  },

  toJSON(_: CanSendImageReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CanSendImageReq>, I>>(
    _: I
  ): CanSendImageReq {
    const message = createBaseCanSendImageReq();
    return message;
  },
};

function createBaseCanSendImageResp(): CanSendImageResp {
  return { yes: false };
}

export const CanSendImageResp = {
  encode(
    message: CanSendImageResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.yes === true) {
      writer.uint32(8).bool(message.yes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanSendImageResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanSendImageResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanSendImageResp {
    return {
      yes: isSet(object.yes) ? Boolean(object.yes) : false,
    };
  },

  toJSON(message: CanSendImageResp): unknown {
    const obj: any = {};
    message.yes !== undefined && (obj.yes = message.yes);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CanSendImageResp>, I>>(
    object: I
  ): CanSendImageResp {
    const message = createBaseCanSendImageResp();
    message.yes = object.yes ?? false;
    return message;
  },
};

function createBaseCanSendRecordReq(): CanSendRecordReq {
  return {};
}

export const CanSendRecordReq = {
  encode(
    _: CanSendRecordReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanSendRecordReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanSendRecordReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CanSendRecordReq {
    return {};
  },

  toJSON(_: CanSendRecordReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CanSendRecordReq>, I>>(
    _: I
  ): CanSendRecordReq {
    const message = createBaseCanSendRecordReq();
    return message;
  },
};

function createBaseCanSendRecordResp(): CanSendRecordResp {
  return { yes: false };
}

export const CanSendRecordResp = {
  encode(
    message: CanSendRecordResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.yes === true) {
      writer.uint32(8).bool(message.yes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CanSendRecordResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanSendRecordResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yes = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CanSendRecordResp {
    return {
      yes: isSet(object.yes) ? Boolean(object.yes) : false,
    };
  },

  toJSON(message: CanSendRecordResp): unknown {
    const obj: any = {};
    message.yes !== undefined && (obj.yes = message.yes);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CanSendRecordResp>, I>>(
    object: I
  ): CanSendRecordResp {
    const message = createBaseCanSendRecordResp();
    message.yes = object.yes ?? false;
    return message;
  },
};

function createBaseGetStatusReq(): GetStatusReq {
  return {};
}

export const GetStatusReq = {
  encode(
    _: GetStatusReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStatusReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStatusReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetStatusReq {
    return {};
  },

  toJSON(_: GetStatusReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStatusReq>, I>>(
    _: I
  ): GetStatusReq {
    const message = createBaseGetStatusReq();
    return message;
  },
};

function createBaseGetStatusResp(): GetStatusResp {
  return { online: false, good: false };
}

export const GetStatusResp = {
  encode(
    message: GetStatusResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.online === true) {
      writer.uint32(8).bool(message.online);
    }
    if (message.good === true) {
      writer.uint32(16).bool(message.good);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStatusResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStatusResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.online = reader.bool();
          break;
        case 2:
          message.good = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStatusResp {
    return {
      online: isSet(object.online) ? Boolean(object.online) : false,
      good: isSet(object.good) ? Boolean(object.good) : false,
    };
  },

  toJSON(message: GetStatusResp): unknown {
    const obj: any = {};
    message.online !== undefined && (obj.online = message.online);
    message.good !== undefined && (obj.good = message.good);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetStatusResp>, I>>(
    object: I
  ): GetStatusResp {
    const message = createBaseGetStatusResp();
    message.online = object.online ?? false;
    message.good = object.good ?? false;
    return message;
  },
};

function createBaseGetVersionInfoReq(): GetVersionInfoReq {
  return {};
}

export const GetVersionInfoReq = {
  encode(
    _: GetVersionInfoReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetVersionInfoReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVersionInfoReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetVersionInfoReq {
    return {};
  },

  toJSON(_: GetVersionInfoReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetVersionInfoReq>, I>>(
    _: I
  ): GetVersionInfoReq {
    const message = createBaseGetVersionInfoReq();
    return message;
  },
};

function createBaseGetVersionInfoResp(): GetVersionInfoResp {
  return { appName: "", appVersion: "", protocolVersion: "", extra: {} };
}

export const GetVersionInfoResp = {
  encode(
    message: GetVersionInfoResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.appName !== "") {
      writer.uint32(10).string(message.appName);
    }
    if (message.appVersion !== "") {
      writer.uint32(18).string(message.appVersion);
    }
    if (message.protocolVersion !== "") {
      writer.uint32(26).string(message.protocolVersion);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GetVersionInfoResp_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetVersionInfoResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVersionInfoResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appName = reader.string();
          break;
        case 2:
          message.appVersion = reader.string();
          break;
        case 3:
          message.protocolVersion = reader.string();
          break;
        case 4:
          const entry4 = GetVersionInfoResp_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry4.value !== undefined) {
            message.extra[entry4.key] = entry4.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetVersionInfoResp {
    return {
      appName: isSet(object.appName) ? String(object.appName) : "",
      appVersion: isSet(object.appVersion) ? String(object.appVersion) : "",
      protocolVersion: isSet(object.protocolVersion)
        ? String(object.protocolVersion)
        : "",
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: GetVersionInfoResp): unknown {
    const obj: any = {};
    message.appName !== undefined && (obj.appName = message.appName);
    message.appVersion !== undefined && (obj.appVersion = message.appVersion);
    message.protocolVersion !== undefined &&
      (obj.protocolVersion = message.protocolVersion);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetVersionInfoResp>, I>>(
    object: I
  ): GetVersionInfoResp {
    const message = createBaseGetVersionInfoResp();
    message.appName = object.appName ?? "";
    message.appVersion = object.appVersion ?? "";
    message.protocolVersion = object.protocolVersion ?? "";
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseGetVersionInfoResp_ExtraEntry(): GetVersionInfoResp_ExtraEntry {
  return { key: "", value: "" };
}

export const GetVersionInfoResp_ExtraEntry = {
  encode(
    message: GetVersionInfoResp_ExtraEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetVersionInfoResp_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVersionInfoResp_ExtraEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetVersionInfoResp_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GetVersionInfoResp_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetVersionInfoResp_ExtraEntry>, I>>(
    object: I
  ): GetVersionInfoResp_ExtraEntry {
    const message = createBaseGetVersionInfoResp_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSetRestartReq(): SetRestartReq {
  return { delay: 0 };
}

export const SetRestartReq = {
  encode(
    message: SetRestartReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delay !== 0) {
      writer.uint32(8).int32(message.delay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRestartReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRestartReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delay = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetRestartReq {
    return {
      delay: isSet(object.delay) ? Number(object.delay) : 0,
    };
  },

  toJSON(message: SetRestartReq): unknown {
    const obj: any = {};
    message.delay !== undefined && (obj.delay = Math.round(message.delay));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetRestartReq>, I>>(
    object: I
  ): SetRestartReq {
    const message = createBaseSetRestartReq();
    message.delay = object.delay ?? 0;
    return message;
  },
};

function createBaseSetRestartResp(): SetRestartResp {
  return {};
}

export const SetRestartResp = {
  encode(
    _: SetRestartResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRestartResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRestartResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetRestartResp {
    return {};
  },

  toJSON(_: SetRestartResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetRestartResp>, I>>(
    _: I
  ): SetRestartResp {
    const message = createBaseSetRestartResp();
    return message;
  },
};

function createBaseCleanCacheReq(): CleanCacheReq {
  return {};
}

export const CleanCacheReq = {
  encode(
    _: CleanCacheReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CleanCacheReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCleanCacheReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CleanCacheReq {
    return {};
  },

  toJSON(_: CleanCacheReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CleanCacheReq>, I>>(
    _: I
  ): CleanCacheReq {
    const message = createBaseCleanCacheReq();
    return message;
  },
};

function createBaseCleanCacheResp(): CleanCacheResp {
  return {};
}

export const CleanCacheResp = {
  encode(
    _: CleanCacheResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CleanCacheResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCleanCacheResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CleanCacheResp {
    return {};
  },

  toJSON(_: CleanCacheResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CleanCacheResp>, I>>(
    _: I
  ): CleanCacheResp {
    const message = createBaseCleanCacheResp();
    return message;
  },
};

function createBaseSetGroupSignInReq(): SetGroupSignInReq {
  return { groupId: 0 };
}

export const SetGroupSignInReq = {
  encode(
    message: SetGroupSignInReq,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.groupId !== 0) {
      writer.uint32(8).int64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupSignInReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupSignInReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SetGroupSignInReq {
    return {
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },

  toJSON(message: SetGroupSignInReq): unknown {
    const obj: any = {};
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupSignInReq>, I>>(
    object: I
  ): SetGroupSignInReq {
    const message = createBaseSetGroupSignInReq();
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseSetGroupSignInResp(): SetGroupSignInResp {
  return {};
}

export const SetGroupSignInResp = {
  encode(
    _: SetGroupSignInResp,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGroupSignInResp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGroupSignInResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SetGroupSignInResp {
    return {};
  },

  toJSON(_: SetGroupSignInResp): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGroupSignInResp>, I>>(
    _: I
  ): SetGroupSignInResp {
    const message = createBaseSetGroupSignInResp();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
