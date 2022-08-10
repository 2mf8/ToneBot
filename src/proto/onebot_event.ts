/* eslint-disable */
import Long from "long";
import { Message, MessageReceipt } from "./onebot_base";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "onebot";

export interface PrivateMessageEvent {
  time: number;
  selfId: number;
  postType: string;
  messageType: string;
  subType: string;
  /** int32 message_id = 6; // 废弃 */
  userId: number;
  message: Message[];
  rawMessage: string;
  font: number;
  sender: PrivateMessageEvent_Sender | undefined;
  messageId: MessageReceipt | undefined;
  extra: { [key: string]: string };
}

export interface PrivateMessageEvent_Sender {
  userId: number;
  nickname: string;
  sex: string;
  age: number;
}

export interface PrivateMessageEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface GroupMessageEvent {
  time: number;
  selfId: number;
  postType: string;
  messageType: string;
  subType: string;
  /** int32 message_id = 6; // 废弃 */
  groupId: number;
  userId: number;
  anonymous: GroupMessageEvent_Anonymous | undefined;
  message: Message[];
  rawMessage: string;
  font: number;
  sender: GroupMessageEvent_Sender | undefined;
  messageId: MessageReceipt | undefined;
  extra: { [key: string]: string };
}

export interface GroupMessageEvent_Anonymous {
  id: number;
  name: string;
  flag: string;
}

export interface GroupMessageEvent_Sender {
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

export interface GroupMessageEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface ChannelMessageEvent {
  id: number;
  internalId: number;
  guildId: number | string;
  channelId: number;
  time: number;
  selfId: number | string;
  postType: string;
  messageType: string;
  subType: string;
  message: Message[];
  rawMessage: string;
  font: number;
  sender: ChannelMessageEvent_Sender | undefined;
  messageId: number;
  extra: { [key: string]: string };
}

export interface ChannelMessageEvent_Sender {
  tinyId: number | string;
  nickname: string;
  roles: number[];
  roleNames: string[];
}

export interface ChannelMessageEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface GroupUploadNoticeEvent {
  time: number;
  selfId: number;
  postType: string;
  noticeType: string;
  groupId: number;
  userId: number;
  file: GroupUploadNoticeEvent_File | undefined;
  extra: { [key: string]: string };
}

export interface GroupUploadNoticeEvent_File {
  id: string;
  name: string;
  size: number;
  busid: number;
  url: string;
}

export interface GroupUploadNoticeEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface GroupAdminNoticeEvent {
  time: number;
  selfId: number;
  postType: string;
  noticeType: string;
  subType: string;
  groupId: number;
  userId: number;
  extra: { [key: string]: string };
}

export interface GroupAdminNoticeEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface GroupDecreaseNoticeEvent {
  time: number;
  selfId: number;
  postType: string;
  noticeType: string;
  subType: string;
  groupId: number;
  operatorId: number;
  userId: number;
  extra: { [key: string]: string };
}

export interface GroupDecreaseNoticeEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface GroupIncreaseNoticeEvent {
  time: number;
  selfId: number;
  postType: string;
  noticeType: string;
  subType: string;
  groupId: number;
  operatorId: number;
  userId: number;
  extra: { [key: string]: string };
}

export interface GroupIncreaseNoticeEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface GroupBanNoticeEvent {
  time: number;
  selfId: number;
  postType: string;
  noticeType: string;
  subType: string;
  groupId: number;
  operatorId: number;
  userId: number;
  duration: number;
  extra: { [key: string]: string };
}

export interface GroupBanNoticeEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface FriendAddNoticeEvent {
  time: number;
  selfId: number;
  postType: string;
  noticeType: string;
  userId: number;
  extra: { [key: string]: string };
}

export interface FriendAddNoticeEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface GroupRecallNoticeEvent {
  time: number;
  selfId: number;
  postType: string;
  noticeType: string;
  groupId: number;
  userId: number;
  operatorId: number;
  /** int32 message_id = 8; // 废弃 */
  messageId: MessageReceipt | undefined;
  extra: { [key: string]: string };
}

export interface GroupRecallNoticeEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface FriendRecallNoticeEvent {
  time: number;
  selfId: number;
  postType: string;
  noticeType: string;
  userId: number;
  /** int32 message_id = 6; // 废弃 */
  messageId: MessageReceipt | undefined;
  extra: { [key: string]: string };
}

export interface FriendRecallNoticeEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface FriendRequestEvent {
  time: number;
  selfId: number;
  postType: string;
  requestType: string;
  userId: number;
  comment: string;
  flag: string;
  extra: { [key: string]: string };
}

export interface FriendRequestEvent_ExtraEntry {
  key: string;
  value: string;
}

export interface GroupRequestEvent {
  time: number;
  selfId: number;
  postType: string;
  requestType: string;
  subType: string;
  groupId: number;
  userId: number;
  comment: string;
  flag: string;
  extra: { [key: string]: string };
}

export interface GroupRequestEvent_ExtraEntry {
  key: string;
  value: string;
}

function createBasePrivateMessageEvent(): PrivateMessageEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    messageType: "",
    subType: "",
    userId: 0,
    message: [],
    rawMessage: "",
    font: 0,
    sender: undefined,
    messageId: undefined,
    extra: {},
  };
}

export const PrivateMessageEvent = {
  encode(
    message: PrivateMessageEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.messageType !== "") {
      writer.uint32(34).string(message.messageType);
    }
    if (message.subType !== "") {
      writer.uint32(42).string(message.subType);
    }
    if (message.userId !== 0) {
      writer.uint32(56).int64(message.userId);
    }
    for (const v of message.message) {
      Message.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.rawMessage !== "") {
      writer.uint32(74).string(message.rawMessage);
    }
    if (message.font !== 0) {
      writer.uint32(80).int32(message.font);
    }
    if (message.sender !== undefined) {
      PrivateMessageEvent_Sender.encode(
        message.sender,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.messageId !== undefined) {
      MessageReceipt.encode(
        message.messageId,
        writer.uint32(98).fork()
      ).ldelim();
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      PrivateMessageEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivateMessageEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateMessageEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.messageType = reader.string();
          break;
        case 5:
          message.subType = reader.string();
          break;
        case 7:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.message.push(Message.decode(reader, reader.uint32()));
          break;
        case 9:
          message.rawMessage = reader.string();
          break;
        case 10:
          message.font = reader.int32();
          break;
        case 11:
          message.sender = PrivateMessageEvent_Sender.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.messageId = MessageReceipt.decode(reader, reader.uint32());
          break;
        case 255:
          const entry255 = PrivateMessageEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrivateMessageEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => Message.fromJSON(e))
        : [],
      rawMessage: isSet(object.rawMessage) ? String(object.rawMessage) : "",
      font: isSet(object.font) ? Number(object.font) : 0,
      sender: isSet(object.sender)
        ? PrivateMessageEvent_Sender.fromJSON(object.sender)
        : undefined,
      messageId: isSet(object.messageId)
        ? MessageReceipt.fromJSON(object.messageId)
        : undefined,
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

  toJSON(message: PrivateMessageEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.messageType !== undefined &&
      (obj.messageType = message.messageType);
    message.subType !== undefined && (obj.subType = message.subType);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    message.rawMessage !== undefined && (obj.rawMessage = message.rawMessage);
    message.font !== undefined && (obj.font = Math.round(message.font));
    message.sender !== undefined &&
      (obj.sender = message.sender
        ? PrivateMessageEvent_Sender.toJSON(message.sender)
        : undefined);
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageReceipt.toJSON(message.messageId)
        : undefined);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivateMessageEvent>, I>>(
    object: I
  ): PrivateMessageEvent {
    const message = createBasePrivateMessageEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.messageType = object.messageType ?? "";
    message.subType = object.subType ?? "";
    message.userId = object.userId ?? 0;
    message.message = object.message?.map((e) => Message.fromPartial(e)) || [];
    message.rawMessage = object.rawMessage ?? "";
    message.font = object.font ?? 0;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? PrivateMessageEvent_Sender.fromPartial(object.sender)
        : undefined;
    message.messageId =
      object.messageId !== undefined && object.messageId !== null
        ? MessageReceipt.fromPartial(object.messageId)
        : undefined;
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

function createBasePrivateMessageEvent_Sender(): PrivateMessageEvent_Sender {
  return { userId: 0, nickname: "", sex: "", age: 0 };
}

export const PrivateMessageEvent_Sender = {
  encode(
    message: PrivateMessageEvent_Sender,
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
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PrivateMessageEvent_Sender {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateMessageEvent_Sender();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrivateMessageEvent_Sender {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      sex: isSet(object.sex) ? String(object.sex) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
    };
  },

  toJSON(message: PrivateMessageEvent_Sender): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    message.sex !== undefined && (obj.sex = message.sex);
    message.age !== undefined && (obj.age = Math.round(message.age));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivateMessageEvent_Sender>, I>>(
    object: I
  ): PrivateMessageEvent_Sender {
    const message = createBasePrivateMessageEvent_Sender();
    message.userId = object.userId ?? 0;
    message.nickname = object.nickname ?? "";
    message.sex = object.sex ?? "";
    message.age = object.age ?? 0;
    return message;
  },
};

function createBasePrivateMessageEvent_ExtraEntry(): PrivateMessageEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const PrivateMessageEvent_ExtraEntry = {
  encode(
    message: PrivateMessageEvent_ExtraEntry,
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
  ): PrivateMessageEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateMessageEvent_ExtraEntry();
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

  fromJSON(object: any): PrivateMessageEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: PrivateMessageEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PrivateMessageEvent_ExtraEntry>, I>>(
    object: I
  ): PrivateMessageEvent_ExtraEntry {
    const message = createBasePrivateMessageEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupMessageEvent(): GroupMessageEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    messageType: "",
    subType: "",
    groupId: 0,
    userId: 0,
    anonymous: undefined,
    message: [],
    rawMessage: "",
    font: 0,
    sender: undefined,
    messageId: undefined,
    extra: {},
  };
}

export const GroupMessageEvent = {
  encode(
    message: GroupMessageEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.messageType !== "") {
      writer.uint32(34).string(message.messageType);
    }
    if (message.subType !== "") {
      writer.uint32(42).string(message.subType);
    }
    if (message.groupId !== 0) {
      writer.uint32(56).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(64).int64(message.userId);
    }
    if (message.anonymous !== undefined) {
      GroupMessageEvent_Anonymous.encode(
        message.anonymous,
        writer.uint32(74).fork()
      ).ldelim();
    }
    for (const v of message.message) {
      Message.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.rawMessage !== "") {
      writer.uint32(90).string(message.rawMessage);
    }
    if (message.font !== 0) {
      writer.uint32(96).int32(message.font);
    }
    if (message.sender !== undefined) {
      GroupMessageEvent_Sender.encode(
        message.sender,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.messageId !== undefined) {
      MessageReceipt.encode(
        message.messageId,
        writer.uint32(114).fork()
      ).ldelim();
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GroupMessageEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupMessageEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMessageEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.messageType = reader.string();
          break;
        case 5:
          message.subType = reader.string();
          break;
        case 7:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.anonymous = GroupMessageEvent_Anonymous.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.message.push(Message.decode(reader, reader.uint32()));
          break;
        case 11:
          message.rawMessage = reader.string();
          break;
        case 12:
          message.font = reader.int32();
          break;
        case 13:
          message.sender = GroupMessageEvent_Sender.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.messageId = MessageReceipt.decode(reader, reader.uint32());
          break;
        case 255:
          const entry255 = GroupMessageEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupMessageEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      anonymous: isSet(object.anonymous)
        ? GroupMessageEvent_Anonymous.fromJSON(object.anonymous)
        : undefined,
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => Message.fromJSON(e))
        : [],
      rawMessage: isSet(object.rawMessage) ? String(object.rawMessage) : "",
      font: isSet(object.font) ? Number(object.font) : 0,
      sender: isSet(object.sender)
        ? GroupMessageEvent_Sender.fromJSON(object.sender)
        : undefined,
      messageId: isSet(object.messageId)
        ? MessageReceipt.fromJSON(object.messageId)
        : undefined,
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

  toJSON(message: GroupMessageEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.messageType !== undefined &&
      (obj.messageType = message.messageType);
    message.subType !== undefined && (obj.subType = message.subType);
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.anonymous !== undefined &&
      (obj.anonymous = message.anonymous
        ? GroupMessageEvent_Anonymous.toJSON(message.anonymous)
        : undefined);
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    message.rawMessage !== undefined && (obj.rawMessage = message.rawMessage);
    message.font !== undefined && (obj.font = Math.round(message.font));
    message.sender !== undefined &&
      (obj.sender = message.sender
        ? GroupMessageEvent_Sender.toJSON(message.sender)
        : undefined);
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageReceipt.toJSON(message.messageId)
        : undefined);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupMessageEvent>, I>>(
    object: I
  ): GroupMessageEvent {
    const message = createBaseGroupMessageEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.messageType = object.messageType ?? "";
    message.subType = object.subType ?? "";
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.anonymous =
      object.anonymous !== undefined && object.anonymous !== null
        ? GroupMessageEvent_Anonymous.fromPartial(object.anonymous)
        : undefined;
    message.message = object.message?.map((e) => Message.fromPartial(e)) || [];
    message.rawMessage = object.rawMessage ?? "";
    message.font = object.font ?? 0;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? GroupMessageEvent_Sender.fromPartial(object.sender)
        : undefined;
    message.messageId =
      object.messageId !== undefined && object.messageId !== null
        ? MessageReceipt.fromPartial(object.messageId)
        : undefined;
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

function createBaseGroupMessageEvent_Anonymous(): GroupMessageEvent_Anonymous {
  return { id: 0, name: "", flag: "" };
}

export const GroupMessageEvent_Anonymous = {
  encode(
    message: GroupMessageEvent_Anonymous,
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
  ): GroupMessageEvent_Anonymous {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMessageEvent_Anonymous();
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

  fromJSON(object: any): GroupMessageEvent_Anonymous {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      flag: isSet(object.flag) ? String(object.flag) : "",
    };
  },

  toJSON(message: GroupMessageEvent_Anonymous): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.flag !== undefined && (obj.flag = message.flag);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupMessageEvent_Anonymous>, I>>(
    object: I
  ): GroupMessageEvent_Anonymous {
    const message = createBaseGroupMessageEvent_Anonymous();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.flag = object.flag ?? "";
    return message;
  },
};

function createBaseGroupMessageEvent_Sender(): GroupMessageEvent_Sender {
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

export const GroupMessageEvent_Sender = {
  encode(
    message: GroupMessageEvent_Sender,
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GroupMessageEvent_Sender {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMessageEvent_Sender();
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

  fromJSON(object: any): GroupMessageEvent_Sender {
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

  toJSON(message: GroupMessageEvent_Sender): unknown {
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

  fromPartial<I extends Exact<DeepPartial<GroupMessageEvent_Sender>, I>>(
    object: I
  ): GroupMessageEvent_Sender {
    const message = createBaseGroupMessageEvent_Sender();
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

function createBaseGroupMessageEvent_ExtraEntry(): GroupMessageEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const GroupMessageEvent_ExtraEntry = {
  encode(
    message: GroupMessageEvent_ExtraEntry,
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
  ): GroupMessageEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMessageEvent_ExtraEntry();
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

  fromJSON(object: any): GroupMessageEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GroupMessageEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupMessageEvent_ExtraEntry>, I>>(
    object: I
  ): GroupMessageEvent_ExtraEntry {
    const message = createBaseGroupMessageEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseChannelMessageEvent(): ChannelMessageEvent {
  return {
    id: 0,
    internalId: 0,
    guildId: 0,
    channelId: 0,
    time: 0,
    selfId: 0,
    postType: "",
    messageType: "",
    subType: "",
    message: [],
    rawMessage: "",
    font: 0,
    sender: undefined,
    messageId: 0,
    extra: {},
  };
}

export const ChannelMessageEvent = {
  encode(
    message: ChannelMessageEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.internalId !== 0) {
      writer.uint32(16).uint64(message.internalId);
    }
    if (message.guildId !== 0) {
      writer.uint32(24).uint64(message.guildId);
    }
    if (message.channelId !== 0) {
      writer.uint32(32).uint64(message.channelId);
    }
    if (message.time !== 0) {
      writer.uint32(40).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(48).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(58).string(message.postType);
    }
    if (message.messageType !== "") {
      writer.uint32(66).string(message.messageType);
    }
    if (message.subType !== "") {
      writer.uint32(74).string(message.subType);
    }
    for (const v of message.message) {
      Message.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.rawMessage !== "") {
      writer.uint32(90).string(message.rawMessage);
    }
    if (message.font !== 0) {
      writer.uint32(96).int32(message.font);
    }
    if (message.sender !== undefined) {
      ChannelMessageEvent_Sender.encode(
        message.sender,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.messageId !== 0) {
      writer.uint32(112).uint64(message.messageId);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      ChannelMessageEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelMessageEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelMessageEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.internalId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.guildId = reader.uint64().toString();
          break;
        case 4:
          message.channelId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.selfId = reader.uint64().toString();
          break;
        case 7:
          message.postType = reader.string();
          break;
        case 8:
          message.messageType = reader.string();
          break;
        case 9:
          message.subType = reader.string();
          break;
        case 10:
          message.message.push(Message.decode(reader, reader.uint32()));
          break;
        case 11:
          message.rawMessage = reader.string();
          break;
        case 12:
          message.font = reader.int32();
          break;
        case 13:
          message.sender = ChannelMessageEvent_Sender.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.messageId = longToNumber(reader.uint64() as Long);
          break;
        case 255:
          const entry255 = ChannelMessageEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChannelMessageEvent {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      internalId: isSet(object.internalId) ? Number(object.internalId) : 0,
      guildId: isSet(object.guildId) ? Number(object.guildId) : 0,
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      messageType: isSet(object.messageType) ? String(object.messageType) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => Message.fromJSON(e))
        : [],
      rawMessage: isSet(object.rawMessage) ? String(object.rawMessage) : "",
      font: isSet(object.font) ? Number(object.font) : 0,
      sender: isSet(object.sender)
        ? ChannelMessageEvent_Sender.fromJSON(object.sender)
        : undefined,
      messageId: isSet(object.messageId) ? Number(object.messageId) : 0,
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

  toJSON(message: ChannelMessageEvent): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.internalId !== undefined &&
      (obj.internalId = Math.round(message.internalId));
    message.guildId !== undefined &&
      (obj.guildId = Math.round(Number(message.guildId)));
    message.channelId !== undefined &&
      (obj.channelId = Math.round(message.channelId));
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(Number(message.selfId)));
    message.postType !== undefined && (obj.postType = message.postType);
    message.messageType !== undefined &&
      (obj.messageType = message.messageType);
    message.subType !== undefined && (obj.subType = message.subType);
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    message.rawMessage !== undefined && (obj.rawMessage = message.rawMessage);
    message.font !== undefined && (obj.font = Math.round(message.font));
    message.sender !== undefined &&
      (obj.sender = message.sender
        ? ChannelMessageEvent_Sender.toJSON(message.sender)
        : undefined);
    message.messageId !== undefined &&
      (obj.messageId = Math.round(message.messageId));
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChannelMessageEvent>, I>>(
    object: I
  ): ChannelMessageEvent {
    const message = createBaseChannelMessageEvent();
    message.id = object.id ?? 0;
    message.internalId = object.internalId ?? 0;
    message.guildId = object.guildId ?? 0;
    message.channelId = object.channelId ?? 0;
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.messageType = object.messageType ?? "";
    message.subType = object.subType ?? "";
    message.message = object.message?.map((e) => Message.fromPartial(e)) || [];
    message.rawMessage = object.rawMessage ?? "";
    message.font = object.font ?? 0;
    message.sender =
      object.sender !== undefined && object.sender !== null
        ? ChannelMessageEvent_Sender.fromPartial(object.sender)
        : undefined;
    message.messageId = object.messageId ?? 0;
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

function createBaseChannelMessageEvent_Sender(): ChannelMessageEvent_Sender {
  return { tinyId: 0, nickname: "", roles: [], roleNames: [] };
}

export const ChannelMessageEvent_Sender = {
  encode(
    message: ChannelMessageEvent_Sender,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tinyId !== 0) {
      writer.uint32(8).uint64(message.tinyId);
    }
    if (message.nickname !== "") {
      writer.uint32(18).string(message.nickname);
    }
    writer.uint32(26).fork();
    for (const v of message.roles) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.roleNames) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChannelMessageEvent_Sender {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelMessageEvent_Sender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tinyId = reader.uint64().toString();
          break;
        case 2:
          message.nickname = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.roles.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.roles.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          message.roleNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChannelMessageEvent_Sender {
    return {
      tinyId: isSet(object.tinyId) ? Number(object.tinyId) : 0,
      nickname: isSet(object.nickname) ? String(object.nickname) : "",
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => Number(e))
        : [],
      roleNames: Array.isArray(object?.roleNames)
        ? object.roleNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ChannelMessageEvent_Sender): unknown {
    const obj: any = {};
    message.tinyId !== undefined && (obj.tinyId = Math.round(Number(message.tinyId)));
    message.nickname !== undefined && (obj.nickname = message.nickname);
    if (message.roles) {
      obj.roles = message.roles.map((e) => Math.round(e));
    } else {
      obj.roles = [];
    }
    if (message.roleNames) {
      obj.roleNames = message.roleNames.map((e) => e);
    } else {
      obj.roleNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChannelMessageEvent_Sender>, I>>(
    object: I
  ): ChannelMessageEvent_Sender {
    const message = createBaseChannelMessageEvent_Sender();
    message.tinyId = object.tinyId ?? 0;
    message.nickname = object.nickname ?? "";
    message.roles = object.roles?.map((e) => e) || [];
    message.roleNames = object.roleNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseChannelMessageEvent_ExtraEntry(): ChannelMessageEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const ChannelMessageEvent_ExtraEntry = {
  encode(
    message: ChannelMessageEvent_ExtraEntry,
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
  ): ChannelMessageEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelMessageEvent_ExtraEntry();
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

  fromJSON(object: any): ChannelMessageEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: ChannelMessageEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChannelMessageEvent_ExtraEntry>, I>>(
    object: I
  ): ChannelMessageEvent_ExtraEntry {
    const message = createBaseChannelMessageEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupUploadNoticeEvent(): GroupUploadNoticeEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    noticeType: "",
    groupId: 0,
    userId: 0,
    file: undefined,
    extra: {},
  };
}

export const GroupUploadNoticeEvent = {
  encode(
    message: GroupUploadNoticeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.noticeType !== "") {
      writer.uint32(34).string(message.noticeType);
    }
    if (message.groupId !== 0) {
      writer.uint32(40).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(48).int64(message.userId);
    }
    if (message.file !== undefined) {
      GroupUploadNoticeEvent_File.encode(
        message.file,
        writer.uint32(58).fork()
      ).ldelim();
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GroupUploadNoticeEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GroupUploadNoticeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupUploadNoticeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.noticeType = reader.string();
          break;
        case 5:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.file = GroupUploadNoticeEvent_File.decode(
            reader,
            reader.uint32()
          );
          break;
        case 255:
          const entry255 = GroupUploadNoticeEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupUploadNoticeEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      noticeType: isSet(object.noticeType) ? String(object.noticeType) : "",
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      file: isSet(object.file)
        ? GroupUploadNoticeEvent_File.fromJSON(object.file)
        : undefined,
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

  toJSON(message: GroupUploadNoticeEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.noticeType !== undefined && (obj.noticeType = message.noticeType);
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.file !== undefined &&
      (obj.file = message.file
        ? GroupUploadNoticeEvent_File.toJSON(message.file)
        : undefined);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupUploadNoticeEvent>, I>>(
    object: I
  ): GroupUploadNoticeEvent {
    const message = createBaseGroupUploadNoticeEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.noticeType = object.noticeType ?? "";
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.file =
      object.file !== undefined && object.file !== null
        ? GroupUploadNoticeEvent_File.fromPartial(object.file)
        : undefined;
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

function createBaseGroupUploadNoticeEvent_File(): GroupUploadNoticeEvent_File {
  return { id: "", name: "", size: 0, busid: 0, url: "" };
}

export const GroupUploadNoticeEvent_File = {
  encode(
    message: GroupUploadNoticeEvent_File,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.size !== 0) {
      writer.uint32(24).int64(message.size);
    }
    if (message.busid !== 0) {
      writer.uint32(32).int64(message.busid);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GroupUploadNoticeEvent_File {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupUploadNoticeEvent_File();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.size = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.busid = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupUploadNoticeEvent_File {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      size: isSet(object.size) ? Number(object.size) : 0,
      busid: isSet(object.busid) ? Number(object.busid) : 0,
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: GroupUploadNoticeEvent_File): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.size !== undefined && (obj.size = Math.round(message.size));
    message.busid !== undefined && (obj.busid = Math.round(message.busid));
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupUploadNoticeEvent_File>, I>>(
    object: I
  ): GroupUploadNoticeEvent_File {
    const message = createBaseGroupUploadNoticeEvent_File();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    message.busid = object.busid ?? 0;
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseGroupUploadNoticeEvent_ExtraEntry(): GroupUploadNoticeEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const GroupUploadNoticeEvent_ExtraEntry = {
  encode(
    message: GroupUploadNoticeEvent_ExtraEntry,
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
  ): GroupUploadNoticeEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupUploadNoticeEvent_ExtraEntry();
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

  fromJSON(object: any): GroupUploadNoticeEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GroupUploadNoticeEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GroupUploadNoticeEvent_ExtraEntry>, I>
  >(object: I): GroupUploadNoticeEvent_ExtraEntry {
    const message = createBaseGroupUploadNoticeEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupAdminNoticeEvent(): GroupAdminNoticeEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    noticeType: "",
    subType: "",
    groupId: 0,
    userId: 0,
    extra: {},
  };
}

export const GroupAdminNoticeEvent = {
  encode(
    message: GroupAdminNoticeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.noticeType !== "") {
      writer.uint32(34).string(message.noticeType);
    }
    if (message.subType !== "") {
      writer.uint32(42).string(message.subType);
    }
    if (message.groupId !== 0) {
      writer.uint32(48).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(56).int64(message.userId);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GroupAdminNoticeEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GroupAdminNoticeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupAdminNoticeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.noticeType = reader.string();
          break;
        case 5:
          message.subType = reader.string();
          break;
        case 6:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 255:
          const entry255 = GroupAdminNoticeEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupAdminNoticeEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      noticeType: isSet(object.noticeType) ? String(object.noticeType) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
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

  toJSON(message: GroupAdminNoticeEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.noticeType !== undefined && (obj.noticeType = message.noticeType);
    message.subType !== undefined && (obj.subType = message.subType);
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupAdminNoticeEvent>, I>>(
    object: I
  ): GroupAdminNoticeEvent {
    const message = createBaseGroupAdminNoticeEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.noticeType = object.noticeType ?? "";
    message.subType = object.subType ?? "";
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
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

function createBaseGroupAdminNoticeEvent_ExtraEntry(): GroupAdminNoticeEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const GroupAdminNoticeEvent_ExtraEntry = {
  encode(
    message: GroupAdminNoticeEvent_ExtraEntry,
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
  ): GroupAdminNoticeEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupAdminNoticeEvent_ExtraEntry();
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

  fromJSON(object: any): GroupAdminNoticeEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GroupAdminNoticeEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GroupAdminNoticeEvent_ExtraEntry>, I>
  >(object: I): GroupAdminNoticeEvent_ExtraEntry {
    const message = createBaseGroupAdminNoticeEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupDecreaseNoticeEvent(): GroupDecreaseNoticeEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    noticeType: "",
    subType: "",
    groupId: 0,
    operatorId: 0,
    userId: 0,
    extra: {},
  };
}

export const GroupDecreaseNoticeEvent = {
  encode(
    message: GroupDecreaseNoticeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.noticeType !== "") {
      writer.uint32(34).string(message.noticeType);
    }
    if (message.subType !== "") {
      writer.uint32(42).string(message.subType);
    }
    if (message.groupId !== 0) {
      writer.uint32(48).int64(message.groupId);
    }
    if (message.operatorId !== 0) {
      writer.uint32(56).int64(message.operatorId);
    }
    if (message.userId !== 0) {
      writer.uint32(64).int64(message.userId);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GroupDecreaseNoticeEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GroupDecreaseNoticeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupDecreaseNoticeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.noticeType = reader.string();
          break;
        case 5:
          message.subType = reader.string();
          break;
        case 6:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.operatorId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 255:
          const entry255 = GroupDecreaseNoticeEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupDecreaseNoticeEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      noticeType: isSet(object.noticeType) ? String(object.noticeType) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      operatorId: isSet(object.operatorId) ? Number(object.operatorId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
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

  toJSON(message: GroupDecreaseNoticeEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.noticeType !== undefined && (obj.noticeType = message.noticeType);
    message.subType !== undefined && (obj.subType = message.subType);
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.operatorId !== undefined &&
      (obj.operatorId = Math.round(message.operatorId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupDecreaseNoticeEvent>, I>>(
    object: I
  ): GroupDecreaseNoticeEvent {
    const message = createBaseGroupDecreaseNoticeEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.noticeType = object.noticeType ?? "";
    message.subType = object.subType ?? "";
    message.groupId = object.groupId ?? 0;
    message.operatorId = object.operatorId ?? 0;
    message.userId = object.userId ?? 0;
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

function createBaseGroupDecreaseNoticeEvent_ExtraEntry(): GroupDecreaseNoticeEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const GroupDecreaseNoticeEvent_ExtraEntry = {
  encode(
    message: GroupDecreaseNoticeEvent_ExtraEntry,
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
  ): GroupDecreaseNoticeEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupDecreaseNoticeEvent_ExtraEntry();
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

  fromJSON(object: any): GroupDecreaseNoticeEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GroupDecreaseNoticeEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GroupDecreaseNoticeEvent_ExtraEntry>, I>
  >(object: I): GroupDecreaseNoticeEvent_ExtraEntry {
    const message = createBaseGroupDecreaseNoticeEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupIncreaseNoticeEvent(): GroupIncreaseNoticeEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    noticeType: "",
    subType: "",
    groupId: 0,
    operatorId: 0,
    userId: 0,
    extra: {},
  };
}

export const GroupIncreaseNoticeEvent = {
  encode(
    message: GroupIncreaseNoticeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.noticeType !== "") {
      writer.uint32(34).string(message.noticeType);
    }
    if (message.subType !== "") {
      writer.uint32(42).string(message.subType);
    }
    if (message.groupId !== 0) {
      writer.uint32(48).int64(message.groupId);
    }
    if (message.operatorId !== 0) {
      writer.uint32(56).int64(message.operatorId);
    }
    if (message.userId !== 0) {
      writer.uint32(64).int64(message.userId);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GroupIncreaseNoticeEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GroupIncreaseNoticeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupIncreaseNoticeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.noticeType = reader.string();
          break;
        case 5:
          message.subType = reader.string();
          break;
        case 6:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.operatorId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 255:
          const entry255 = GroupIncreaseNoticeEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupIncreaseNoticeEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      noticeType: isSet(object.noticeType) ? String(object.noticeType) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      operatorId: isSet(object.operatorId) ? Number(object.operatorId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
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

  toJSON(message: GroupIncreaseNoticeEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.noticeType !== undefined && (obj.noticeType = message.noticeType);
    message.subType !== undefined && (obj.subType = message.subType);
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.operatorId !== undefined &&
      (obj.operatorId = Math.round(message.operatorId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupIncreaseNoticeEvent>, I>>(
    object: I
  ): GroupIncreaseNoticeEvent {
    const message = createBaseGroupIncreaseNoticeEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.noticeType = object.noticeType ?? "";
    message.subType = object.subType ?? "";
    message.groupId = object.groupId ?? 0;
    message.operatorId = object.operatorId ?? 0;
    message.userId = object.userId ?? 0;
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

function createBaseGroupIncreaseNoticeEvent_ExtraEntry(): GroupIncreaseNoticeEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const GroupIncreaseNoticeEvent_ExtraEntry = {
  encode(
    message: GroupIncreaseNoticeEvent_ExtraEntry,
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
  ): GroupIncreaseNoticeEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupIncreaseNoticeEvent_ExtraEntry();
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

  fromJSON(object: any): GroupIncreaseNoticeEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GroupIncreaseNoticeEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GroupIncreaseNoticeEvent_ExtraEntry>, I>
  >(object: I): GroupIncreaseNoticeEvent_ExtraEntry {
    const message = createBaseGroupIncreaseNoticeEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupBanNoticeEvent(): GroupBanNoticeEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    noticeType: "",
    subType: "",
    groupId: 0,
    operatorId: 0,
    userId: 0,
    duration: 0,
    extra: {},
  };
}

export const GroupBanNoticeEvent = {
  encode(
    message: GroupBanNoticeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.noticeType !== "") {
      writer.uint32(34).string(message.noticeType);
    }
    if (message.subType !== "") {
      writer.uint32(42).string(message.subType);
    }
    if (message.groupId !== 0) {
      writer.uint32(48).int64(message.groupId);
    }
    if (message.operatorId !== 0) {
      writer.uint32(56).int64(message.operatorId);
    }
    if (message.userId !== 0) {
      writer.uint32(64).int64(message.userId);
    }
    if (message.duration !== 0) {
      writer.uint32(72).int64(message.duration);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GroupBanNoticeEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupBanNoticeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupBanNoticeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.noticeType = reader.string();
          break;
        case 5:
          message.subType = reader.string();
          break;
        case 6:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.operatorId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.duration = longToNumber(reader.int64() as Long);
          break;
        case 255:
          const entry255 = GroupBanNoticeEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupBanNoticeEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      noticeType: isSet(object.noticeType) ? String(object.noticeType) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      operatorId: isSet(object.operatorId) ? Number(object.operatorId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
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

  toJSON(message: GroupBanNoticeEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.noticeType !== undefined && (obj.noticeType = message.noticeType);
    message.subType !== undefined && (obj.subType = message.subType);
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.operatorId !== undefined &&
      (obj.operatorId = Math.round(message.operatorId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupBanNoticeEvent>, I>>(
    object: I
  ): GroupBanNoticeEvent {
    const message = createBaseGroupBanNoticeEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.noticeType = object.noticeType ?? "";
    message.subType = object.subType ?? "";
    message.groupId = object.groupId ?? 0;
    message.operatorId = object.operatorId ?? 0;
    message.userId = object.userId ?? 0;
    message.duration = object.duration ?? 0;
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

function createBaseGroupBanNoticeEvent_ExtraEntry(): GroupBanNoticeEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const GroupBanNoticeEvent_ExtraEntry = {
  encode(
    message: GroupBanNoticeEvent_ExtraEntry,
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
  ): GroupBanNoticeEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupBanNoticeEvent_ExtraEntry();
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

  fromJSON(object: any): GroupBanNoticeEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GroupBanNoticeEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupBanNoticeEvent_ExtraEntry>, I>>(
    object: I
  ): GroupBanNoticeEvent_ExtraEntry {
    const message = createBaseGroupBanNoticeEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseFriendAddNoticeEvent(): FriendAddNoticeEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    noticeType: "",
    userId: 0,
    extra: {},
  };
}

export const FriendAddNoticeEvent = {
  encode(
    message: FriendAddNoticeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.noticeType !== "") {
      writer.uint32(34).string(message.noticeType);
    }
    if (message.userId !== 0) {
      writer.uint32(40).int64(message.userId);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      FriendAddNoticeEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FriendAddNoticeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendAddNoticeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.noticeType = reader.string();
          break;
        case 5:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 255:
          const entry255 = FriendAddNoticeEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FriendAddNoticeEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      noticeType: isSet(object.noticeType) ? String(object.noticeType) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
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

  toJSON(message: FriendAddNoticeEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.noticeType !== undefined && (obj.noticeType = message.noticeType);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FriendAddNoticeEvent>, I>>(
    object: I
  ): FriendAddNoticeEvent {
    const message = createBaseFriendAddNoticeEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.noticeType = object.noticeType ?? "";
    message.userId = object.userId ?? 0;
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

function createBaseFriendAddNoticeEvent_ExtraEntry(): FriendAddNoticeEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const FriendAddNoticeEvent_ExtraEntry = {
  encode(
    message: FriendAddNoticeEvent_ExtraEntry,
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
  ): FriendAddNoticeEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendAddNoticeEvent_ExtraEntry();
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

  fromJSON(object: any): FriendAddNoticeEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: FriendAddNoticeEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FriendAddNoticeEvent_ExtraEntry>, I>>(
    object: I
  ): FriendAddNoticeEvent_ExtraEntry {
    const message = createBaseFriendAddNoticeEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupRecallNoticeEvent(): GroupRecallNoticeEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    noticeType: "",
    groupId: 0,
    userId: 0,
    operatorId: 0,
    messageId: undefined,
    extra: {},
  };
}

export const GroupRecallNoticeEvent = {
  encode(
    message: GroupRecallNoticeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.noticeType !== "") {
      writer.uint32(34).string(message.noticeType);
    }
    if (message.groupId !== 0) {
      writer.uint32(40).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(48).int64(message.userId);
    }
    if (message.operatorId !== 0) {
      writer.uint32(56).int64(message.operatorId);
    }
    if (message.messageId !== undefined) {
      MessageReceipt.encode(
        message.messageId,
        writer.uint32(74).fork()
      ).ldelim();
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GroupRecallNoticeEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GroupRecallNoticeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupRecallNoticeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.noticeType = reader.string();
          break;
        case 5:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.operatorId = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.messageId = MessageReceipt.decode(reader, reader.uint32());
          break;
        case 255:
          const entry255 = GroupRecallNoticeEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupRecallNoticeEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      noticeType: isSet(object.noticeType) ? String(object.noticeType) : "",
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      operatorId: isSet(object.operatorId) ? Number(object.operatorId) : 0,
      messageId: isSet(object.messageId)
        ? MessageReceipt.fromJSON(object.messageId)
        : undefined,
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

  toJSON(message: GroupRecallNoticeEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.noticeType !== undefined && (obj.noticeType = message.noticeType);
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.operatorId !== undefined &&
      (obj.operatorId = Math.round(message.operatorId));
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageReceipt.toJSON(message.messageId)
        : undefined);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupRecallNoticeEvent>, I>>(
    object: I
  ): GroupRecallNoticeEvent {
    const message = createBaseGroupRecallNoticeEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.noticeType = object.noticeType ?? "";
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.operatorId = object.operatorId ?? 0;
    message.messageId =
      object.messageId !== undefined && object.messageId !== null
        ? MessageReceipt.fromPartial(object.messageId)
        : undefined;
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

function createBaseGroupRecallNoticeEvent_ExtraEntry(): GroupRecallNoticeEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const GroupRecallNoticeEvent_ExtraEntry = {
  encode(
    message: GroupRecallNoticeEvent_ExtraEntry,
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
  ): GroupRecallNoticeEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupRecallNoticeEvent_ExtraEntry();
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

  fromJSON(object: any): GroupRecallNoticeEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GroupRecallNoticeEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<GroupRecallNoticeEvent_ExtraEntry>, I>
  >(object: I): GroupRecallNoticeEvent_ExtraEntry {
    const message = createBaseGroupRecallNoticeEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseFriendRecallNoticeEvent(): FriendRecallNoticeEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    noticeType: "",
    userId: 0,
    messageId: undefined,
    extra: {},
  };
}

export const FriendRecallNoticeEvent = {
  encode(
    message: FriendRecallNoticeEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.noticeType !== "") {
      writer.uint32(34).string(message.noticeType);
    }
    if (message.userId !== 0) {
      writer.uint32(40).int64(message.userId);
    }
    if (message.messageId !== undefined) {
      MessageReceipt.encode(
        message.messageId,
        writer.uint32(58).fork()
      ).ldelim();
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      FriendRecallNoticeEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): FriendRecallNoticeEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendRecallNoticeEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.noticeType = reader.string();
          break;
        case 5:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.messageId = MessageReceipt.decode(reader, reader.uint32());
          break;
        case 255:
          const entry255 = FriendRecallNoticeEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FriendRecallNoticeEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      noticeType: isSet(object.noticeType) ? String(object.noticeType) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      messageId: isSet(object.messageId)
        ? MessageReceipt.fromJSON(object.messageId)
        : undefined,
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

  toJSON(message: FriendRecallNoticeEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.noticeType !== undefined && (obj.noticeType = message.noticeType);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.messageId !== undefined &&
      (obj.messageId = message.messageId
        ? MessageReceipt.toJSON(message.messageId)
        : undefined);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FriendRecallNoticeEvent>, I>>(
    object: I
  ): FriendRecallNoticeEvent {
    const message = createBaseFriendRecallNoticeEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.noticeType = object.noticeType ?? "";
    message.userId = object.userId ?? 0;
    message.messageId =
      object.messageId !== undefined && object.messageId !== null
        ? MessageReceipt.fromPartial(object.messageId)
        : undefined;
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

function createBaseFriendRecallNoticeEvent_ExtraEntry(): FriendRecallNoticeEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const FriendRecallNoticeEvent_ExtraEntry = {
  encode(
    message: FriendRecallNoticeEvent_ExtraEntry,
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
  ): FriendRecallNoticeEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendRecallNoticeEvent_ExtraEntry();
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

  fromJSON(object: any): FriendRecallNoticeEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: FriendRecallNoticeEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<FriendRecallNoticeEvent_ExtraEntry>, I>
  >(object: I): FriendRecallNoticeEvent_ExtraEntry {
    const message = createBaseFriendRecallNoticeEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseFriendRequestEvent(): FriendRequestEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    requestType: "",
    userId: 0,
    comment: "",
    flag: "",
    extra: {},
  };
}

export const FriendRequestEvent = {
  encode(
    message: FriendRequestEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.requestType !== "") {
      writer.uint32(34).string(message.requestType);
    }
    if (message.userId !== 0) {
      writer.uint32(40).int64(message.userId);
    }
    if (message.comment !== "") {
      writer.uint32(50).string(message.comment);
    }
    if (message.flag !== "") {
      writer.uint32(58).string(message.flag);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      FriendRequestEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FriendRequestEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendRequestEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.requestType = reader.string();
          break;
        case 5:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.comment = reader.string();
          break;
        case 7:
          message.flag = reader.string();
          break;
        case 255:
          const entry255 = FriendRequestEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FriendRequestEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      requestType: isSet(object.requestType) ? String(object.requestType) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      comment: isSet(object.comment) ? String(object.comment) : "",
      flag: isSet(object.flag) ? String(object.flag) : "",
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

  toJSON(message: FriendRequestEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.requestType !== undefined &&
      (obj.requestType = message.requestType);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.comment !== undefined && (obj.comment = message.comment);
    message.flag !== undefined && (obj.flag = message.flag);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FriendRequestEvent>, I>>(
    object: I
  ): FriendRequestEvent {
    const message = createBaseFriendRequestEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.requestType = object.requestType ?? "";
    message.userId = object.userId ?? 0;
    message.comment = object.comment ?? "";
    message.flag = object.flag ?? "";
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

function createBaseFriendRequestEvent_ExtraEntry(): FriendRequestEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const FriendRequestEvent_ExtraEntry = {
  encode(
    message: FriendRequestEvent_ExtraEntry,
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
  ): FriendRequestEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendRequestEvent_ExtraEntry();
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

  fromJSON(object: any): FriendRequestEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: FriendRequestEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FriendRequestEvent_ExtraEntry>, I>>(
    object: I
  ): FriendRequestEvent_ExtraEntry {
    const message = createBaseFriendRequestEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGroupRequestEvent(): GroupRequestEvent {
  return {
    time: 0,
    selfId: 0,
    postType: "",
    requestType: "",
    subType: "",
    groupId: 0,
    userId: 0,
    comment: "",
    flag: "",
    extra: {},
  };
}

export const GroupRequestEvent = {
  encode(
    message: GroupRequestEvent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).int64(message.time);
    }
    if (message.selfId !== 0) {
      writer.uint32(16).int64(message.selfId);
    }
    if (message.postType !== "") {
      writer.uint32(26).string(message.postType);
    }
    if (message.requestType !== "") {
      writer.uint32(34).string(message.requestType);
    }
    if (message.subType !== "") {
      writer.uint32(42).string(message.subType);
    }
    if (message.groupId !== 0) {
      writer.uint32(48).int64(message.groupId);
    }
    if (message.userId !== 0) {
      writer.uint32(56).int64(message.userId);
    }
    if (message.comment !== "") {
      writer.uint32(66).string(message.comment);
    }
    if (message.flag !== "") {
      writer.uint32(74).string(message.flag);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      GroupRequestEvent_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(2042).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupRequestEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupRequestEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.selfId = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.postType = reader.string();
          break;
        case 4:
          message.requestType = reader.string();
          break;
        case 5:
          message.subType = reader.string();
          break;
        case 6:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.userId = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.comment = reader.string();
          break;
        case 9:
          message.flag = reader.string();
          break;
        case 255:
          const entry255 = GroupRequestEvent_ExtraEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry255.value !== undefined) {
            message.extra[entry255.key] = entry255.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GroupRequestEvent {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      selfId: isSet(object.selfId) ? Number(object.selfId) : 0,
      postType: isSet(object.postType) ? String(object.postType) : "",
      requestType: isSet(object.requestType) ? String(object.requestType) : "",
      subType: isSet(object.subType) ? String(object.subType) : "",
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      comment: isSet(object.comment) ? String(object.comment) : "",
      flag: isSet(object.flag) ? String(object.flag) : "",
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

  toJSON(message: GroupRequestEvent): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.selfId !== undefined && (obj.selfId = Math.round(message.selfId));
    message.postType !== undefined && (obj.postType = message.postType);
    message.requestType !== undefined &&
      (obj.requestType = message.requestType);
    message.subType !== undefined && (obj.subType = message.subType);
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.comment !== undefined && (obj.comment = message.comment);
    message.flag !== undefined && (obj.flag = message.flag);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupRequestEvent>, I>>(
    object: I
  ): GroupRequestEvent {
    const message = createBaseGroupRequestEvent();
    message.time = object.time ?? 0;
    message.selfId = object.selfId ?? 0;
    message.postType = object.postType ?? "";
    message.requestType = object.requestType ?? "";
    message.subType = object.subType ?? "";
    message.groupId = object.groupId ?? 0;
    message.userId = object.userId ?? 0;
    message.comment = object.comment ?? "";
    message.flag = object.flag ?? "";
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

function createBaseGroupRequestEvent_ExtraEntry(): GroupRequestEvent_ExtraEntry {
  return { key: "", value: "" };
}

export const GroupRequestEvent_ExtraEntry = {
  encode(
    message: GroupRequestEvent_ExtraEntry,
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
  ): GroupRequestEvent_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupRequestEvent_ExtraEntry();
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

  fromJSON(object: any): GroupRequestEvent_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: GroupRequestEvent_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GroupRequestEvent_ExtraEntry>, I>>(
    object: I
  ): GroupRequestEvent_ExtraEntry {
    const message = createBaseGroupRequestEvent_ExtraEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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
