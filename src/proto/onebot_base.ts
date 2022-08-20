/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "onebot";

export interface Message {
  type: string;
  data: { [key: string]: string };
}

export interface Message_DataEntry {
  key: string;
  value: string;
}

export interface MessageReceipt {
  senderId: number;
  time: number;
  seqs: number[];
  rands: number[];
  groupId: number;
}

function createBaseMessage(): Message {
  return { type: "", data: {} };
}

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      Message_DataEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          const entry2 = Message_DataEntry.decode(reader, reader.uint32());
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

  fromJSON(object: any): Message {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.type = object.type ?? "";
    message.data = Object.entries(object.data ?? {}).reduce<{
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

function createBaseMessage_DataEntry(): Message_DataEntry {
  return { key: "", value: "" };
}

export const Message_DataEntry = {
  encode(
    message: Message_DataEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Message_DataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage_DataEntry();
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

  fromJSON(object: any): Message_DataEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Message_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Message_DataEntry>, I>>(
    object: I
  ): Message_DataEntry {
    const message = createBaseMessage_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMessageReceipt(): MessageReceipt {
  return { senderId: 0, time: 0, seqs: [], rands: [], groupId: 0 };
}

export const MessageReceipt = {
  encode(
    message: MessageReceipt,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.senderId !== 0) {
      writer.uint32(8).int64(message.senderId);
    }
    if (message.time !== 0) {
      writer.uint32(16).int64(message.time);
    }
    writer.uint32(26).fork();
    for (const v of message.seqs) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.rands) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.groupId !== 0) {
      writer.uint32(40).int64(message.groupId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageReceipt {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.time = longToNumber(reader.int64() as Long);
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.seqs.push(reader.int32());
            }
          } else {
            message.seqs.push(reader.int32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rands.push(reader.int32());
            }
          } else {
            message.rands.push(reader.int32());
          }
          break;
        case 5:
          message.groupId = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessageReceipt {
    return {
      senderId: isSet(object.senderId) ? Number(object.senderId) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      seqs: Array.isArray(object?.seqs)
        ? object.seqs.map((e: any) => Number(e))
        : [],
      rands: Array.isArray(object?.rands)
        ? object.rands.map((e: any) => Number(e))
        : [],
      groupId: isSet(object.groupId) ? Number(object.groupId) : 0,
    };
  },

  toJSON(message: MessageReceipt): unknown {
    const obj: any = {};
    message.senderId !== undefined &&
      (obj.senderId = Math.round(message.senderId));
    message.time !== undefined && (obj.time = Math.round(message.time));
    if (message.seqs) {
      obj.seqs = message.seqs.map((e) => Math.round(e));
    } else {
      obj.seqs = [];
    }
    if (message.rands) {
      obj.rands = message.rands.map((e) => Math.round(e));
    } else {
      obj.rands = [];
    }
    message.groupId !== undefined &&
      (obj.groupId = Math.round(message.groupId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MessageReceipt>, I>>(
    object: I
  ): MessageReceipt {
    const message = createBaseMessageReceipt();
    message.senderId = object.senderId ?? 0;
    message.time = object.time ?? 0;
    message.seqs = object.seqs?.map((e) => e) || [];
    message.rands = object.rands?.map((e) => e) || [];
    message.groupId = object.groupId ?? 0;
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
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

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
