/* eslint-disable */
import Long from "long";
import { Message } from "./onebot_base";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "onebot";

export interface ForwardMessageNode {
  message: Message[];
}

export interface ForwardContent {
  senderId: number;
  time: number;
  senderName: string;
  messageNode: ForwardMessageNode | undefined;
  forwardNode: number | undefined;
}

export interface ForwardChain {
  content: ForwardContent[];
}

export interface ForwardMessage {
  chain: ForwardChain | undefined;
  data: { [key: number]: ForwardChain };
}

export interface ForwardMessage_DataEntry {
  key: number;
  value: ForwardChain | undefined;
}

function createBaseForwardMessageNode(): ForwardMessageNode {
  return { message: [] };
}

export const ForwardMessageNode = {
  encode(
    message: ForwardMessageNode,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.message) {
      Message.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardMessageNode {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardMessageNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message.push(Message.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForwardMessageNode {
    return {
      message: Array.isArray(object?.message)
        ? object.message.map((e: any) => Message.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ForwardMessageNode): unknown {
    const obj: any = {};
    if (message.message) {
      obj.message = message.message.map((e) =>
        e ? Message.toJSON(e) : undefined
      );
    } else {
      obj.message = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForwardMessageNode>, I>>(
    object: I
  ): ForwardMessageNode {
    const message = createBaseForwardMessageNode();
    message.message = object.message?.map((e) => Message.fromPartial(e)) || [];
    return message;
  },
};

function createBaseForwardContent(): ForwardContent {
  return {
    senderId: 0,
    time: 0,
    senderName: "",
    messageNode: undefined,
    forwardNode: undefined,
  };
}

export const ForwardContent = {
  encode(
    message: ForwardContent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.senderId !== 0) {
      writer.uint32(8).int64(message.senderId);
    }
    if (message.time !== 0) {
      writer.uint32(16).int32(message.time);
    }
    if (message.senderName !== "") {
      writer.uint32(26).string(message.senderName);
    }
    if (message.messageNode !== undefined) {
      ForwardMessageNode.encode(
        message.messageNode,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.forwardNode !== undefined) {
      writer.uint32(816).int32(message.forwardNode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardContent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.time = reader.int32();
          break;
        case 3:
          message.senderName = reader.string();
          break;
        case 101:
          message.messageNode = ForwardMessageNode.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.forwardNode = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForwardContent {
    return {
      senderId: isSet(object.senderId) ? Number(object.senderId) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      senderName: isSet(object.senderName) ? String(object.senderName) : "",
      messageNode: isSet(object.messageNode)
        ? ForwardMessageNode.fromJSON(object.messageNode)
        : undefined,
      forwardNode: isSet(object.forwardNode)
        ? Number(object.forwardNode)
        : undefined,
    };
  },

  toJSON(message: ForwardContent): unknown {
    const obj: any = {};
    message.senderId !== undefined &&
      (obj.senderId = Math.round(message.senderId));
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.senderName !== undefined && (obj.senderName = message.senderName);
    message.messageNode !== undefined &&
      (obj.messageNode = message.messageNode
        ? ForwardMessageNode.toJSON(message.messageNode)
        : undefined);
    message.forwardNode !== undefined &&
      (obj.forwardNode = Math.round(message.forwardNode));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForwardContent>, I>>(
    object: I
  ): ForwardContent {
    const message = createBaseForwardContent();
    message.senderId = object.senderId ?? 0;
    message.time = object.time ?? 0;
    message.senderName = object.senderName ?? "";
    message.messageNode =
      object.messageNode !== undefined && object.messageNode !== null
        ? ForwardMessageNode.fromPartial(object.messageNode)
        : undefined;
    message.forwardNode = object.forwardNode ?? undefined;
    return message;
  },
};

function createBaseForwardChain(): ForwardChain {
  return { content: [] };
}

export const ForwardChain = {
  encode(
    message: ForwardChain,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.content) {
      ForwardContent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content.push(ForwardContent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForwardChain {
    return {
      content: Array.isArray(object?.content)
        ? object.content.map((e: any) => ForwardContent.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ForwardChain): unknown {
    const obj: any = {};
    if (message.content) {
      obj.content = message.content.map((e) =>
        e ? ForwardContent.toJSON(e) : undefined
      );
    } else {
      obj.content = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForwardChain>, I>>(
    object: I
  ): ForwardChain {
    const message = createBaseForwardChain();
    message.content =
      object.content?.map((e) => ForwardContent.fromPartial(e)) || [];
    return message;
  },
};

function createBaseForwardMessage(): ForwardMessage {
  return { chain: undefined, data: {} };
}

export const ForwardMessage = {
  encode(
    message: ForwardMessage,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.chain !== undefined) {
      ForwardChain.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.data).forEach(([key, value]) => {
      ForwardMessage_DataEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForwardMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ForwardChain.decode(reader, reader.uint32());
          break;
        case 2:
          const entry2 = ForwardMessage_DataEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.data[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForwardMessage {
    return {
      chain: isSet(object.chain)
        ? ForwardChain.fromJSON(object.chain)
        : undefined,
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: number]: ForwardChain }>(
            (acc, [key, value]) => {
              acc[Number(key)] = ForwardChain.fromJSON(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: ForwardMessage): unknown {
    const obj: any = {};
    message.chain !== undefined &&
      (obj.chain = message.chain
        ? ForwardChain.toJSON(message.chain)
        : undefined);
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = ForwardChain.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForwardMessage>, I>>(
    object: I
  ): ForwardMessage {
    const message = createBaseForwardMessage();
    message.chain =
      object.chain !== undefined && object.chain !== null
        ? ForwardChain.fromPartial(object.chain)
        : undefined;
    message.data = Object.entries(object.data ?? {}).reduce<{
      [key: number]: ForwardChain;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = ForwardChain.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseForwardMessage_DataEntry(): ForwardMessage_DataEntry {
  return { key: 0, value: undefined };
}

export const ForwardMessage_DataEntry = {
  encode(
    message: ForwardMessage_DataEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      ForwardChain.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ForwardMessage_DataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardMessage_DataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int32();
          break;
        case 2:
          message.value = ForwardChain.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ForwardMessage_DataEntry {
    return {
      key: isSet(object.key) ? Number(object.key) : 0,
      value: isSet(object.value)
        ? ForwardChain.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: ForwardMessage_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = Math.round(message.key));
    message.value !== undefined &&
      (obj.value = message.value
        ? ForwardChain.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ForwardMessage_DataEntry>, I>>(
    object: I
  ): ForwardMessage_DataEntry {
    const message = createBaseForwardMessage_DataEntry();
    message.key = object.key ?? 0;
    message.value =
      object.value !== undefined && object.value !== null
        ? ForwardChain.fromPartial(object.value)
        : undefined;
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
