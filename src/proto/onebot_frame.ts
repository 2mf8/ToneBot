/* eslint-disable */
import Long from "long";
import {
  PrivateMessageEvent,
  GroupMessageEvent,
  GroupUploadNoticeEvent,
  GroupAdminNoticeEvent,
  GroupDecreaseNoticeEvent,
  GroupIncreaseNoticeEvent,
  GroupBanNoticeEvent,
  FriendAddNoticeEvent,
  GroupRecallNoticeEvent,
  FriendRecallNoticeEvent,
  FriendRequestEvent,
  GroupRequestEvent,
  GroupTempMessageEvent,
  GroupNotifyEvent,
  ChannelMessageEvent,
} from "./onebot_event";
import {
  SendPrivateMsgReq,
  SendGroupMsgReq,
  SendMsgReq,
  DeleteMsgReq,
  GetMsgReq,
  GetForwardMsgReq,
  SendLikeReq,
  SetGroupKickReq,
  SetGroupBanReq,
  SetGroupAnonymousBanReq,
  SetGroupWholeBanReq,
  SetGroupAdminReq,
  SetGroupAnonymousReq,
  SetGroupCardReq,
  SetGroupNameReq,
  SetGroupLeaveReq,
  SetGroupSpecialTitleReq,
  SetFriendAddRequestReq,
  SetGroupAddRequestReq,
  GetLoginInfoReq,
  GetStrangerInfoReq,
  GetFriendListReq,
  GetGroupInfoReq,
  GetGroupListReq,
  GetGroupMemberInfoReq,
  GetGroupMemberListReq,
  GetGroupHonorInfoReq,
  GetCookiesReq,
  GetCsrfTokenReq,
  GetCredentialsReq,
  GetRecordReq,
  GetImageReq,
  CanSendImageReq,
  CanSendRecordReq,
  GetStatusReq,
  GetVersionInfoReq,
  SetRestartReq,
  CleanCacheReq,
  SetGroupSignInReq,
  SendMusicReq,
  SendGroupPokeReq,
  SendFriendPokeReq,
  SendChannelMsgReq,
  SendPrivateMsgResp,
  SendGroupMsgResp,
  SendMsgResp,
  DeleteMsgResp,
  GetMsgResp,
  GetForwardMsgResp,
  SendLikeResp,
  SetGroupKickResp,
  SetGroupBanResp,
  SetGroupAnonymousBanResp,
  SetGroupWholeBanResp,
  SetGroupAdminResp,
  SetGroupAnonymousResp,
  SetGroupCardResp,
  SetGroupNameResp,
  SetGroupLeaveResp,
  SetGroupSpecialTitleResp,
  SetFriendAddRequestResp,
  SetGroupAddRequestResp,
  GetLoginInfoResp,
  GetStrangerInfoResp,
  GetFriendListResp,
  GetGroupInfoResp,
  GetGroupListResp,
  GetGroupMemberInfoResp,
  GetGroupMemberListResp,
  GetGroupHonorInfoResp,
  GetCookiesResp,
  GetCsrfTokenResp,
  GetCredentialsResp,
  GetRecordResp,
  GetImageResp,
  CanSendImageResp,
  CanSendRecordResp,
  GetStatusResp,
  GetVersionInfoResp,
  SetRestartResp,
  CleanCacheResp,
  SetGroupSignInResp,
  SendMusicResp,
  SendGroupPokeResp,
  SendFriendPokeResp,
  SendChannelMsgResp,
} from "./onebot_api";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "onebot";

export interface Frame {
  botId: number;
  frameType: Frame_FrameType;
  echo: string;
  /** 是否正常 （API resp） */
  ok: boolean;
  extra: { [key: string]: string };
  privateMessageEvent: PrivateMessageEvent | undefined;
  groupMessageEvent: GroupMessageEvent | undefined;
  groupUploadNoticeEvent: GroupUploadNoticeEvent | undefined;
  groupAdminNoticeEvent: GroupAdminNoticeEvent | undefined;
  groupDecreaseNoticeEvent: GroupDecreaseNoticeEvent | undefined;
  groupIncreaseNoticeEvent: GroupIncreaseNoticeEvent | undefined;
  groupBanNoticeEvent: GroupBanNoticeEvent | undefined;
  friendAddNoticeEvent: FriendAddNoticeEvent | undefined;
  groupRecallNoticeEvent: GroupRecallNoticeEvent | undefined;
  friendRecallNoticeEvent: FriendRecallNoticeEvent | undefined;
  friendRequestEvent: FriendRequestEvent | undefined;
  groupRequestEvent: GroupRequestEvent | undefined;
  groupTempMessageEvent: GroupTempMessageEvent | undefined;
  groupNotifyEvent: GroupNotifyEvent | undefined;
  channelMessageEvent: ChannelMessageEvent | undefined;
  sendPrivateMsgReq: SendPrivateMsgReq | undefined;
  sendGroupMsgReq: SendGroupMsgReq | undefined;
  sendMsgReq: SendMsgReq | undefined;
  deleteMsgReq: DeleteMsgReq | undefined;
  getMsgReq: GetMsgReq | undefined;
  getForwardMsgReq: GetForwardMsgReq | undefined;
  sendLikeReq: SendLikeReq | undefined;
  setGroupKickReq: SetGroupKickReq | undefined;
  setGroupBanReq: SetGroupBanReq | undefined;
  setGroupAnonymousBanReq: SetGroupAnonymousBanReq | undefined;
  setGroupWholeBanReq: SetGroupWholeBanReq | undefined;
  setGroupAdminReq: SetGroupAdminReq | undefined;
  setGroupAnonymousReq: SetGroupAnonymousReq | undefined;
  setGroupCardReq: SetGroupCardReq | undefined;
  setGroupNameReq: SetGroupNameReq | undefined;
  setGroupLeaveReq: SetGroupLeaveReq | undefined;
  setGroupSpecialTitleReq: SetGroupSpecialTitleReq | undefined;
  setFriendAddRequestReq: SetFriendAddRequestReq | undefined;
  setGroupAddRequestReq: SetGroupAddRequestReq | undefined;
  getLoginInfoReq: GetLoginInfoReq | undefined;
  getStrangerInfoReq: GetStrangerInfoReq | undefined;
  getFriendListReq: GetFriendListReq | undefined;
  getGroupInfoReq: GetGroupInfoReq | undefined;
  getGroupListReq: GetGroupListReq | undefined;
  getGroupMemberInfoReq: GetGroupMemberInfoReq | undefined;
  getGroupMemberListReq: GetGroupMemberListReq | undefined;
  getGroupHonorInfoReq: GetGroupHonorInfoReq | undefined;
  getCookiesReq: GetCookiesReq | undefined;
  getCsrfTokenReq: GetCsrfTokenReq | undefined;
  getCredentialsReq: GetCredentialsReq | undefined;
  getRecordReq: GetRecordReq | undefined;
  getImageReq: GetImageReq | undefined;
  canSendImageReq: CanSendImageReq | undefined;
  canSendRecordReq: CanSendRecordReq | undefined;
  getStatusReq: GetStatusReq | undefined;
  getVersionInfoReq: GetVersionInfoReq | undefined;
  setRestartReq: SetRestartReq | undefined;
  cleanCacheReq: CleanCacheReq | undefined;
  setGroupSignInReq: SetGroupSignInReq | undefined;
  sendMusicReq: SendMusicReq | undefined;
  sendGroupPokeReq: SendGroupPokeReq | undefined;
  sendFriendPokeReq: SendFriendPokeReq | undefined;
  sendChannelMsgReq: SendChannelMsgReq | undefined;
  sendPrivateMsgResp: SendPrivateMsgResp | undefined;
  sendGroupMsgResp: SendGroupMsgResp | undefined;
  sendMsgResp: SendMsgResp | undefined;
  deleteMsgResp: DeleteMsgResp | undefined;
  getMsgResp: GetMsgResp | undefined;
  getForwardMsgResp: GetForwardMsgResp | undefined;
  sendLikeResp: SendLikeResp | undefined;
  setGroupKickResp: SetGroupKickResp | undefined;
  setGroupBanResp: SetGroupBanResp | undefined;
  setGroupAnonymousBanResp: SetGroupAnonymousBanResp | undefined;
  setGroupWholeBanResp: SetGroupWholeBanResp | undefined;
  setGroupAdminResp: SetGroupAdminResp | undefined;
  setGroupAnonymousResp: SetGroupAnonymousResp | undefined;
  setGroupCardResp: SetGroupCardResp | undefined;
  setGroupNameResp: SetGroupNameResp | undefined;
  setGroupLeaveResp: SetGroupLeaveResp | undefined;
  setGroupSpecialTitleResp: SetGroupSpecialTitleResp | undefined;
  setFriendAddRequestResp: SetFriendAddRequestResp | undefined;
  setGroupAddRequestResp: SetGroupAddRequestResp | undefined;
  getLoginInfoResp: GetLoginInfoResp | undefined;
  getStrangerInfoResp: GetStrangerInfoResp | undefined;
  getFriendListResp: GetFriendListResp | undefined;
  getGroupInfoResp: GetGroupInfoResp | undefined;
  getGroupListResp: GetGroupListResp | undefined;
  getGroupMemberInfoResp: GetGroupMemberInfoResp | undefined;
  getGroupMemberListResp: GetGroupMemberListResp | undefined;
  getGroupHonorInfoResp: GetGroupHonorInfoResp | undefined;
  getCookiesResp: GetCookiesResp | undefined;
  getCsrfTokenResp: GetCsrfTokenResp | undefined;
  getCredentialsResp: GetCredentialsResp | undefined;
  getRecordResp: GetRecordResp | undefined;
  getImageResp: GetImageResp | undefined;
  canSendImageResp: CanSendImageResp | undefined;
  canSendRecordResp: CanSendRecordResp | undefined;
  getStatusResp: GetStatusResp | undefined;
  getVersionInfoResp: GetVersionInfoResp | undefined;
  setRestartResp: SetRestartResp | undefined;
  cleanCacheResp: CleanCacheResp | undefined;
  setGroupSignInResp: SetGroupSignInResp | undefined;
  sendMusicResp: SendMusicResp | undefined;
  sendGroupPokeResp: SendGroupPokeResp | undefined;
  sendFriendPokeResp: SendFriendPokeResp | undefined;
  sendChannelMsgResp: SendChannelMsgResp | undefined;
}

export enum Frame_FrameType {
  TUNKNOWN = 0,
  TPrivateMessageEvent = 101,
  TGroupMessageEvent = 102,
  TGroupUploadNoticeEvent = 103,
  TGroupAdminNoticeEvent = 104,
  TGroupDecreaseNoticeEvent = 105,
  TGroupIncreaseNoticeEvent = 106,
  TGroupBanNoticeEvent = 107,
  TFriendAddNoticeEvent = 108,
  TGroupRecallNoticeEvent = 109,
  TFriendRecallNoticeEvent = 110,
  TFriendRequestEvent = 111,
  TGroupRequestEvent = 112,
  TGroupTempMessageEvent = 113,
  TGroupNotifyEvent = 114,
  TChannelMessageEvent = 115,
  TSendPrivateMsgReq = 201,
  TSendGroupMsgReq = 202,
  TSendMsgReq = 203,
  TDeleteMsgReq = 204,
  TGetMsgReq = 205,
  TGetForwardMsgReq = 206,
  TSendLikeReq = 207,
  TSetGroupKickReq = 208,
  TSetGroupBanReq = 209,
  TSetGroupAnonymousReq = 210,
  TSetGroupWholeBanReq = 211,
  TSetGroupAdminReq = 212,
  TSetGroupAnonymousBanReq = 213,
  TSetGroupCardReq = 214,
  TSetGroupNameReq = 215,
  TSetGroupLeaveReq = 216,
  TSetGroupSpecialTitleReq = 217,
  TSetFriendAddRequestReq = 218,
  TSetGroupAddRequestReq = 219,
  TGetLoginInfoReq = 220,
  TGetStrangerInfoReq = 221,
  TGetFriendListReq = 222,
  TGetGroupInfoReq = 223,
  TGetGroupListReq = 224,
  TGetGroupMemberInfoReq = 225,
  TGetGroupMemberListReq = 226,
  TGetGroupHonorInfoReq = 227,
  TGetCookiesReq = 228,
  TGetCsrfTokenReq = 229,
  TGetCredentialsReq = 230,
  TGetRecordReq = 231,
  TGetImageReq = 232,
  TCanSendImageReq = 233,
  TCanSendRecordReq = 234,
  TGetStatusReq = 235,
  TGetVersionInfoReq = 236,
  TSetRestartReq = 237,
  TCleanCacheReq = 238,
  TSetGroupSignInReq = 239,
  TSendMusicReq = 240,
  TSendGroupPokeReq = 241,
  TSendFriendPokeReq = 242,
  TSendChannelMsgReq = 243,
  TSendPrivateMsgResp = 301,
  TSendGroupMsgResp = 302,
  TSendMsgResp = 303,
  TDeleteMsgResp = 304,
  TGetMsgResp = 305,
  TGetForwardMsgResp = 306,
  TSendLikeResp = 307,
  TSetGroupKickResp = 308,
  TSetGroupBanResp = 309,
  TSetGroupAnonymousResp = 310,
  TSetGroupWholeBanResp = 311,
  TSetGroupAdminResp = 312,
  TSetGroupAnonymousBanResp = 313,
  TSetGroupCardResp = 314,
  TSetGroupNameResp = 315,
  TSetGroupLeaveResp = 316,
  TSetGroupSpecialTitleResp = 317,
  TSetFriendAddRequestResp = 318,
  TSetGroupAddRequestResp = 319,
  TGetLoginInfoResp = 320,
  TGetStrangerInfoResp = 321,
  TGetFriendListResp = 322,
  TGetGroupInfoResp = 323,
  TGetGroupListResp = 324,
  TGetGroupMemberInfoResp = 325,
  TGetGroupMemberListResp = 326,
  TGetGroupHonorInfoResp = 327,
  TGetCookiesResp = 328,
  TGetCsrfTokenResp = 329,
  TGetCredentialsResp = 330,
  TGetRecordResp = 331,
  TGetImageResp = 332,
  TCanSendImageResp = 333,
  TCanSendRecordResp = 334,
  TGetStatusResp = 335,
  TGetVersionInfoResp = 336,
  TSetRestartResp = 337,
  TCleanCacheResp = 338,
  TSetGroupSignInResp = 339,
  TSendMusicResp = 340,
  TSendGroupPokeResp = 341,
  TSendFriendPokeResp = 342,
  TSendChannelMsgResp = 343,
  UNRECOGNIZED = -1,
}

export function frame_FrameTypeFromJSON(object: any): Frame_FrameType {
  switch (object) {
    case 0:
    case "TUNKNOWN":
      return Frame_FrameType.TUNKNOWN;
    case 101:
    case "TPrivateMessageEvent":
      return Frame_FrameType.TPrivateMessageEvent;
    case 102:
    case "TGroupMessageEvent":
      return Frame_FrameType.TGroupMessageEvent;
    case 103:
    case "TGroupUploadNoticeEvent":
      return Frame_FrameType.TGroupUploadNoticeEvent;
    case 104:
    case "TGroupAdminNoticeEvent":
      return Frame_FrameType.TGroupAdminNoticeEvent;
    case 105:
    case "TGroupDecreaseNoticeEvent":
      return Frame_FrameType.TGroupDecreaseNoticeEvent;
    case 106:
    case "TGroupIncreaseNoticeEvent":
      return Frame_FrameType.TGroupIncreaseNoticeEvent;
    case 107:
    case "TGroupBanNoticeEvent":
      return Frame_FrameType.TGroupBanNoticeEvent;
    case 108:
    case "TFriendAddNoticeEvent":
      return Frame_FrameType.TFriendAddNoticeEvent;
    case 109:
    case "TGroupRecallNoticeEvent":
      return Frame_FrameType.TGroupRecallNoticeEvent;
    case 110:
    case "TFriendRecallNoticeEvent":
      return Frame_FrameType.TFriendRecallNoticeEvent;
    case 111:
    case "TFriendRequestEvent":
      return Frame_FrameType.TFriendRequestEvent;
    case 112:
    case "TGroupRequestEvent":
      return Frame_FrameType.TGroupRequestEvent;
    case 113:
    case "TGroupTempMessageEvent":
      return Frame_FrameType.TGroupTempMessageEvent;
    case 114:
    case "TGroupNotifyEvent":
      return Frame_FrameType.TGroupNotifyEvent;
    case 115:
    case "TChannelMessageEvent":
      return Frame_FrameType.TChannelMessageEvent;
    case 201:
    case "TSendPrivateMsgReq":
      return Frame_FrameType.TSendPrivateMsgReq;
    case 202:
    case "TSendGroupMsgReq":
      return Frame_FrameType.TSendGroupMsgReq;
    case 203:
    case "TSendMsgReq":
      return Frame_FrameType.TSendMsgReq;
    case 204:
    case "TDeleteMsgReq":
      return Frame_FrameType.TDeleteMsgReq;
    case 205:
    case "TGetMsgReq":
      return Frame_FrameType.TGetMsgReq;
    case 206:
    case "TGetForwardMsgReq":
      return Frame_FrameType.TGetForwardMsgReq;
    case 207:
    case "TSendLikeReq":
      return Frame_FrameType.TSendLikeReq;
    case 208:
    case "TSetGroupKickReq":
      return Frame_FrameType.TSetGroupKickReq;
    case 209:
    case "TSetGroupBanReq":
      return Frame_FrameType.TSetGroupBanReq;
    case 210:
    case "TSetGroupAnonymousReq":
      return Frame_FrameType.TSetGroupAnonymousReq;
    case 211:
    case "TSetGroupWholeBanReq":
      return Frame_FrameType.TSetGroupWholeBanReq;
    case 212:
    case "TSetGroupAdminReq":
      return Frame_FrameType.TSetGroupAdminReq;
    case 213:
    case "TSetGroupAnonymousBanReq":
      return Frame_FrameType.TSetGroupAnonymousBanReq;
    case 214:
    case "TSetGroupCardReq":
      return Frame_FrameType.TSetGroupCardReq;
    case 215:
    case "TSetGroupNameReq":
      return Frame_FrameType.TSetGroupNameReq;
    case 216:
    case "TSetGroupLeaveReq":
      return Frame_FrameType.TSetGroupLeaveReq;
    case 217:
    case "TSetGroupSpecialTitleReq":
      return Frame_FrameType.TSetGroupSpecialTitleReq;
    case 218:
    case "TSetFriendAddRequestReq":
      return Frame_FrameType.TSetFriendAddRequestReq;
    case 219:
    case "TSetGroupAddRequestReq":
      return Frame_FrameType.TSetGroupAddRequestReq;
    case 220:
    case "TGetLoginInfoReq":
      return Frame_FrameType.TGetLoginInfoReq;
    case 221:
    case "TGetStrangerInfoReq":
      return Frame_FrameType.TGetStrangerInfoReq;
    case 222:
    case "TGetFriendListReq":
      return Frame_FrameType.TGetFriendListReq;
    case 223:
    case "TGetGroupInfoReq":
      return Frame_FrameType.TGetGroupInfoReq;
    case 224:
    case "TGetGroupListReq":
      return Frame_FrameType.TGetGroupListReq;
    case 225:
    case "TGetGroupMemberInfoReq":
      return Frame_FrameType.TGetGroupMemberInfoReq;
    case 226:
    case "TGetGroupMemberListReq":
      return Frame_FrameType.TGetGroupMemberListReq;
    case 227:
    case "TGetGroupHonorInfoReq":
      return Frame_FrameType.TGetGroupHonorInfoReq;
    case 228:
    case "TGetCookiesReq":
      return Frame_FrameType.TGetCookiesReq;
    case 229:
    case "TGetCsrfTokenReq":
      return Frame_FrameType.TGetCsrfTokenReq;
    case 230:
    case "TGetCredentialsReq":
      return Frame_FrameType.TGetCredentialsReq;
    case 231:
    case "TGetRecordReq":
      return Frame_FrameType.TGetRecordReq;
    case 232:
    case "TGetImageReq":
      return Frame_FrameType.TGetImageReq;
    case 233:
    case "TCanSendImageReq":
      return Frame_FrameType.TCanSendImageReq;
    case 234:
    case "TCanSendRecordReq":
      return Frame_FrameType.TCanSendRecordReq;
    case 235:
    case "TGetStatusReq":
      return Frame_FrameType.TGetStatusReq;
    case 236:
    case "TGetVersionInfoReq":
      return Frame_FrameType.TGetVersionInfoReq;
    case 237:
    case "TSetRestartReq":
      return Frame_FrameType.TSetRestartReq;
    case 238:
    case "TCleanCacheReq":
      return Frame_FrameType.TCleanCacheReq;
    case 239:
    case "TSetGroupSignInReq":
      return Frame_FrameType.TSetGroupSignInReq;
    case 240:
    case "TSendMusicReq":
      return Frame_FrameType.TSendMusicReq;
    case 241:
    case "TSendGroupPokeReq":
      return Frame_FrameType.TSendGroupPokeReq;
    case 242:
    case "TSendFriendPokeReq":
      return Frame_FrameType.TSendFriendPokeReq;
    case 243:
    case "TSendChannelMsgReq":
      return Frame_FrameType.TSendChannelMsgReq;
    case 301:
    case "TSendPrivateMsgResp":
      return Frame_FrameType.TSendPrivateMsgResp;
    case 302:
    case "TSendGroupMsgResp":
      return Frame_FrameType.TSendGroupMsgResp;
    case 303:
    case "TSendMsgResp":
      return Frame_FrameType.TSendMsgResp;
    case 304:
    case "TDeleteMsgResp":
      return Frame_FrameType.TDeleteMsgResp;
    case 305:
    case "TGetMsgResp":
      return Frame_FrameType.TGetMsgResp;
    case 306:
    case "TGetForwardMsgResp":
      return Frame_FrameType.TGetForwardMsgResp;
    case 307:
    case "TSendLikeResp":
      return Frame_FrameType.TSendLikeResp;
    case 308:
    case "TSetGroupKickResp":
      return Frame_FrameType.TSetGroupKickResp;
    case 309:
    case "TSetGroupBanResp":
      return Frame_FrameType.TSetGroupBanResp;
    case 310:
    case "TSetGroupAnonymousResp":
      return Frame_FrameType.TSetGroupAnonymousResp;
    case 311:
    case "TSetGroupWholeBanResp":
      return Frame_FrameType.TSetGroupWholeBanResp;
    case 312:
    case "TSetGroupAdminResp":
      return Frame_FrameType.TSetGroupAdminResp;
    case 313:
    case "TSetGroupAnonymousBanResp":
      return Frame_FrameType.TSetGroupAnonymousBanResp;
    case 314:
    case "TSetGroupCardResp":
      return Frame_FrameType.TSetGroupCardResp;
    case 315:
    case "TSetGroupNameResp":
      return Frame_FrameType.TSetGroupNameResp;
    case 316:
    case "TSetGroupLeaveResp":
      return Frame_FrameType.TSetGroupLeaveResp;
    case 317:
    case "TSetGroupSpecialTitleResp":
      return Frame_FrameType.TSetGroupSpecialTitleResp;
    case 318:
    case "TSetFriendAddRequestResp":
      return Frame_FrameType.TSetFriendAddRequestResp;
    case 319:
    case "TSetGroupAddRequestResp":
      return Frame_FrameType.TSetGroupAddRequestResp;
    case 320:
    case "TGetLoginInfoResp":
      return Frame_FrameType.TGetLoginInfoResp;
    case 321:
    case "TGetStrangerInfoResp":
      return Frame_FrameType.TGetStrangerInfoResp;
    case 322:
    case "TGetFriendListResp":
      return Frame_FrameType.TGetFriendListResp;
    case 323:
    case "TGetGroupInfoResp":
      return Frame_FrameType.TGetGroupInfoResp;
    case 324:
    case "TGetGroupListResp":
      return Frame_FrameType.TGetGroupListResp;
    case 325:
    case "TGetGroupMemberInfoResp":
      return Frame_FrameType.TGetGroupMemberInfoResp;
    case 326:
    case "TGetGroupMemberListResp":
      return Frame_FrameType.TGetGroupMemberListResp;
    case 327:
    case "TGetGroupHonorInfoResp":
      return Frame_FrameType.TGetGroupHonorInfoResp;
    case 328:
    case "TGetCookiesResp":
      return Frame_FrameType.TGetCookiesResp;
    case 329:
    case "TGetCsrfTokenResp":
      return Frame_FrameType.TGetCsrfTokenResp;
    case 330:
    case "TGetCredentialsResp":
      return Frame_FrameType.TGetCredentialsResp;
    case 331:
    case "TGetRecordResp":
      return Frame_FrameType.TGetRecordResp;
    case 332:
    case "TGetImageResp":
      return Frame_FrameType.TGetImageResp;
    case 333:
    case "TCanSendImageResp":
      return Frame_FrameType.TCanSendImageResp;
    case 334:
    case "TCanSendRecordResp":
      return Frame_FrameType.TCanSendRecordResp;
    case 335:
    case "TGetStatusResp":
      return Frame_FrameType.TGetStatusResp;
    case 336:
    case "TGetVersionInfoResp":
      return Frame_FrameType.TGetVersionInfoResp;
    case 337:
    case "TSetRestartResp":
      return Frame_FrameType.TSetRestartResp;
    case 338:
    case "TCleanCacheResp":
      return Frame_FrameType.TCleanCacheResp;
    case 339:
    case "TSetGroupSignInResp":
      return Frame_FrameType.TSetGroupSignInResp;
    case 340:
    case "TSendMusicResp":
      return Frame_FrameType.TSendMusicResp;
    case 341:
    case "TSendGroupPokeResp":
      return Frame_FrameType.TSendGroupPokeResp;
    case 342:
    case "TSendFriendPokeResp":
      return Frame_FrameType.TSendFriendPokeResp;
    case 343:
    case "TSendChannelMsgResp":
      return Frame_FrameType.TSendChannelMsgResp;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Frame_FrameType.UNRECOGNIZED;
  }
}

export function frame_FrameTypeToJSON(object: Frame_FrameType): string {
  switch (object) {
    case Frame_FrameType.TUNKNOWN:
      return "TUNKNOWN";
    case Frame_FrameType.TPrivateMessageEvent:
      return "TPrivateMessageEvent";
    case Frame_FrameType.TGroupMessageEvent:
      return "TGroupMessageEvent";
    case Frame_FrameType.TGroupUploadNoticeEvent:
      return "TGroupUploadNoticeEvent";
    case Frame_FrameType.TGroupAdminNoticeEvent:
      return "TGroupAdminNoticeEvent";
    case Frame_FrameType.TGroupDecreaseNoticeEvent:
      return "TGroupDecreaseNoticeEvent";
    case Frame_FrameType.TGroupIncreaseNoticeEvent:
      return "TGroupIncreaseNoticeEvent";
    case Frame_FrameType.TGroupBanNoticeEvent:
      return "TGroupBanNoticeEvent";
    case Frame_FrameType.TFriendAddNoticeEvent:
      return "TFriendAddNoticeEvent";
    case Frame_FrameType.TGroupRecallNoticeEvent:
      return "TGroupRecallNoticeEvent";
    case Frame_FrameType.TFriendRecallNoticeEvent:
      return "TFriendRecallNoticeEvent";
    case Frame_FrameType.TFriendRequestEvent:
      return "TFriendRequestEvent";
    case Frame_FrameType.TGroupRequestEvent:
      return "TGroupRequestEvent";
    case Frame_FrameType.TGroupTempMessageEvent:
      return "TGroupTempMessageEvent";
    case Frame_FrameType.TGroupNotifyEvent:
      return "TGroupNotifyEvent";
    case Frame_FrameType.TChannelMessageEvent:
      return "TChannelMessageEvent";
    case Frame_FrameType.TSendPrivateMsgReq:
      return "TSendPrivateMsgReq";
    case Frame_FrameType.TSendGroupMsgReq:
      return "TSendGroupMsgReq";
    case Frame_FrameType.TSendMsgReq:
      return "TSendMsgReq";
    case Frame_FrameType.TDeleteMsgReq:
      return "TDeleteMsgReq";
    case Frame_FrameType.TGetMsgReq:
      return "TGetMsgReq";
    case Frame_FrameType.TGetForwardMsgReq:
      return "TGetForwardMsgReq";
    case Frame_FrameType.TSendLikeReq:
      return "TSendLikeReq";
    case Frame_FrameType.TSetGroupKickReq:
      return "TSetGroupKickReq";
    case Frame_FrameType.TSetGroupBanReq:
      return "TSetGroupBanReq";
    case Frame_FrameType.TSetGroupAnonymousReq:
      return "TSetGroupAnonymousReq";
    case Frame_FrameType.TSetGroupWholeBanReq:
      return "TSetGroupWholeBanReq";
    case Frame_FrameType.TSetGroupAdminReq:
      return "TSetGroupAdminReq";
    case Frame_FrameType.TSetGroupAnonymousBanReq:
      return "TSetGroupAnonymousBanReq";
    case Frame_FrameType.TSetGroupCardReq:
      return "TSetGroupCardReq";
    case Frame_FrameType.TSetGroupNameReq:
      return "TSetGroupNameReq";
    case Frame_FrameType.TSetGroupLeaveReq:
      return "TSetGroupLeaveReq";
    case Frame_FrameType.TSetGroupSpecialTitleReq:
      return "TSetGroupSpecialTitleReq";
    case Frame_FrameType.TSetFriendAddRequestReq:
      return "TSetFriendAddRequestReq";
    case Frame_FrameType.TSetGroupAddRequestReq:
      return "TSetGroupAddRequestReq";
    case Frame_FrameType.TGetLoginInfoReq:
      return "TGetLoginInfoReq";
    case Frame_FrameType.TGetStrangerInfoReq:
      return "TGetStrangerInfoReq";
    case Frame_FrameType.TGetFriendListReq:
      return "TGetFriendListReq";
    case Frame_FrameType.TGetGroupInfoReq:
      return "TGetGroupInfoReq";
    case Frame_FrameType.TGetGroupListReq:
      return "TGetGroupListReq";
    case Frame_FrameType.TGetGroupMemberInfoReq:
      return "TGetGroupMemberInfoReq";
    case Frame_FrameType.TGetGroupMemberListReq:
      return "TGetGroupMemberListReq";
    case Frame_FrameType.TGetGroupHonorInfoReq:
      return "TGetGroupHonorInfoReq";
    case Frame_FrameType.TGetCookiesReq:
      return "TGetCookiesReq";
    case Frame_FrameType.TGetCsrfTokenReq:
      return "TGetCsrfTokenReq";
    case Frame_FrameType.TGetCredentialsReq:
      return "TGetCredentialsReq";
    case Frame_FrameType.TGetRecordReq:
      return "TGetRecordReq";
    case Frame_FrameType.TGetImageReq:
      return "TGetImageReq";
    case Frame_FrameType.TCanSendImageReq:
      return "TCanSendImageReq";
    case Frame_FrameType.TCanSendRecordReq:
      return "TCanSendRecordReq";
    case Frame_FrameType.TGetStatusReq:
      return "TGetStatusReq";
    case Frame_FrameType.TGetVersionInfoReq:
      return "TGetVersionInfoReq";
    case Frame_FrameType.TSetRestartReq:
      return "TSetRestartReq";
    case Frame_FrameType.TCleanCacheReq:
      return "TCleanCacheReq";
    case Frame_FrameType.TSetGroupSignInReq:
      return "TSetGroupSignInReq";
    case Frame_FrameType.TSendMusicReq:
      return "TSendMusicReq";
    case Frame_FrameType.TSendGroupPokeReq:
      return "TSendGroupPokeReq";
    case Frame_FrameType.TSendFriendPokeReq:
      return "TSendFriendPokeReq";
    case Frame_FrameType.TSendChannelMsgReq:
      return "TSendChannelMsgReq";
    case Frame_FrameType.TSendPrivateMsgResp:
      return "TSendPrivateMsgResp";
    case Frame_FrameType.TSendGroupMsgResp:
      return "TSendGroupMsgResp";
    case Frame_FrameType.TSendMsgResp:
      return "TSendMsgResp";
    case Frame_FrameType.TDeleteMsgResp:
      return "TDeleteMsgResp";
    case Frame_FrameType.TGetMsgResp:
      return "TGetMsgResp";
    case Frame_FrameType.TGetForwardMsgResp:
      return "TGetForwardMsgResp";
    case Frame_FrameType.TSendLikeResp:
      return "TSendLikeResp";
    case Frame_FrameType.TSetGroupKickResp:
      return "TSetGroupKickResp";
    case Frame_FrameType.TSetGroupBanResp:
      return "TSetGroupBanResp";
    case Frame_FrameType.TSetGroupAnonymousResp:
      return "TSetGroupAnonymousResp";
    case Frame_FrameType.TSetGroupWholeBanResp:
      return "TSetGroupWholeBanResp";
    case Frame_FrameType.TSetGroupAdminResp:
      return "TSetGroupAdminResp";
    case Frame_FrameType.TSetGroupAnonymousBanResp:
      return "TSetGroupAnonymousBanResp";
    case Frame_FrameType.TSetGroupCardResp:
      return "TSetGroupCardResp";
    case Frame_FrameType.TSetGroupNameResp:
      return "TSetGroupNameResp";
    case Frame_FrameType.TSetGroupLeaveResp:
      return "TSetGroupLeaveResp";
    case Frame_FrameType.TSetGroupSpecialTitleResp:
      return "TSetGroupSpecialTitleResp";
    case Frame_FrameType.TSetFriendAddRequestResp:
      return "TSetFriendAddRequestResp";
    case Frame_FrameType.TSetGroupAddRequestResp:
      return "TSetGroupAddRequestResp";
    case Frame_FrameType.TGetLoginInfoResp:
      return "TGetLoginInfoResp";
    case Frame_FrameType.TGetStrangerInfoResp:
      return "TGetStrangerInfoResp";
    case Frame_FrameType.TGetFriendListResp:
      return "TGetFriendListResp";
    case Frame_FrameType.TGetGroupInfoResp:
      return "TGetGroupInfoResp";
    case Frame_FrameType.TGetGroupListResp:
      return "TGetGroupListResp";
    case Frame_FrameType.TGetGroupMemberInfoResp:
      return "TGetGroupMemberInfoResp";
    case Frame_FrameType.TGetGroupMemberListResp:
      return "TGetGroupMemberListResp";
    case Frame_FrameType.TGetGroupHonorInfoResp:
      return "TGetGroupHonorInfoResp";
    case Frame_FrameType.TGetCookiesResp:
      return "TGetCookiesResp";
    case Frame_FrameType.TGetCsrfTokenResp:
      return "TGetCsrfTokenResp";
    case Frame_FrameType.TGetCredentialsResp:
      return "TGetCredentialsResp";
    case Frame_FrameType.TGetRecordResp:
      return "TGetRecordResp";
    case Frame_FrameType.TGetImageResp:
      return "TGetImageResp";
    case Frame_FrameType.TCanSendImageResp:
      return "TCanSendImageResp";
    case Frame_FrameType.TCanSendRecordResp:
      return "TCanSendRecordResp";
    case Frame_FrameType.TGetStatusResp:
      return "TGetStatusResp";
    case Frame_FrameType.TGetVersionInfoResp:
      return "TGetVersionInfoResp";
    case Frame_FrameType.TSetRestartResp:
      return "TSetRestartResp";
    case Frame_FrameType.TCleanCacheResp:
      return "TCleanCacheResp";
    case Frame_FrameType.TSetGroupSignInResp:
      return "TSetGroupSignInResp";
    case Frame_FrameType.TSendMusicResp:
      return "TSendMusicResp";
    case Frame_FrameType.TSendGroupPokeResp:
      return "TSendGroupPokeResp";
    case Frame_FrameType.TSendFriendPokeResp:
      return "TSendFriendPokeResp";
    case Frame_FrameType.TSendChannelMsgResp:
      return "TSendChannelMsgResp";
    case Frame_FrameType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Frame_ExtraEntry {
  key: string;
  value: string;
}

function createBaseFrame(): Frame {
  return {
    botId: 0,
    frameType: 0,
    echo: "",
    ok: false,
    extra: {},
    privateMessageEvent: undefined,
    groupMessageEvent: undefined,
    groupUploadNoticeEvent: undefined,
    groupAdminNoticeEvent: undefined,
    groupDecreaseNoticeEvent: undefined,
    groupIncreaseNoticeEvent: undefined,
    groupBanNoticeEvent: undefined,
    friendAddNoticeEvent: undefined,
    groupRecallNoticeEvent: undefined,
    friendRecallNoticeEvent: undefined,
    friendRequestEvent: undefined,
    groupRequestEvent: undefined,
    groupTempMessageEvent: undefined,
    groupNotifyEvent: undefined,
    channelMessageEvent: undefined,
    sendPrivateMsgReq: undefined,
    sendGroupMsgReq: undefined,
    sendMsgReq: undefined,
    deleteMsgReq: undefined,
    getMsgReq: undefined,
    getForwardMsgReq: undefined,
    sendLikeReq: undefined,
    setGroupKickReq: undefined,
    setGroupBanReq: undefined,
    setGroupAnonymousBanReq: undefined,
    setGroupWholeBanReq: undefined,
    setGroupAdminReq: undefined,
    setGroupAnonymousReq: undefined,
    setGroupCardReq: undefined,
    setGroupNameReq: undefined,
    setGroupLeaveReq: undefined,
    setGroupSpecialTitleReq: undefined,
    setFriendAddRequestReq: undefined,
    setGroupAddRequestReq: undefined,
    getLoginInfoReq: undefined,
    getStrangerInfoReq: undefined,
    getFriendListReq: undefined,
    getGroupInfoReq: undefined,
    getGroupListReq: undefined,
    getGroupMemberInfoReq: undefined,
    getGroupMemberListReq: undefined,
    getGroupHonorInfoReq: undefined,
    getCookiesReq: undefined,
    getCsrfTokenReq: undefined,
    getCredentialsReq: undefined,
    getRecordReq: undefined,
    getImageReq: undefined,
    canSendImageReq: undefined,
    canSendRecordReq: undefined,
    getStatusReq: undefined,
    getVersionInfoReq: undefined,
    setRestartReq: undefined,
    cleanCacheReq: undefined,
    setGroupSignInReq: undefined,
    sendMusicReq: undefined,
    sendGroupPokeReq: undefined,
    sendFriendPokeReq: undefined,
    sendChannelMsgReq: undefined,
    sendPrivateMsgResp: undefined,
    sendGroupMsgResp: undefined,
    sendMsgResp: undefined,
    deleteMsgResp: undefined,
    getMsgResp: undefined,
    getForwardMsgResp: undefined,
    sendLikeResp: undefined,
    setGroupKickResp: undefined,
    setGroupBanResp: undefined,
    setGroupAnonymousBanResp: undefined,
    setGroupWholeBanResp: undefined,
    setGroupAdminResp: undefined,
    setGroupAnonymousResp: undefined,
    setGroupCardResp: undefined,
    setGroupNameResp: undefined,
    setGroupLeaveResp: undefined,
    setGroupSpecialTitleResp: undefined,
    setFriendAddRequestResp: undefined,
    setGroupAddRequestResp: undefined,
    getLoginInfoResp: undefined,
    getStrangerInfoResp: undefined,
    getFriendListResp: undefined,
    getGroupInfoResp: undefined,
    getGroupListResp: undefined,
    getGroupMemberInfoResp: undefined,
    getGroupMemberListResp: undefined,
    getGroupHonorInfoResp: undefined,
    getCookiesResp: undefined,
    getCsrfTokenResp: undefined,
    getCredentialsResp: undefined,
    getRecordResp: undefined,
    getImageResp: undefined,
    canSendImageResp: undefined,
    canSendRecordResp: undefined,
    getStatusResp: undefined,
    getVersionInfoResp: undefined,
    setRestartResp: undefined,
    cleanCacheResp: undefined,
    setGroupSignInResp: undefined,
    sendMusicResp: undefined,
    sendGroupPokeResp: undefined,
    sendFriendPokeResp: undefined,
    sendChannelMsgResp: undefined,
  };
}

export const Frame = {
  encode(message: Frame, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.botId !== 0) {
      writer.uint32(8).int64(message.botId);
    }
    if (message.frameType !== 0) {
      writer.uint32(16).int32(message.frameType);
    }
    if (message.echo !== "") {
      writer.uint32(26).string(message.echo);
    }
    if (message.ok === true) {
      writer.uint32(32).bool(message.ok);
    }
    Object.entries(message.extra).forEach(([key, value]) => {
      Frame_ExtraEntry.encode(
        { key: key as any, value },
        writer.uint32(802).fork()
      ).ldelim();
    });
    if (message.privateMessageEvent !== undefined) {
      PrivateMessageEvent.encode(
        message.privateMessageEvent,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.groupMessageEvent !== undefined) {
      GroupMessageEvent.encode(
        message.groupMessageEvent,
        writer.uint32(818).fork()
      ).ldelim();
    }
    if (message.groupUploadNoticeEvent !== undefined) {
      GroupUploadNoticeEvent.encode(
        message.groupUploadNoticeEvent,
        writer.uint32(826).fork()
      ).ldelim();
    }
    if (message.groupAdminNoticeEvent !== undefined) {
      GroupAdminNoticeEvent.encode(
        message.groupAdminNoticeEvent,
        writer.uint32(834).fork()
      ).ldelim();
    }
    if (message.groupDecreaseNoticeEvent !== undefined) {
      GroupDecreaseNoticeEvent.encode(
        message.groupDecreaseNoticeEvent,
        writer.uint32(842).fork()
      ).ldelim();
    }
    if (message.groupIncreaseNoticeEvent !== undefined) {
      GroupIncreaseNoticeEvent.encode(
        message.groupIncreaseNoticeEvent,
        writer.uint32(850).fork()
      ).ldelim();
    }
    if (message.groupBanNoticeEvent !== undefined) {
      GroupBanNoticeEvent.encode(
        message.groupBanNoticeEvent,
        writer.uint32(858).fork()
      ).ldelim();
    }
    if (message.friendAddNoticeEvent !== undefined) {
      FriendAddNoticeEvent.encode(
        message.friendAddNoticeEvent,
        writer.uint32(866).fork()
      ).ldelim();
    }
    if (message.groupRecallNoticeEvent !== undefined) {
      GroupRecallNoticeEvent.encode(
        message.groupRecallNoticeEvent,
        writer.uint32(874).fork()
      ).ldelim();
    }
    if (message.friendRecallNoticeEvent !== undefined) {
      FriendRecallNoticeEvent.encode(
        message.friendRecallNoticeEvent,
        writer.uint32(882).fork()
      ).ldelim();
    }
    if (message.friendRequestEvent !== undefined) {
      FriendRequestEvent.encode(
        message.friendRequestEvent,
        writer.uint32(890).fork()
      ).ldelim();
    }
    if (message.groupRequestEvent !== undefined) {
      GroupRequestEvent.encode(
        message.groupRequestEvent,
        writer.uint32(898).fork()
      ).ldelim();
    }
    if (message.groupTempMessageEvent !== undefined) {
      GroupTempMessageEvent.encode(
        message.groupTempMessageEvent,
        writer.uint32(906).fork()
      ).ldelim();
    }
    if (message.groupNotifyEvent !== undefined) {
      GroupNotifyEvent.encode(
        message.groupNotifyEvent,
        writer.uint32(914).fork()
      ).ldelim();
    }
    if (message.channelMessageEvent !== undefined) {
      ChannelMessageEvent.encode(
        message.channelMessageEvent,
        writer.uint32(922).fork()
      ).ldelim();
    }
    if (message.sendPrivateMsgReq !== undefined) {
      SendPrivateMsgReq.encode(
        message.sendPrivateMsgReq,
        writer.uint32(1610).fork()
      ).ldelim();
    }
    if (message.sendGroupMsgReq !== undefined) {
      SendGroupMsgReq.encode(
        message.sendGroupMsgReq,
        writer.uint32(1618).fork()
      ).ldelim();
    }
    if (message.sendMsgReq !== undefined) {
      SendMsgReq.encode(
        message.sendMsgReq,
        writer.uint32(1626).fork()
      ).ldelim();
    }
    if (message.deleteMsgReq !== undefined) {
      DeleteMsgReq.encode(
        message.deleteMsgReq,
        writer.uint32(1634).fork()
      ).ldelim();
    }
    if (message.getMsgReq !== undefined) {
      GetMsgReq.encode(message.getMsgReq, writer.uint32(1642).fork()).ldelim();
    }
    if (message.getForwardMsgReq !== undefined) {
      GetForwardMsgReq.encode(
        message.getForwardMsgReq,
        writer.uint32(1650).fork()
      ).ldelim();
    }
    if (message.sendLikeReq !== undefined) {
      SendLikeReq.encode(
        message.sendLikeReq,
        writer.uint32(1658).fork()
      ).ldelim();
    }
    if (message.setGroupKickReq !== undefined) {
      SetGroupKickReq.encode(
        message.setGroupKickReq,
        writer.uint32(1666).fork()
      ).ldelim();
    }
    if (message.setGroupBanReq !== undefined) {
      SetGroupBanReq.encode(
        message.setGroupBanReq,
        writer.uint32(1674).fork()
      ).ldelim();
    }
    if (message.setGroupAnonymousBanReq !== undefined) {
      SetGroupAnonymousBanReq.encode(
        message.setGroupAnonymousBanReq,
        writer.uint32(1682).fork()
      ).ldelim();
    }
    if (message.setGroupWholeBanReq !== undefined) {
      SetGroupWholeBanReq.encode(
        message.setGroupWholeBanReq,
        writer.uint32(1690).fork()
      ).ldelim();
    }
    if (message.setGroupAdminReq !== undefined) {
      SetGroupAdminReq.encode(
        message.setGroupAdminReq,
        writer.uint32(1698).fork()
      ).ldelim();
    }
    if (message.setGroupAnonymousReq !== undefined) {
      SetGroupAnonymousReq.encode(
        message.setGroupAnonymousReq,
        writer.uint32(1706).fork()
      ).ldelim();
    }
    if (message.setGroupCardReq !== undefined) {
      SetGroupCardReq.encode(
        message.setGroupCardReq,
        writer.uint32(1714).fork()
      ).ldelim();
    }
    if (message.setGroupNameReq !== undefined) {
      SetGroupNameReq.encode(
        message.setGroupNameReq,
        writer.uint32(1722).fork()
      ).ldelim();
    }
    if (message.setGroupLeaveReq !== undefined) {
      SetGroupLeaveReq.encode(
        message.setGroupLeaveReq,
        writer.uint32(1730).fork()
      ).ldelim();
    }
    if (message.setGroupSpecialTitleReq !== undefined) {
      SetGroupSpecialTitleReq.encode(
        message.setGroupSpecialTitleReq,
        writer.uint32(1738).fork()
      ).ldelim();
    }
    if (message.setFriendAddRequestReq !== undefined) {
      SetFriendAddRequestReq.encode(
        message.setFriendAddRequestReq,
        writer.uint32(1746).fork()
      ).ldelim();
    }
    if (message.setGroupAddRequestReq !== undefined) {
      SetGroupAddRequestReq.encode(
        message.setGroupAddRequestReq,
        writer.uint32(1754).fork()
      ).ldelim();
    }
    if (message.getLoginInfoReq !== undefined) {
      GetLoginInfoReq.encode(
        message.getLoginInfoReq,
        writer.uint32(1762).fork()
      ).ldelim();
    }
    if (message.getStrangerInfoReq !== undefined) {
      GetStrangerInfoReq.encode(
        message.getStrangerInfoReq,
        writer.uint32(1770).fork()
      ).ldelim();
    }
    if (message.getFriendListReq !== undefined) {
      GetFriendListReq.encode(
        message.getFriendListReq,
        writer.uint32(1778).fork()
      ).ldelim();
    }
    if (message.getGroupInfoReq !== undefined) {
      GetGroupInfoReq.encode(
        message.getGroupInfoReq,
        writer.uint32(1786).fork()
      ).ldelim();
    }
    if (message.getGroupListReq !== undefined) {
      GetGroupListReq.encode(
        message.getGroupListReq,
        writer.uint32(1794).fork()
      ).ldelim();
    }
    if (message.getGroupMemberInfoReq !== undefined) {
      GetGroupMemberInfoReq.encode(
        message.getGroupMemberInfoReq,
        writer.uint32(1802).fork()
      ).ldelim();
    }
    if (message.getGroupMemberListReq !== undefined) {
      GetGroupMemberListReq.encode(
        message.getGroupMemberListReq,
        writer.uint32(1810).fork()
      ).ldelim();
    }
    if (message.getGroupHonorInfoReq !== undefined) {
      GetGroupHonorInfoReq.encode(
        message.getGroupHonorInfoReq,
        writer.uint32(1818).fork()
      ).ldelim();
    }
    if (message.getCookiesReq !== undefined) {
      GetCookiesReq.encode(
        message.getCookiesReq,
        writer.uint32(1826).fork()
      ).ldelim();
    }
    if (message.getCsrfTokenReq !== undefined) {
      GetCsrfTokenReq.encode(
        message.getCsrfTokenReq,
        writer.uint32(1834).fork()
      ).ldelim();
    }
    if (message.getCredentialsReq !== undefined) {
      GetCredentialsReq.encode(
        message.getCredentialsReq,
        writer.uint32(1842).fork()
      ).ldelim();
    }
    if (message.getRecordReq !== undefined) {
      GetRecordReq.encode(
        message.getRecordReq,
        writer.uint32(1850).fork()
      ).ldelim();
    }
    if (message.getImageReq !== undefined) {
      GetImageReq.encode(
        message.getImageReq,
        writer.uint32(1858).fork()
      ).ldelim();
    }
    if (message.canSendImageReq !== undefined) {
      CanSendImageReq.encode(
        message.canSendImageReq,
        writer.uint32(1866).fork()
      ).ldelim();
    }
    if (message.canSendRecordReq !== undefined) {
      CanSendRecordReq.encode(
        message.canSendRecordReq,
        writer.uint32(1874).fork()
      ).ldelim();
    }
    if (message.getStatusReq !== undefined) {
      GetStatusReq.encode(
        message.getStatusReq,
        writer.uint32(1882).fork()
      ).ldelim();
    }
    if (message.getVersionInfoReq !== undefined) {
      GetVersionInfoReq.encode(
        message.getVersionInfoReq,
        writer.uint32(1890).fork()
      ).ldelim();
    }
    if (message.setRestartReq !== undefined) {
      SetRestartReq.encode(
        message.setRestartReq,
        writer.uint32(1898).fork()
      ).ldelim();
    }
    if (message.cleanCacheReq !== undefined) {
      CleanCacheReq.encode(
        message.cleanCacheReq,
        writer.uint32(1906).fork()
      ).ldelim();
    }
    if (message.setGroupSignInReq !== undefined) {
      SetGroupSignInReq.encode(
        message.setGroupSignInReq,
        writer.uint32(1914).fork()
      ).ldelim();
    }
    if (message.sendMusicReq !== undefined) {
      SendMusicReq.encode(
        message.sendMusicReq,
        writer.uint32(1922).fork()
      ).ldelim();
    }
    if (message.sendGroupPokeReq !== undefined) {
      SendGroupPokeReq.encode(
        message.sendGroupPokeReq,
        writer.uint32(1930).fork()
      ).ldelim();
    }
    if (message.sendFriendPokeReq !== undefined) {
      SendFriendPokeReq.encode(
        message.sendFriendPokeReq,
        writer.uint32(1938).fork()
      ).ldelim();
    }
    if (message.sendChannelMsgReq !== undefined) {
      SendChannelMsgReq.encode(
        message.sendChannelMsgReq,
        writer.uint32(1946).fork()
      ).ldelim();
    }
    if (message.sendPrivateMsgResp !== undefined) {
      SendPrivateMsgResp.encode(
        message.sendPrivateMsgResp,
        writer.uint32(2410).fork()
      ).ldelim();
    }
    if (message.sendGroupMsgResp !== undefined) {
      SendGroupMsgResp.encode(
        message.sendGroupMsgResp,
        writer.uint32(2418).fork()
      ).ldelim();
    }
    if (message.sendMsgResp !== undefined) {
      SendMsgResp.encode(
        message.sendMsgResp,
        writer.uint32(2426).fork()
      ).ldelim();
    }
    if (message.deleteMsgResp !== undefined) {
      DeleteMsgResp.encode(
        message.deleteMsgResp,
        writer.uint32(2434).fork()
      ).ldelim();
    }
    if (message.getMsgResp !== undefined) {
      GetMsgResp.encode(
        message.getMsgResp,
        writer.uint32(2442).fork()
      ).ldelim();
    }
    if (message.getForwardMsgResp !== undefined) {
      GetForwardMsgResp.encode(
        message.getForwardMsgResp,
        writer.uint32(2450).fork()
      ).ldelim();
    }
    if (message.sendLikeResp !== undefined) {
      SendLikeResp.encode(
        message.sendLikeResp,
        writer.uint32(2458).fork()
      ).ldelim();
    }
    if (message.setGroupKickResp !== undefined) {
      SetGroupKickResp.encode(
        message.setGroupKickResp,
        writer.uint32(2466).fork()
      ).ldelim();
    }
    if (message.setGroupBanResp !== undefined) {
      SetGroupBanResp.encode(
        message.setGroupBanResp,
        writer.uint32(2474).fork()
      ).ldelim();
    }
    if (message.setGroupAnonymousBanResp !== undefined) {
      SetGroupAnonymousBanResp.encode(
        message.setGroupAnonymousBanResp,
        writer.uint32(2482).fork()
      ).ldelim();
    }
    if (message.setGroupWholeBanResp !== undefined) {
      SetGroupWholeBanResp.encode(
        message.setGroupWholeBanResp,
        writer.uint32(2490).fork()
      ).ldelim();
    }
    if (message.setGroupAdminResp !== undefined) {
      SetGroupAdminResp.encode(
        message.setGroupAdminResp,
        writer.uint32(2498).fork()
      ).ldelim();
    }
    if (message.setGroupAnonymousResp !== undefined) {
      SetGroupAnonymousResp.encode(
        message.setGroupAnonymousResp,
        writer.uint32(2506).fork()
      ).ldelim();
    }
    if (message.setGroupCardResp !== undefined) {
      SetGroupCardResp.encode(
        message.setGroupCardResp,
        writer.uint32(2514).fork()
      ).ldelim();
    }
    if (message.setGroupNameResp !== undefined) {
      SetGroupNameResp.encode(
        message.setGroupNameResp,
        writer.uint32(2522).fork()
      ).ldelim();
    }
    if (message.setGroupLeaveResp !== undefined) {
      SetGroupLeaveResp.encode(
        message.setGroupLeaveResp,
        writer.uint32(2530).fork()
      ).ldelim();
    }
    if (message.setGroupSpecialTitleResp !== undefined) {
      SetGroupSpecialTitleResp.encode(
        message.setGroupSpecialTitleResp,
        writer.uint32(2538).fork()
      ).ldelim();
    }
    if (message.setFriendAddRequestResp !== undefined) {
      SetFriendAddRequestResp.encode(
        message.setFriendAddRequestResp,
        writer.uint32(2546).fork()
      ).ldelim();
    }
    if (message.setGroupAddRequestResp !== undefined) {
      SetGroupAddRequestResp.encode(
        message.setGroupAddRequestResp,
        writer.uint32(2554).fork()
      ).ldelim();
    }
    if (message.getLoginInfoResp !== undefined) {
      GetLoginInfoResp.encode(
        message.getLoginInfoResp,
        writer.uint32(2562).fork()
      ).ldelim();
    }
    if (message.getStrangerInfoResp !== undefined) {
      GetStrangerInfoResp.encode(
        message.getStrangerInfoResp,
        writer.uint32(2570).fork()
      ).ldelim();
    }
    if (message.getFriendListResp !== undefined) {
      GetFriendListResp.encode(
        message.getFriendListResp,
        writer.uint32(2578).fork()
      ).ldelim();
    }
    if (message.getGroupInfoResp !== undefined) {
      GetGroupInfoResp.encode(
        message.getGroupInfoResp,
        writer.uint32(2586).fork()
      ).ldelim();
    }
    if (message.getGroupListResp !== undefined) {
      GetGroupListResp.encode(
        message.getGroupListResp,
        writer.uint32(2594).fork()
      ).ldelim();
    }
    if (message.getGroupMemberInfoResp !== undefined) {
      GetGroupMemberInfoResp.encode(
        message.getGroupMemberInfoResp,
        writer.uint32(2602).fork()
      ).ldelim();
    }
    if (message.getGroupMemberListResp !== undefined) {
      GetGroupMemberListResp.encode(
        message.getGroupMemberListResp,
        writer.uint32(2610).fork()
      ).ldelim();
    }
    if (message.getGroupHonorInfoResp !== undefined) {
      GetGroupHonorInfoResp.encode(
        message.getGroupHonorInfoResp,
        writer.uint32(2618).fork()
      ).ldelim();
    }
    if (message.getCookiesResp !== undefined) {
      GetCookiesResp.encode(
        message.getCookiesResp,
        writer.uint32(2626).fork()
      ).ldelim();
    }
    if (message.getCsrfTokenResp !== undefined) {
      GetCsrfTokenResp.encode(
        message.getCsrfTokenResp,
        writer.uint32(2634).fork()
      ).ldelim();
    }
    if (message.getCredentialsResp !== undefined) {
      GetCredentialsResp.encode(
        message.getCredentialsResp,
        writer.uint32(2642).fork()
      ).ldelim();
    }
    if (message.getRecordResp !== undefined) {
      GetRecordResp.encode(
        message.getRecordResp,
        writer.uint32(2650).fork()
      ).ldelim();
    }
    if (message.getImageResp !== undefined) {
      GetImageResp.encode(
        message.getImageResp,
        writer.uint32(2658).fork()
      ).ldelim();
    }
    if (message.canSendImageResp !== undefined) {
      CanSendImageResp.encode(
        message.canSendImageResp,
        writer.uint32(2666).fork()
      ).ldelim();
    }
    if (message.canSendRecordResp !== undefined) {
      CanSendRecordResp.encode(
        message.canSendRecordResp,
        writer.uint32(2674).fork()
      ).ldelim();
    }
    if (message.getStatusResp !== undefined) {
      GetStatusResp.encode(
        message.getStatusResp,
        writer.uint32(2682).fork()
      ).ldelim();
    }
    if (message.getVersionInfoResp !== undefined) {
      GetVersionInfoResp.encode(
        message.getVersionInfoResp,
        writer.uint32(2690).fork()
      ).ldelim();
    }
    if (message.setRestartResp !== undefined) {
      SetRestartResp.encode(
        message.setRestartResp,
        writer.uint32(2698).fork()
      ).ldelim();
    }
    if (message.cleanCacheResp !== undefined) {
      CleanCacheResp.encode(
        message.cleanCacheResp,
        writer.uint32(2706).fork()
      ).ldelim();
    }
    if (message.setGroupSignInResp !== undefined) {
      SetGroupSignInResp.encode(
        message.setGroupSignInResp,
        writer.uint32(2714).fork()
      ).ldelim();
    }
    if (message.sendMusicResp !== undefined) {
      SendMusicResp.encode(
        message.sendMusicResp,
        writer.uint32(2722).fork()
      ).ldelim();
    }
    if (message.sendGroupPokeResp !== undefined) {
      SendGroupPokeResp.encode(
        message.sendGroupPokeResp,
        writer.uint32(2730).fork()
      ).ldelim();
    }
    if (message.sendFriendPokeResp !== undefined) {
      SendFriendPokeResp.encode(
        message.sendFriendPokeResp,
        writer.uint32(2738).fork()
      ).ldelim();
    }
    if (message.sendChannelMsgResp !== undefined) {
      SendChannelMsgResp.encode(
        message.sendChannelMsgResp,
        writer.uint32(2746).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Frame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.botId = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.frameType = reader.int32() as any;
          break;
        case 3:
          message.echo = reader.string();
          break;
        case 4:
          message.ok = reader.bool();
          break;
        case 100:
          const entry100 = Frame_ExtraEntry.decode(reader, reader.uint32());
          if (entry100.value !== undefined) {
            message.extra[entry100.key] = entry100.value;
          }
          break;
        case 101:
          message.privateMessageEvent = PrivateMessageEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 102:
          message.groupMessageEvent = GroupMessageEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.groupUploadNoticeEvent = GroupUploadNoticeEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 104:
          message.groupAdminNoticeEvent = GroupAdminNoticeEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 105:
          message.groupDecreaseNoticeEvent = GroupDecreaseNoticeEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 106:
          message.groupIncreaseNoticeEvent = GroupIncreaseNoticeEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 107:
          message.groupBanNoticeEvent = GroupBanNoticeEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 108:
          message.friendAddNoticeEvent = FriendAddNoticeEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 109:
          message.groupRecallNoticeEvent = GroupRecallNoticeEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 110:
          message.friendRecallNoticeEvent = FriendRecallNoticeEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 111:
          message.friendRequestEvent = FriendRequestEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 112:
          message.groupRequestEvent = GroupRequestEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 113:
          message.groupTempMessageEvent = GroupTempMessageEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 114:
          message.groupNotifyEvent = GroupNotifyEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 115:
          message.channelMessageEvent = ChannelMessageEvent.decode(
            reader,
            reader.uint32()
          );
          break;
        case 201:
          message.sendPrivateMsgReq = SendPrivateMsgReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 202:
          message.sendGroupMsgReq = SendGroupMsgReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 203:
          message.sendMsgReq = SendMsgReq.decode(reader, reader.uint32());
          break;
        case 204:
          message.deleteMsgReq = DeleteMsgReq.decode(reader, reader.uint32());
          break;
        case 205:
          message.getMsgReq = GetMsgReq.decode(reader, reader.uint32());
          break;
        case 206:
          message.getForwardMsgReq = GetForwardMsgReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 207:
          message.sendLikeReq = SendLikeReq.decode(reader, reader.uint32());
          break;
        case 208:
          message.setGroupKickReq = SetGroupKickReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 209:
          message.setGroupBanReq = SetGroupBanReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 210:
          message.setGroupAnonymousBanReq = SetGroupAnonymousBanReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 211:
          message.setGroupWholeBanReq = SetGroupWholeBanReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 212:
          message.setGroupAdminReq = SetGroupAdminReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 213:
          message.setGroupAnonymousReq = SetGroupAnonymousReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 214:
          message.setGroupCardReq = SetGroupCardReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 215:
          message.setGroupNameReq = SetGroupNameReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 216:
          message.setGroupLeaveReq = SetGroupLeaveReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 217:
          message.setGroupSpecialTitleReq = SetGroupSpecialTitleReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 218:
          message.setFriendAddRequestReq = SetFriendAddRequestReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 219:
          message.setGroupAddRequestReq = SetGroupAddRequestReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 220:
          message.getLoginInfoReq = GetLoginInfoReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 221:
          message.getStrangerInfoReq = GetStrangerInfoReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 222:
          message.getFriendListReq = GetFriendListReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 223:
          message.getGroupInfoReq = GetGroupInfoReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 224:
          message.getGroupListReq = GetGroupListReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 225:
          message.getGroupMemberInfoReq = GetGroupMemberInfoReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 226:
          message.getGroupMemberListReq = GetGroupMemberListReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 227:
          message.getGroupHonorInfoReq = GetGroupHonorInfoReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 228:
          message.getCookiesReq = GetCookiesReq.decode(reader, reader.uint32());
          break;
        case 229:
          message.getCsrfTokenReq = GetCsrfTokenReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 230:
          message.getCredentialsReq = GetCredentialsReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 231:
          message.getRecordReq = GetRecordReq.decode(reader, reader.uint32());
          break;
        case 232:
          message.getImageReq = GetImageReq.decode(reader, reader.uint32());
          break;
        case 233:
          message.canSendImageReq = CanSendImageReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 234:
          message.canSendRecordReq = CanSendRecordReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 235:
          message.getStatusReq = GetStatusReq.decode(reader, reader.uint32());
          break;
        case 236:
          message.getVersionInfoReq = GetVersionInfoReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 237:
          message.setRestartReq = SetRestartReq.decode(reader, reader.uint32());
          break;
        case 238:
          message.cleanCacheReq = CleanCacheReq.decode(reader, reader.uint32());
          break;
        case 239:
          message.setGroupSignInReq = SetGroupSignInReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 240:
          message.sendMusicReq = SendMusicReq.decode(reader, reader.uint32());
          break;
        case 241:
          message.sendGroupPokeReq = SendGroupPokeReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 242:
          message.sendFriendPokeReq = SendFriendPokeReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 243:
          message.sendChannelMsgReq = SendChannelMsgReq.decode(
            reader,
            reader.uint32()
          );
          break;
        case 301:
          message.sendPrivateMsgResp = SendPrivateMsgResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 302:
          message.sendGroupMsgResp = SendGroupMsgResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 303:
          message.sendMsgResp = SendMsgResp.decode(reader, reader.uint32());
          break;
        case 304:
          message.deleteMsgResp = DeleteMsgResp.decode(reader, reader.uint32());
          break;
        case 305:
          message.getMsgResp = GetMsgResp.decode(reader, reader.uint32());
          break;
        case 306:
          message.getForwardMsgResp = GetForwardMsgResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 307:
          message.sendLikeResp = SendLikeResp.decode(reader, reader.uint32());
          break;
        case 308:
          message.setGroupKickResp = SetGroupKickResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 309:
          message.setGroupBanResp = SetGroupBanResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 310:
          message.setGroupAnonymousBanResp = SetGroupAnonymousBanResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 311:
          message.setGroupWholeBanResp = SetGroupWholeBanResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 312:
          message.setGroupAdminResp = SetGroupAdminResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 313:
          message.setGroupAnonymousResp = SetGroupAnonymousResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 314:
          message.setGroupCardResp = SetGroupCardResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 315:
          message.setGroupNameResp = SetGroupNameResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 316:
          message.setGroupLeaveResp = SetGroupLeaveResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 317:
          message.setGroupSpecialTitleResp = SetGroupSpecialTitleResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 318:
          message.setFriendAddRequestResp = SetFriendAddRequestResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 319:
          message.setGroupAddRequestResp = SetGroupAddRequestResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 320:
          message.getLoginInfoResp = GetLoginInfoResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 321:
          message.getStrangerInfoResp = GetStrangerInfoResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 322:
          message.getFriendListResp = GetFriendListResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 323:
          message.getGroupInfoResp = GetGroupInfoResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 324:
          message.getGroupListResp = GetGroupListResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 325:
          message.getGroupMemberInfoResp = GetGroupMemberInfoResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 326:
          message.getGroupMemberListResp = GetGroupMemberListResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 327:
          message.getGroupHonorInfoResp = GetGroupHonorInfoResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 328:
          message.getCookiesResp = GetCookiesResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 329:
          message.getCsrfTokenResp = GetCsrfTokenResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 330:
          message.getCredentialsResp = GetCredentialsResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 331:
          message.getRecordResp = GetRecordResp.decode(reader, reader.uint32());
          break;
        case 332:
          message.getImageResp = GetImageResp.decode(reader, reader.uint32());
          break;
        case 333:
          message.canSendImageResp = CanSendImageResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 334:
          message.canSendRecordResp = CanSendRecordResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 335:
          message.getStatusResp = GetStatusResp.decode(reader, reader.uint32());
          break;
        case 336:
          message.getVersionInfoResp = GetVersionInfoResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 337:
          message.setRestartResp = SetRestartResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 338:
          message.cleanCacheResp = CleanCacheResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 339:
          message.setGroupSignInResp = SetGroupSignInResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 340:
          message.sendMusicResp = SendMusicResp.decode(reader, reader.uint32());
          break;
        case 341:
          message.sendGroupPokeResp = SendGroupPokeResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 342:
          message.sendFriendPokeResp = SendFriendPokeResp.decode(
            reader,
            reader.uint32()
          );
          break;
        case 343:
          message.sendChannelMsgResp = SendChannelMsgResp.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Frame {
    return {
      botId: isSet(object.botId) ? Number(object.botId) : 0,
      frameType: isSet(object.frameType)
        ? frame_FrameTypeFromJSON(object.frameType)
        : 0,
      echo: isSet(object.echo) ? String(object.echo) : "",
      ok: isSet(object.ok) ? Boolean(object.ok) : false,
      extra: isObject(object.extra)
        ? Object.entries(object.extra).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
              acc[key] = String(value);
              return acc;
            },
            {}
          )
        : {},
      privateMessageEvent: isSet(object.privateMessageEvent)
        ? PrivateMessageEvent.fromJSON(object.privateMessageEvent)
        : undefined,
      groupMessageEvent: isSet(object.groupMessageEvent)
        ? GroupMessageEvent.fromJSON(object.groupMessageEvent)
        : undefined,
      groupUploadNoticeEvent: isSet(object.groupUploadNoticeEvent)
        ? GroupUploadNoticeEvent.fromJSON(object.groupUploadNoticeEvent)
        : undefined,
      groupAdminNoticeEvent: isSet(object.groupAdminNoticeEvent)
        ? GroupAdminNoticeEvent.fromJSON(object.groupAdminNoticeEvent)
        : undefined,
      groupDecreaseNoticeEvent: isSet(object.groupDecreaseNoticeEvent)
        ? GroupDecreaseNoticeEvent.fromJSON(object.groupDecreaseNoticeEvent)
        : undefined,
      groupIncreaseNoticeEvent: isSet(object.groupIncreaseNoticeEvent)
        ? GroupIncreaseNoticeEvent.fromJSON(object.groupIncreaseNoticeEvent)
        : undefined,
      groupBanNoticeEvent: isSet(object.groupBanNoticeEvent)
        ? GroupBanNoticeEvent.fromJSON(object.groupBanNoticeEvent)
        : undefined,
      friendAddNoticeEvent: isSet(object.friendAddNoticeEvent)
        ? FriendAddNoticeEvent.fromJSON(object.friendAddNoticeEvent)
        : undefined,
      groupRecallNoticeEvent: isSet(object.groupRecallNoticeEvent)
        ? GroupRecallNoticeEvent.fromJSON(object.groupRecallNoticeEvent)
        : undefined,
      friendRecallNoticeEvent: isSet(object.friendRecallNoticeEvent)
        ? FriendRecallNoticeEvent.fromJSON(object.friendRecallNoticeEvent)
        : undefined,
      friendRequestEvent: isSet(object.friendRequestEvent)
        ? FriendRequestEvent.fromJSON(object.friendRequestEvent)
        : undefined,
      groupRequestEvent: isSet(object.groupRequestEvent)
        ? GroupRequestEvent.fromJSON(object.groupRequestEvent)
        : undefined,
      groupTempMessageEvent: isSet(object.groupTempMessageEvent)
        ? GroupTempMessageEvent.fromJSON(object.groupTempMessageEvent)
        : undefined,
      groupNotifyEvent: isSet(object.groupNotifyEvent)
        ? GroupNotifyEvent.fromJSON(object.groupNotifyEvent)
        : undefined,
      channelMessageEvent: isSet(object.channelMessageEvent)
        ? ChannelMessageEvent.fromJSON(object.channelMessageEvent)
        : undefined,
      sendPrivateMsgReq: isSet(object.sendPrivateMsgReq)
        ? SendPrivateMsgReq.fromJSON(object.sendPrivateMsgReq)
        : undefined,
      sendGroupMsgReq: isSet(object.sendGroupMsgReq)
        ? SendGroupMsgReq.fromJSON(object.sendGroupMsgReq)
        : undefined,
      sendMsgReq: isSet(object.sendMsgReq)
        ? SendMsgReq.fromJSON(object.sendMsgReq)
        : undefined,
      deleteMsgReq: isSet(object.deleteMsgReq)
        ? DeleteMsgReq.fromJSON(object.deleteMsgReq)
        : undefined,
      getMsgReq: isSet(object.getMsgReq)
        ? GetMsgReq.fromJSON(object.getMsgReq)
        : undefined,
      getForwardMsgReq: isSet(object.getForwardMsgReq)
        ? GetForwardMsgReq.fromJSON(object.getForwardMsgReq)
        : undefined,
      sendLikeReq: isSet(object.sendLikeReq)
        ? SendLikeReq.fromJSON(object.sendLikeReq)
        : undefined,
      setGroupKickReq: isSet(object.setGroupKickReq)
        ? SetGroupKickReq.fromJSON(object.setGroupKickReq)
        : undefined,
      setGroupBanReq: isSet(object.setGroupBanReq)
        ? SetGroupBanReq.fromJSON(object.setGroupBanReq)
        : undefined,
      setGroupAnonymousBanReq: isSet(object.setGroupAnonymousBanReq)
        ? SetGroupAnonymousBanReq.fromJSON(object.setGroupAnonymousBanReq)
        : undefined,
      setGroupWholeBanReq: isSet(object.setGroupWholeBanReq)
        ? SetGroupWholeBanReq.fromJSON(object.setGroupWholeBanReq)
        : undefined,
      setGroupAdminReq: isSet(object.setGroupAdminReq)
        ? SetGroupAdminReq.fromJSON(object.setGroupAdminReq)
        : undefined,
      setGroupAnonymousReq: isSet(object.setGroupAnonymousReq)
        ? SetGroupAnonymousReq.fromJSON(object.setGroupAnonymousReq)
        : undefined,
      setGroupCardReq: isSet(object.setGroupCardReq)
        ? SetGroupCardReq.fromJSON(object.setGroupCardReq)
        : undefined,
      setGroupNameReq: isSet(object.setGroupNameReq)
        ? SetGroupNameReq.fromJSON(object.setGroupNameReq)
        : undefined,
      setGroupLeaveReq: isSet(object.setGroupLeaveReq)
        ? SetGroupLeaveReq.fromJSON(object.setGroupLeaveReq)
        : undefined,
      setGroupSpecialTitleReq: isSet(object.setGroupSpecialTitleReq)
        ? SetGroupSpecialTitleReq.fromJSON(object.setGroupSpecialTitleReq)
        : undefined,
      setFriendAddRequestReq: isSet(object.setFriendAddRequestReq)
        ? SetFriendAddRequestReq.fromJSON(object.setFriendAddRequestReq)
        : undefined,
      setGroupAddRequestReq: isSet(object.setGroupAddRequestReq)
        ? SetGroupAddRequestReq.fromJSON(object.setGroupAddRequestReq)
        : undefined,
      getLoginInfoReq: isSet(object.getLoginInfoReq)
        ? GetLoginInfoReq.fromJSON(object.getLoginInfoReq)
        : undefined,
      getStrangerInfoReq: isSet(object.getStrangerInfoReq)
        ? GetStrangerInfoReq.fromJSON(object.getStrangerInfoReq)
        : undefined,
      getFriendListReq: isSet(object.getFriendListReq)
        ? GetFriendListReq.fromJSON(object.getFriendListReq)
        : undefined,
      getGroupInfoReq: isSet(object.getGroupInfoReq)
        ? GetGroupInfoReq.fromJSON(object.getGroupInfoReq)
        : undefined,
      getGroupListReq: isSet(object.getGroupListReq)
        ? GetGroupListReq.fromJSON(object.getGroupListReq)
        : undefined,
      getGroupMemberInfoReq: isSet(object.getGroupMemberInfoReq)
        ? GetGroupMemberInfoReq.fromJSON(object.getGroupMemberInfoReq)
        : undefined,
      getGroupMemberListReq: isSet(object.getGroupMemberListReq)
        ? GetGroupMemberListReq.fromJSON(object.getGroupMemberListReq)
        : undefined,
      getGroupHonorInfoReq: isSet(object.getGroupHonorInfoReq)
        ? GetGroupHonorInfoReq.fromJSON(object.getGroupHonorInfoReq)
        : undefined,
      getCookiesReq: isSet(object.getCookiesReq)
        ? GetCookiesReq.fromJSON(object.getCookiesReq)
        : undefined,
      getCsrfTokenReq: isSet(object.getCsrfTokenReq)
        ? GetCsrfTokenReq.fromJSON(object.getCsrfTokenReq)
        : undefined,
      getCredentialsReq: isSet(object.getCredentialsReq)
        ? GetCredentialsReq.fromJSON(object.getCredentialsReq)
        : undefined,
      getRecordReq: isSet(object.getRecordReq)
        ? GetRecordReq.fromJSON(object.getRecordReq)
        : undefined,
      getImageReq: isSet(object.getImageReq)
        ? GetImageReq.fromJSON(object.getImageReq)
        : undefined,
      canSendImageReq: isSet(object.canSendImageReq)
        ? CanSendImageReq.fromJSON(object.canSendImageReq)
        : undefined,
      canSendRecordReq: isSet(object.canSendRecordReq)
        ? CanSendRecordReq.fromJSON(object.canSendRecordReq)
        : undefined,
      getStatusReq: isSet(object.getStatusReq)
        ? GetStatusReq.fromJSON(object.getStatusReq)
        : undefined,
      getVersionInfoReq: isSet(object.getVersionInfoReq)
        ? GetVersionInfoReq.fromJSON(object.getVersionInfoReq)
        : undefined,
      setRestartReq: isSet(object.setRestartReq)
        ? SetRestartReq.fromJSON(object.setRestartReq)
        : undefined,
      cleanCacheReq: isSet(object.cleanCacheReq)
        ? CleanCacheReq.fromJSON(object.cleanCacheReq)
        : undefined,
      setGroupSignInReq: isSet(object.setGroupSignInReq)
        ? SetGroupSignInReq.fromJSON(object.setGroupSignInReq)
        : undefined,
      sendMusicReq: isSet(object.sendMusicReq)
        ? SendMusicReq.fromJSON(object.sendMusicReq)
        : undefined,
      sendGroupPokeReq: isSet(object.sendGroupPokeReq)
        ? SendGroupPokeReq.fromJSON(object.sendGroupPokeReq)
        : undefined,
      sendFriendPokeReq: isSet(object.sendFriendPokeReq)
        ? SendFriendPokeReq.fromJSON(object.sendFriendPokeReq)
        : undefined,
      sendChannelMsgReq: isSet(object.sendChannelMsgReq)
        ? SendChannelMsgReq.fromJSON(object.sendChannelMsgReq)
        : undefined,
      sendPrivateMsgResp: isSet(object.sendPrivateMsgResp)
        ? SendPrivateMsgResp.fromJSON(object.sendPrivateMsgResp)
        : undefined,
      sendGroupMsgResp: isSet(object.sendGroupMsgResp)
        ? SendGroupMsgResp.fromJSON(object.sendGroupMsgResp)
        : undefined,
      sendMsgResp: isSet(object.sendMsgResp)
        ? SendMsgResp.fromJSON(object.sendMsgResp)
        : undefined,
      deleteMsgResp: isSet(object.deleteMsgResp)
        ? DeleteMsgResp.fromJSON(object.deleteMsgResp)
        : undefined,
      getMsgResp: isSet(object.getMsgResp)
        ? GetMsgResp.fromJSON(object.getMsgResp)
        : undefined,
      getForwardMsgResp: isSet(object.getForwardMsgResp)
        ? GetForwardMsgResp.fromJSON(object.getForwardMsgResp)
        : undefined,
      sendLikeResp: isSet(object.sendLikeResp)
        ? SendLikeResp.fromJSON(object.sendLikeResp)
        : undefined,
      setGroupKickResp: isSet(object.setGroupKickResp)
        ? SetGroupKickResp.fromJSON(object.setGroupKickResp)
        : undefined,
      setGroupBanResp: isSet(object.setGroupBanResp)
        ? SetGroupBanResp.fromJSON(object.setGroupBanResp)
        : undefined,
      setGroupAnonymousBanResp: isSet(object.setGroupAnonymousBanResp)
        ? SetGroupAnonymousBanResp.fromJSON(object.setGroupAnonymousBanResp)
        : undefined,
      setGroupWholeBanResp: isSet(object.setGroupWholeBanResp)
        ? SetGroupWholeBanResp.fromJSON(object.setGroupWholeBanResp)
        : undefined,
      setGroupAdminResp: isSet(object.setGroupAdminResp)
        ? SetGroupAdminResp.fromJSON(object.setGroupAdminResp)
        : undefined,
      setGroupAnonymousResp: isSet(object.setGroupAnonymousResp)
        ? SetGroupAnonymousResp.fromJSON(object.setGroupAnonymousResp)
        : undefined,
      setGroupCardResp: isSet(object.setGroupCardResp)
        ? SetGroupCardResp.fromJSON(object.setGroupCardResp)
        : undefined,
      setGroupNameResp: isSet(object.setGroupNameResp)
        ? SetGroupNameResp.fromJSON(object.setGroupNameResp)
        : undefined,
      setGroupLeaveResp: isSet(object.setGroupLeaveResp)
        ? SetGroupLeaveResp.fromJSON(object.setGroupLeaveResp)
        : undefined,
      setGroupSpecialTitleResp: isSet(object.setGroupSpecialTitleResp)
        ? SetGroupSpecialTitleResp.fromJSON(object.setGroupSpecialTitleResp)
        : undefined,
      setFriendAddRequestResp: isSet(object.setFriendAddRequestResp)
        ? SetFriendAddRequestResp.fromJSON(object.setFriendAddRequestResp)
        : undefined,
      setGroupAddRequestResp: isSet(object.setGroupAddRequestResp)
        ? SetGroupAddRequestResp.fromJSON(object.setGroupAddRequestResp)
        : undefined,
      getLoginInfoResp: isSet(object.getLoginInfoResp)
        ? GetLoginInfoResp.fromJSON(object.getLoginInfoResp)
        : undefined,
      getStrangerInfoResp: isSet(object.getStrangerInfoResp)
        ? GetStrangerInfoResp.fromJSON(object.getStrangerInfoResp)
        : undefined,
      getFriendListResp: isSet(object.getFriendListResp)
        ? GetFriendListResp.fromJSON(object.getFriendListResp)
        : undefined,
      getGroupInfoResp: isSet(object.getGroupInfoResp)
        ? GetGroupInfoResp.fromJSON(object.getGroupInfoResp)
        : undefined,
      getGroupListResp: isSet(object.getGroupListResp)
        ? GetGroupListResp.fromJSON(object.getGroupListResp)
        : undefined,
      getGroupMemberInfoResp: isSet(object.getGroupMemberInfoResp)
        ? GetGroupMemberInfoResp.fromJSON(object.getGroupMemberInfoResp)
        : undefined,
      getGroupMemberListResp: isSet(object.getGroupMemberListResp)
        ? GetGroupMemberListResp.fromJSON(object.getGroupMemberListResp)
        : undefined,
      getGroupHonorInfoResp: isSet(object.getGroupHonorInfoResp)
        ? GetGroupHonorInfoResp.fromJSON(object.getGroupHonorInfoResp)
        : undefined,
      getCookiesResp: isSet(object.getCookiesResp)
        ? GetCookiesResp.fromJSON(object.getCookiesResp)
        : undefined,
      getCsrfTokenResp: isSet(object.getCsrfTokenResp)
        ? GetCsrfTokenResp.fromJSON(object.getCsrfTokenResp)
        : undefined,
      getCredentialsResp: isSet(object.getCredentialsResp)
        ? GetCredentialsResp.fromJSON(object.getCredentialsResp)
        : undefined,
      getRecordResp: isSet(object.getRecordResp)
        ? GetRecordResp.fromJSON(object.getRecordResp)
        : undefined,
      getImageResp: isSet(object.getImageResp)
        ? GetImageResp.fromJSON(object.getImageResp)
        : undefined,
      canSendImageResp: isSet(object.canSendImageResp)
        ? CanSendImageResp.fromJSON(object.canSendImageResp)
        : undefined,
      canSendRecordResp: isSet(object.canSendRecordResp)
        ? CanSendRecordResp.fromJSON(object.canSendRecordResp)
        : undefined,
      getStatusResp: isSet(object.getStatusResp)
        ? GetStatusResp.fromJSON(object.getStatusResp)
        : undefined,
      getVersionInfoResp: isSet(object.getVersionInfoResp)
        ? GetVersionInfoResp.fromJSON(object.getVersionInfoResp)
        : undefined,
      setRestartResp: isSet(object.setRestartResp)
        ? SetRestartResp.fromJSON(object.setRestartResp)
        : undefined,
      cleanCacheResp: isSet(object.cleanCacheResp)
        ? CleanCacheResp.fromJSON(object.cleanCacheResp)
        : undefined,
      setGroupSignInResp: isSet(object.setGroupSignInResp)
        ? SetGroupSignInResp.fromJSON(object.setGroupSignInResp)
        : undefined,
      sendMusicResp: isSet(object.sendMusicResp)
        ? SendMusicResp.fromJSON(object.sendMusicResp)
        : undefined,
      sendGroupPokeResp: isSet(object.sendGroupPokeResp)
        ? SendGroupPokeResp.fromJSON(object.sendGroupPokeResp)
        : undefined,
      sendFriendPokeResp: isSet(object.sendFriendPokeResp)
        ? SendFriendPokeResp.fromJSON(object.sendFriendPokeResp)
        : undefined,
      sendChannelMsgResp: isSet(object.sendChannelMsgResp)
        ? SendChannelMsgResp.fromJSON(object.sendChannelMsgResp)
        : undefined,
    };
  },

  toJSON(message: Frame): unknown {
    const obj: any = {};
    message.botId !== undefined && (obj.botId = Math.round(message.botId));
    message.frameType !== undefined &&
      (obj.frameType = frame_FrameTypeToJSON(message.frameType));
    message.echo !== undefined && (obj.echo = message.echo);
    message.ok !== undefined && (obj.ok = message.ok);
    obj.extra = {};
    if (message.extra) {
      Object.entries(message.extra).forEach(([k, v]) => {
        obj.extra[k] = v;
      });
    }
    message.privateMessageEvent !== undefined &&
      (obj.privateMessageEvent = message.privateMessageEvent
        ? PrivateMessageEvent.toJSON(message.privateMessageEvent)
        : undefined);
    message.groupMessageEvent !== undefined &&
      (obj.groupMessageEvent = message.groupMessageEvent
        ? GroupMessageEvent.toJSON(message.groupMessageEvent)
        : undefined);
    message.groupUploadNoticeEvent !== undefined &&
      (obj.groupUploadNoticeEvent = message.groupUploadNoticeEvent
        ? GroupUploadNoticeEvent.toJSON(message.groupUploadNoticeEvent)
        : undefined);
    message.groupAdminNoticeEvent !== undefined &&
      (obj.groupAdminNoticeEvent = message.groupAdminNoticeEvent
        ? GroupAdminNoticeEvent.toJSON(message.groupAdminNoticeEvent)
        : undefined);
    message.groupDecreaseNoticeEvent !== undefined &&
      (obj.groupDecreaseNoticeEvent = message.groupDecreaseNoticeEvent
        ? GroupDecreaseNoticeEvent.toJSON(message.groupDecreaseNoticeEvent)
        : undefined);
    message.groupIncreaseNoticeEvent !== undefined &&
      (obj.groupIncreaseNoticeEvent = message.groupIncreaseNoticeEvent
        ? GroupIncreaseNoticeEvent.toJSON(message.groupIncreaseNoticeEvent)
        : undefined);
    message.groupBanNoticeEvent !== undefined &&
      (obj.groupBanNoticeEvent = message.groupBanNoticeEvent
        ? GroupBanNoticeEvent.toJSON(message.groupBanNoticeEvent)
        : undefined);
    message.friendAddNoticeEvent !== undefined &&
      (obj.friendAddNoticeEvent = message.friendAddNoticeEvent
        ? FriendAddNoticeEvent.toJSON(message.friendAddNoticeEvent)
        : undefined);
    message.groupRecallNoticeEvent !== undefined &&
      (obj.groupRecallNoticeEvent = message.groupRecallNoticeEvent
        ? GroupRecallNoticeEvent.toJSON(message.groupRecallNoticeEvent)
        : undefined);
    message.friendRecallNoticeEvent !== undefined &&
      (obj.friendRecallNoticeEvent = message.friendRecallNoticeEvent
        ? FriendRecallNoticeEvent.toJSON(message.friendRecallNoticeEvent)
        : undefined);
    message.friendRequestEvent !== undefined &&
      (obj.friendRequestEvent = message.friendRequestEvent
        ? FriendRequestEvent.toJSON(message.friendRequestEvent)
        : undefined);
    message.groupRequestEvent !== undefined &&
      (obj.groupRequestEvent = message.groupRequestEvent
        ? GroupRequestEvent.toJSON(message.groupRequestEvent)
        : undefined);
    message.groupTempMessageEvent !== undefined &&
      (obj.groupTempMessageEvent = message.groupTempMessageEvent
        ? GroupTempMessageEvent.toJSON(message.groupTempMessageEvent)
        : undefined);
    message.groupNotifyEvent !== undefined &&
      (obj.groupNotifyEvent = message.groupNotifyEvent
        ? GroupNotifyEvent.toJSON(message.groupNotifyEvent)
        : undefined);
    message.channelMessageEvent !== undefined &&
      (obj.channelMessageEvent = message.channelMessageEvent
        ? ChannelMessageEvent.toJSON(message.channelMessageEvent)
        : undefined);
    message.sendPrivateMsgReq !== undefined &&
      (obj.sendPrivateMsgReq = message.sendPrivateMsgReq
        ? SendPrivateMsgReq.toJSON(message.sendPrivateMsgReq)
        : undefined);
    message.sendGroupMsgReq !== undefined &&
      (obj.sendGroupMsgReq = message.sendGroupMsgReq
        ? SendGroupMsgReq.toJSON(message.sendGroupMsgReq)
        : undefined);
    message.sendMsgReq !== undefined &&
      (obj.sendMsgReq = message.sendMsgReq
        ? SendMsgReq.toJSON(message.sendMsgReq)
        : undefined);
    message.deleteMsgReq !== undefined &&
      (obj.deleteMsgReq = message.deleteMsgReq
        ? DeleteMsgReq.toJSON(message.deleteMsgReq)
        : undefined);
    message.getMsgReq !== undefined &&
      (obj.getMsgReq = message.getMsgReq
        ? GetMsgReq.toJSON(message.getMsgReq)
        : undefined);
    message.getForwardMsgReq !== undefined &&
      (obj.getForwardMsgReq = message.getForwardMsgReq
        ? GetForwardMsgReq.toJSON(message.getForwardMsgReq)
        : undefined);
    message.sendLikeReq !== undefined &&
      (obj.sendLikeReq = message.sendLikeReq
        ? SendLikeReq.toJSON(message.sendLikeReq)
        : undefined);
    message.setGroupKickReq !== undefined &&
      (obj.setGroupKickReq = message.setGroupKickReq
        ? SetGroupKickReq.toJSON(message.setGroupKickReq)
        : undefined);
    message.setGroupBanReq !== undefined &&
      (obj.setGroupBanReq = message.setGroupBanReq
        ? SetGroupBanReq.toJSON(message.setGroupBanReq)
        : undefined);
    message.setGroupAnonymousBanReq !== undefined &&
      (obj.setGroupAnonymousBanReq = message.setGroupAnonymousBanReq
        ? SetGroupAnonymousBanReq.toJSON(message.setGroupAnonymousBanReq)
        : undefined);
    message.setGroupWholeBanReq !== undefined &&
      (obj.setGroupWholeBanReq = message.setGroupWholeBanReq
        ? SetGroupWholeBanReq.toJSON(message.setGroupWholeBanReq)
        : undefined);
    message.setGroupAdminReq !== undefined &&
      (obj.setGroupAdminReq = message.setGroupAdminReq
        ? SetGroupAdminReq.toJSON(message.setGroupAdminReq)
        : undefined);
    message.setGroupAnonymousReq !== undefined &&
      (obj.setGroupAnonymousReq = message.setGroupAnonymousReq
        ? SetGroupAnonymousReq.toJSON(message.setGroupAnonymousReq)
        : undefined);
    message.setGroupCardReq !== undefined &&
      (obj.setGroupCardReq = message.setGroupCardReq
        ? SetGroupCardReq.toJSON(message.setGroupCardReq)
        : undefined);
    message.setGroupNameReq !== undefined &&
      (obj.setGroupNameReq = message.setGroupNameReq
        ? SetGroupNameReq.toJSON(message.setGroupNameReq)
        : undefined);
    message.setGroupLeaveReq !== undefined &&
      (obj.setGroupLeaveReq = message.setGroupLeaveReq
        ? SetGroupLeaveReq.toJSON(message.setGroupLeaveReq)
        : undefined);
    message.setGroupSpecialTitleReq !== undefined &&
      (obj.setGroupSpecialTitleReq = message.setGroupSpecialTitleReq
        ? SetGroupSpecialTitleReq.toJSON(message.setGroupSpecialTitleReq)
        : undefined);
    message.setFriendAddRequestReq !== undefined &&
      (obj.setFriendAddRequestReq = message.setFriendAddRequestReq
        ? SetFriendAddRequestReq.toJSON(message.setFriendAddRequestReq)
        : undefined);
    message.setGroupAddRequestReq !== undefined &&
      (obj.setGroupAddRequestReq = message.setGroupAddRequestReq
        ? SetGroupAddRequestReq.toJSON(message.setGroupAddRequestReq)
        : undefined);
    message.getLoginInfoReq !== undefined &&
      (obj.getLoginInfoReq = message.getLoginInfoReq
        ? GetLoginInfoReq.toJSON(message.getLoginInfoReq)
        : undefined);
    message.getStrangerInfoReq !== undefined &&
      (obj.getStrangerInfoReq = message.getStrangerInfoReq
        ? GetStrangerInfoReq.toJSON(message.getStrangerInfoReq)
        : undefined);
    message.getFriendListReq !== undefined &&
      (obj.getFriendListReq = message.getFriendListReq
        ? GetFriendListReq.toJSON(message.getFriendListReq)
        : undefined);
    message.getGroupInfoReq !== undefined &&
      (obj.getGroupInfoReq = message.getGroupInfoReq
        ? GetGroupInfoReq.toJSON(message.getGroupInfoReq)
        : undefined);
    message.getGroupListReq !== undefined &&
      (obj.getGroupListReq = message.getGroupListReq
        ? GetGroupListReq.toJSON(message.getGroupListReq)
        : undefined);
    message.getGroupMemberInfoReq !== undefined &&
      (obj.getGroupMemberInfoReq = message.getGroupMemberInfoReq
        ? GetGroupMemberInfoReq.toJSON(message.getGroupMemberInfoReq)
        : undefined);
    message.getGroupMemberListReq !== undefined &&
      (obj.getGroupMemberListReq = message.getGroupMemberListReq
        ? GetGroupMemberListReq.toJSON(message.getGroupMemberListReq)
        : undefined);
    message.getGroupHonorInfoReq !== undefined &&
      (obj.getGroupHonorInfoReq = message.getGroupHonorInfoReq
        ? GetGroupHonorInfoReq.toJSON(message.getGroupHonorInfoReq)
        : undefined);
    message.getCookiesReq !== undefined &&
      (obj.getCookiesReq = message.getCookiesReq
        ? GetCookiesReq.toJSON(message.getCookiesReq)
        : undefined);
    message.getCsrfTokenReq !== undefined &&
      (obj.getCsrfTokenReq = message.getCsrfTokenReq
        ? GetCsrfTokenReq.toJSON(message.getCsrfTokenReq)
        : undefined);
    message.getCredentialsReq !== undefined &&
      (obj.getCredentialsReq = message.getCredentialsReq
        ? GetCredentialsReq.toJSON(message.getCredentialsReq)
        : undefined);
    message.getRecordReq !== undefined &&
      (obj.getRecordReq = message.getRecordReq
        ? GetRecordReq.toJSON(message.getRecordReq)
        : undefined);
    message.getImageReq !== undefined &&
      (obj.getImageReq = message.getImageReq
        ? GetImageReq.toJSON(message.getImageReq)
        : undefined);
    message.canSendImageReq !== undefined &&
      (obj.canSendImageReq = message.canSendImageReq
        ? CanSendImageReq.toJSON(message.canSendImageReq)
        : undefined);
    message.canSendRecordReq !== undefined &&
      (obj.canSendRecordReq = message.canSendRecordReq
        ? CanSendRecordReq.toJSON(message.canSendRecordReq)
        : undefined);
    message.getStatusReq !== undefined &&
      (obj.getStatusReq = message.getStatusReq
        ? GetStatusReq.toJSON(message.getStatusReq)
        : undefined);
    message.getVersionInfoReq !== undefined &&
      (obj.getVersionInfoReq = message.getVersionInfoReq
        ? GetVersionInfoReq.toJSON(message.getVersionInfoReq)
        : undefined);
    message.setRestartReq !== undefined &&
      (obj.setRestartReq = message.setRestartReq
        ? SetRestartReq.toJSON(message.setRestartReq)
        : undefined);
    message.cleanCacheReq !== undefined &&
      (obj.cleanCacheReq = message.cleanCacheReq
        ? CleanCacheReq.toJSON(message.cleanCacheReq)
        : undefined);
    message.setGroupSignInReq !== undefined &&
      (obj.setGroupSignInReq = message.setGroupSignInReq
        ? SetGroupSignInReq.toJSON(message.setGroupSignInReq)
        : undefined);
    message.sendMusicReq !== undefined &&
      (obj.sendMusicReq = message.sendMusicReq
        ? SendMusicReq.toJSON(message.sendMusicReq)
        : undefined);
    message.sendGroupPokeReq !== undefined &&
      (obj.sendGroupPokeReq = message.sendGroupPokeReq
        ? SendGroupPokeReq.toJSON(message.sendGroupPokeReq)
        : undefined);
    message.sendFriendPokeReq !== undefined &&
      (obj.sendFriendPokeReq = message.sendFriendPokeReq
        ? SendFriendPokeReq.toJSON(message.sendFriendPokeReq)
        : undefined);
    message.sendChannelMsgReq !== undefined &&
      (obj.sendChannelMsgReq = message.sendChannelMsgReq
        ? SendChannelMsgReq.toJSON(message.sendChannelMsgReq)
        : undefined);
    message.sendPrivateMsgResp !== undefined &&
      (obj.sendPrivateMsgResp = message.sendPrivateMsgResp
        ? SendPrivateMsgResp.toJSON(message.sendPrivateMsgResp)
        : undefined);
    message.sendGroupMsgResp !== undefined &&
      (obj.sendGroupMsgResp = message.sendGroupMsgResp
        ? SendGroupMsgResp.toJSON(message.sendGroupMsgResp)
        : undefined);
    message.sendMsgResp !== undefined &&
      (obj.sendMsgResp = message.sendMsgResp
        ? SendMsgResp.toJSON(message.sendMsgResp)
        : undefined);
    message.deleteMsgResp !== undefined &&
      (obj.deleteMsgResp = message.deleteMsgResp
        ? DeleteMsgResp.toJSON(message.deleteMsgResp)
        : undefined);
    message.getMsgResp !== undefined &&
      (obj.getMsgResp = message.getMsgResp
        ? GetMsgResp.toJSON(message.getMsgResp)
        : undefined);
    message.getForwardMsgResp !== undefined &&
      (obj.getForwardMsgResp = message.getForwardMsgResp
        ? GetForwardMsgResp.toJSON(message.getForwardMsgResp)
        : undefined);
    message.sendLikeResp !== undefined &&
      (obj.sendLikeResp = message.sendLikeResp
        ? SendLikeResp.toJSON(message.sendLikeResp)
        : undefined);
    message.setGroupKickResp !== undefined &&
      (obj.setGroupKickResp = message.setGroupKickResp
        ? SetGroupKickResp.toJSON(message.setGroupKickResp)
        : undefined);
    message.setGroupBanResp !== undefined &&
      (obj.setGroupBanResp = message.setGroupBanResp
        ? SetGroupBanResp.toJSON(message.setGroupBanResp)
        : undefined);
    message.setGroupAnonymousBanResp !== undefined &&
      (obj.setGroupAnonymousBanResp = message.setGroupAnonymousBanResp
        ? SetGroupAnonymousBanResp.toJSON(message.setGroupAnonymousBanResp)
        : undefined);
    message.setGroupWholeBanResp !== undefined &&
      (obj.setGroupWholeBanResp = message.setGroupWholeBanResp
        ? SetGroupWholeBanResp.toJSON(message.setGroupWholeBanResp)
        : undefined);
    message.setGroupAdminResp !== undefined &&
      (obj.setGroupAdminResp = message.setGroupAdminResp
        ? SetGroupAdminResp.toJSON(message.setGroupAdminResp)
        : undefined);
    message.setGroupAnonymousResp !== undefined &&
      (obj.setGroupAnonymousResp = message.setGroupAnonymousResp
        ? SetGroupAnonymousResp.toJSON(message.setGroupAnonymousResp)
        : undefined);
    message.setGroupCardResp !== undefined &&
      (obj.setGroupCardResp = message.setGroupCardResp
        ? SetGroupCardResp.toJSON(message.setGroupCardResp)
        : undefined);
    message.setGroupNameResp !== undefined &&
      (obj.setGroupNameResp = message.setGroupNameResp
        ? SetGroupNameResp.toJSON(message.setGroupNameResp)
        : undefined);
    message.setGroupLeaveResp !== undefined &&
      (obj.setGroupLeaveResp = message.setGroupLeaveResp
        ? SetGroupLeaveResp.toJSON(message.setGroupLeaveResp)
        : undefined);
    message.setGroupSpecialTitleResp !== undefined &&
      (obj.setGroupSpecialTitleResp = message.setGroupSpecialTitleResp
        ? SetGroupSpecialTitleResp.toJSON(message.setGroupSpecialTitleResp)
        : undefined);
    message.setFriendAddRequestResp !== undefined &&
      (obj.setFriendAddRequestResp = message.setFriendAddRequestResp
        ? SetFriendAddRequestResp.toJSON(message.setFriendAddRequestResp)
        : undefined);
    message.setGroupAddRequestResp !== undefined &&
      (obj.setGroupAddRequestResp = message.setGroupAddRequestResp
        ? SetGroupAddRequestResp.toJSON(message.setGroupAddRequestResp)
        : undefined);
    message.getLoginInfoResp !== undefined &&
      (obj.getLoginInfoResp = message.getLoginInfoResp
        ? GetLoginInfoResp.toJSON(message.getLoginInfoResp)
        : undefined);
    message.getStrangerInfoResp !== undefined &&
      (obj.getStrangerInfoResp = message.getStrangerInfoResp
        ? GetStrangerInfoResp.toJSON(message.getStrangerInfoResp)
        : undefined);
    message.getFriendListResp !== undefined &&
      (obj.getFriendListResp = message.getFriendListResp
        ? GetFriendListResp.toJSON(message.getFriendListResp)
        : undefined);
    message.getGroupInfoResp !== undefined &&
      (obj.getGroupInfoResp = message.getGroupInfoResp
        ? GetGroupInfoResp.toJSON(message.getGroupInfoResp)
        : undefined);
    message.getGroupListResp !== undefined &&
      (obj.getGroupListResp = message.getGroupListResp
        ? GetGroupListResp.toJSON(message.getGroupListResp)
        : undefined);
    message.getGroupMemberInfoResp !== undefined &&
      (obj.getGroupMemberInfoResp = message.getGroupMemberInfoResp
        ? GetGroupMemberInfoResp.toJSON(message.getGroupMemberInfoResp)
        : undefined);
    message.getGroupMemberListResp !== undefined &&
      (obj.getGroupMemberListResp = message.getGroupMemberListResp
        ? GetGroupMemberListResp.toJSON(message.getGroupMemberListResp)
        : undefined);
    message.getGroupHonorInfoResp !== undefined &&
      (obj.getGroupHonorInfoResp = message.getGroupHonorInfoResp
        ? GetGroupHonorInfoResp.toJSON(message.getGroupHonorInfoResp)
        : undefined);
    message.getCookiesResp !== undefined &&
      (obj.getCookiesResp = message.getCookiesResp
        ? GetCookiesResp.toJSON(message.getCookiesResp)
        : undefined);
    message.getCsrfTokenResp !== undefined &&
      (obj.getCsrfTokenResp = message.getCsrfTokenResp
        ? GetCsrfTokenResp.toJSON(message.getCsrfTokenResp)
        : undefined);
    message.getCredentialsResp !== undefined &&
      (obj.getCredentialsResp = message.getCredentialsResp
        ? GetCredentialsResp.toJSON(message.getCredentialsResp)
        : undefined);
    message.getRecordResp !== undefined &&
      (obj.getRecordResp = message.getRecordResp
        ? GetRecordResp.toJSON(message.getRecordResp)
        : undefined);
    message.getImageResp !== undefined &&
      (obj.getImageResp = message.getImageResp
        ? GetImageResp.toJSON(message.getImageResp)
        : undefined);
    message.canSendImageResp !== undefined &&
      (obj.canSendImageResp = message.canSendImageResp
        ? CanSendImageResp.toJSON(message.canSendImageResp)
        : undefined);
    message.canSendRecordResp !== undefined &&
      (obj.canSendRecordResp = message.canSendRecordResp
        ? CanSendRecordResp.toJSON(message.canSendRecordResp)
        : undefined);
    message.getStatusResp !== undefined &&
      (obj.getStatusResp = message.getStatusResp
        ? GetStatusResp.toJSON(message.getStatusResp)
        : undefined);
    message.getVersionInfoResp !== undefined &&
      (obj.getVersionInfoResp = message.getVersionInfoResp
        ? GetVersionInfoResp.toJSON(message.getVersionInfoResp)
        : undefined);
    message.setRestartResp !== undefined &&
      (obj.setRestartResp = message.setRestartResp
        ? SetRestartResp.toJSON(message.setRestartResp)
        : undefined);
    message.cleanCacheResp !== undefined &&
      (obj.cleanCacheResp = message.cleanCacheResp
        ? CleanCacheResp.toJSON(message.cleanCacheResp)
        : undefined);
    message.setGroupSignInResp !== undefined &&
      (obj.setGroupSignInResp = message.setGroupSignInResp
        ? SetGroupSignInResp.toJSON(message.setGroupSignInResp)
        : undefined);
    message.sendMusicResp !== undefined &&
      (obj.sendMusicResp = message.sendMusicResp
        ? SendMusicResp.toJSON(message.sendMusicResp)
        : undefined);
    message.sendGroupPokeResp !== undefined &&
      (obj.sendGroupPokeResp = message.sendGroupPokeResp
        ? SendGroupPokeResp.toJSON(message.sendGroupPokeResp)
        : undefined);
    message.sendFriendPokeResp !== undefined &&
      (obj.sendFriendPokeResp = message.sendFriendPokeResp
        ? SendFriendPokeResp.toJSON(message.sendFriendPokeResp)
        : undefined);
    message.sendChannelMsgResp !== undefined &&
      (obj.sendChannelMsgResp = message.sendChannelMsgResp
        ? SendChannelMsgResp.toJSON(message.sendChannelMsgResp)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Frame>, I>>(object: I): Frame {
    const message = createBaseFrame();
    message.botId = object.botId ?? 0;
    message.frameType = object.frameType ?? 0;
    message.echo = object.echo ?? "";
    message.ok = object.ok ?? false;
    message.extra = Object.entries(object.extra ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.privateMessageEvent =
      object.privateMessageEvent !== undefined &&
      object.privateMessageEvent !== null
        ? PrivateMessageEvent.fromPartial(object.privateMessageEvent)
        : undefined;
    message.groupMessageEvent =
      object.groupMessageEvent !== undefined &&
      object.groupMessageEvent !== null
        ? GroupMessageEvent.fromPartial(object.groupMessageEvent)
        : undefined;
    message.groupUploadNoticeEvent =
      object.groupUploadNoticeEvent !== undefined &&
      object.groupUploadNoticeEvent !== null
        ? GroupUploadNoticeEvent.fromPartial(object.groupUploadNoticeEvent)
        : undefined;
    message.groupAdminNoticeEvent =
      object.groupAdminNoticeEvent !== undefined &&
      object.groupAdminNoticeEvent !== null
        ? GroupAdminNoticeEvent.fromPartial(object.groupAdminNoticeEvent)
        : undefined;
    message.groupDecreaseNoticeEvent =
      object.groupDecreaseNoticeEvent !== undefined &&
      object.groupDecreaseNoticeEvent !== null
        ? GroupDecreaseNoticeEvent.fromPartial(object.groupDecreaseNoticeEvent)
        : undefined;
    message.groupIncreaseNoticeEvent =
      object.groupIncreaseNoticeEvent !== undefined &&
      object.groupIncreaseNoticeEvent !== null
        ? GroupIncreaseNoticeEvent.fromPartial(object.groupIncreaseNoticeEvent)
        : undefined;
    message.groupBanNoticeEvent =
      object.groupBanNoticeEvent !== undefined &&
      object.groupBanNoticeEvent !== null
        ? GroupBanNoticeEvent.fromPartial(object.groupBanNoticeEvent)
        : undefined;
    message.friendAddNoticeEvent =
      object.friendAddNoticeEvent !== undefined &&
      object.friendAddNoticeEvent !== null
        ? FriendAddNoticeEvent.fromPartial(object.friendAddNoticeEvent)
        : undefined;
    message.groupRecallNoticeEvent =
      object.groupRecallNoticeEvent !== undefined &&
      object.groupRecallNoticeEvent !== null
        ? GroupRecallNoticeEvent.fromPartial(object.groupRecallNoticeEvent)
        : undefined;
    message.friendRecallNoticeEvent =
      object.friendRecallNoticeEvent !== undefined &&
      object.friendRecallNoticeEvent !== null
        ? FriendRecallNoticeEvent.fromPartial(object.friendRecallNoticeEvent)
        : undefined;
    message.friendRequestEvent =
      object.friendRequestEvent !== undefined &&
      object.friendRequestEvent !== null
        ? FriendRequestEvent.fromPartial(object.friendRequestEvent)
        : undefined;
    message.groupRequestEvent =
      object.groupRequestEvent !== undefined &&
      object.groupRequestEvent !== null
        ? GroupRequestEvent.fromPartial(object.groupRequestEvent)
        : undefined;
    message.groupTempMessageEvent =
      object.groupTempMessageEvent !== undefined &&
      object.groupTempMessageEvent !== null
        ? GroupTempMessageEvent.fromPartial(object.groupTempMessageEvent)
        : undefined;
    message.groupNotifyEvent =
      object.groupNotifyEvent !== undefined && object.groupNotifyEvent !== null
        ? GroupNotifyEvent.fromPartial(object.groupNotifyEvent)
        : undefined;
    message.channelMessageEvent =
      object.channelMessageEvent !== undefined &&
      object.channelMessageEvent !== null
        ? ChannelMessageEvent.fromPartial(object.channelMessageEvent)
        : undefined;
    message.sendPrivateMsgReq =
      object.sendPrivateMsgReq !== undefined &&
      object.sendPrivateMsgReq !== null
        ? SendPrivateMsgReq.fromPartial(object.sendPrivateMsgReq)
        : undefined;
    message.sendGroupMsgReq =
      object.sendGroupMsgReq !== undefined && object.sendGroupMsgReq !== null
        ? SendGroupMsgReq.fromPartial(object.sendGroupMsgReq)
        : undefined;
    message.sendMsgReq =
      object.sendMsgReq !== undefined && object.sendMsgReq !== null
        ? SendMsgReq.fromPartial(object.sendMsgReq)
        : undefined;
    message.deleteMsgReq =
      object.deleteMsgReq !== undefined && object.deleteMsgReq !== null
        ? DeleteMsgReq.fromPartial(object.deleteMsgReq)
        : undefined;
    message.getMsgReq =
      object.getMsgReq !== undefined && object.getMsgReq !== null
        ? GetMsgReq.fromPartial(object.getMsgReq)
        : undefined;
    message.getForwardMsgReq =
      object.getForwardMsgReq !== undefined && object.getForwardMsgReq !== null
        ? GetForwardMsgReq.fromPartial(object.getForwardMsgReq)
        : undefined;
    message.sendLikeReq =
      object.sendLikeReq !== undefined && object.sendLikeReq !== null
        ? SendLikeReq.fromPartial(object.sendLikeReq)
        : undefined;
    message.setGroupKickReq =
      object.setGroupKickReq !== undefined && object.setGroupKickReq !== null
        ? SetGroupKickReq.fromPartial(object.setGroupKickReq)
        : undefined;
    message.setGroupBanReq =
      object.setGroupBanReq !== undefined && object.setGroupBanReq !== null
        ? SetGroupBanReq.fromPartial(object.setGroupBanReq)
        : undefined;
    message.setGroupAnonymousBanReq =
      object.setGroupAnonymousBanReq !== undefined &&
      object.setGroupAnonymousBanReq !== null
        ? SetGroupAnonymousBanReq.fromPartial(object.setGroupAnonymousBanReq)
        : undefined;
    message.setGroupWholeBanReq =
      object.setGroupWholeBanReq !== undefined &&
      object.setGroupWholeBanReq !== null
        ? SetGroupWholeBanReq.fromPartial(object.setGroupWholeBanReq)
        : undefined;
    message.setGroupAdminReq =
      object.setGroupAdminReq !== undefined && object.setGroupAdminReq !== null
        ? SetGroupAdminReq.fromPartial(object.setGroupAdminReq)
        : undefined;
    message.setGroupAnonymousReq =
      object.setGroupAnonymousReq !== undefined &&
      object.setGroupAnonymousReq !== null
        ? SetGroupAnonymousReq.fromPartial(object.setGroupAnonymousReq)
        : undefined;
    message.setGroupCardReq =
      object.setGroupCardReq !== undefined && object.setGroupCardReq !== null
        ? SetGroupCardReq.fromPartial(object.setGroupCardReq)
        : undefined;
    message.setGroupNameReq =
      object.setGroupNameReq !== undefined && object.setGroupNameReq !== null
        ? SetGroupNameReq.fromPartial(object.setGroupNameReq)
        : undefined;
    message.setGroupLeaveReq =
      object.setGroupLeaveReq !== undefined && object.setGroupLeaveReq !== null
        ? SetGroupLeaveReq.fromPartial(object.setGroupLeaveReq)
        : undefined;
    message.setGroupSpecialTitleReq =
      object.setGroupSpecialTitleReq !== undefined &&
      object.setGroupSpecialTitleReq !== null
        ? SetGroupSpecialTitleReq.fromPartial(object.setGroupSpecialTitleReq)
        : undefined;
    message.setFriendAddRequestReq =
      object.setFriendAddRequestReq !== undefined &&
      object.setFriendAddRequestReq !== null
        ? SetFriendAddRequestReq.fromPartial(object.setFriendAddRequestReq)
        : undefined;
    message.setGroupAddRequestReq =
      object.setGroupAddRequestReq !== undefined &&
      object.setGroupAddRequestReq !== null
        ? SetGroupAddRequestReq.fromPartial(object.setGroupAddRequestReq)
        : undefined;
    message.getLoginInfoReq =
      object.getLoginInfoReq !== undefined && object.getLoginInfoReq !== null
        ? GetLoginInfoReq.fromPartial(object.getLoginInfoReq)
        : undefined;
    message.getStrangerInfoReq =
      object.getStrangerInfoReq !== undefined &&
      object.getStrangerInfoReq !== null
        ? GetStrangerInfoReq.fromPartial(object.getStrangerInfoReq)
        : undefined;
    message.getFriendListReq =
      object.getFriendListReq !== undefined && object.getFriendListReq !== null
        ? GetFriendListReq.fromPartial(object.getFriendListReq)
        : undefined;
    message.getGroupInfoReq =
      object.getGroupInfoReq !== undefined && object.getGroupInfoReq !== null
        ? GetGroupInfoReq.fromPartial(object.getGroupInfoReq)
        : undefined;
    message.getGroupListReq =
      object.getGroupListReq !== undefined && object.getGroupListReq !== null
        ? GetGroupListReq.fromPartial(object.getGroupListReq)
        : undefined;
    message.getGroupMemberInfoReq =
      object.getGroupMemberInfoReq !== undefined &&
      object.getGroupMemberInfoReq !== null
        ? GetGroupMemberInfoReq.fromPartial(object.getGroupMemberInfoReq)
        : undefined;
    message.getGroupMemberListReq =
      object.getGroupMemberListReq !== undefined &&
      object.getGroupMemberListReq !== null
        ? GetGroupMemberListReq.fromPartial(object.getGroupMemberListReq)
        : undefined;
    message.getGroupHonorInfoReq =
      object.getGroupHonorInfoReq !== undefined &&
      object.getGroupHonorInfoReq !== null
        ? GetGroupHonorInfoReq.fromPartial(object.getGroupHonorInfoReq)
        : undefined;
    message.getCookiesReq =
      object.getCookiesReq !== undefined && object.getCookiesReq !== null
        ? GetCookiesReq.fromPartial(object.getCookiesReq)
        : undefined;
    message.getCsrfTokenReq =
      object.getCsrfTokenReq !== undefined && object.getCsrfTokenReq !== null
        ? GetCsrfTokenReq.fromPartial(object.getCsrfTokenReq)
        : undefined;
    message.getCredentialsReq =
      object.getCredentialsReq !== undefined &&
      object.getCredentialsReq !== null
        ? GetCredentialsReq.fromPartial(object.getCredentialsReq)
        : undefined;
    message.getRecordReq =
      object.getRecordReq !== undefined && object.getRecordReq !== null
        ? GetRecordReq.fromPartial(object.getRecordReq)
        : undefined;
    message.getImageReq =
      object.getImageReq !== undefined && object.getImageReq !== null
        ? GetImageReq.fromPartial(object.getImageReq)
        : undefined;
    message.canSendImageReq =
      object.canSendImageReq !== undefined && object.canSendImageReq !== null
        ? CanSendImageReq.fromPartial(object.canSendImageReq)
        : undefined;
    message.canSendRecordReq =
      object.canSendRecordReq !== undefined && object.canSendRecordReq !== null
        ? CanSendRecordReq.fromPartial(object.canSendRecordReq)
        : undefined;
    message.getStatusReq =
      object.getStatusReq !== undefined && object.getStatusReq !== null
        ? GetStatusReq.fromPartial(object.getStatusReq)
        : undefined;
    message.getVersionInfoReq =
      object.getVersionInfoReq !== undefined &&
      object.getVersionInfoReq !== null
        ? GetVersionInfoReq.fromPartial(object.getVersionInfoReq)
        : undefined;
    message.setRestartReq =
      object.setRestartReq !== undefined && object.setRestartReq !== null
        ? SetRestartReq.fromPartial(object.setRestartReq)
        : undefined;
    message.cleanCacheReq =
      object.cleanCacheReq !== undefined && object.cleanCacheReq !== null
        ? CleanCacheReq.fromPartial(object.cleanCacheReq)
        : undefined;
    message.setGroupSignInReq =
      object.setGroupSignInReq !== undefined &&
      object.setGroupSignInReq !== null
        ? SetGroupSignInReq.fromPartial(object.setGroupSignInReq)
        : undefined;
    message.sendMusicReq =
      object.sendMusicReq !== undefined && object.sendMusicReq !== null
        ? SendMusicReq.fromPartial(object.sendMusicReq)
        : undefined;
    message.sendGroupPokeReq =
      object.sendGroupPokeReq !== undefined && object.sendGroupPokeReq !== null
        ? SendGroupPokeReq.fromPartial(object.sendGroupPokeReq)
        : undefined;
    message.sendFriendPokeReq =
      object.sendFriendPokeReq !== undefined &&
      object.sendFriendPokeReq !== null
        ? SendFriendPokeReq.fromPartial(object.sendFriendPokeReq)
        : undefined;
    message.sendChannelMsgReq =
      object.sendChannelMsgReq !== undefined &&
      object.sendChannelMsgReq !== null
        ? SendChannelMsgReq.fromPartial(object.sendChannelMsgReq)
        : undefined;
    message.sendPrivateMsgResp =
      object.sendPrivateMsgResp !== undefined &&
      object.sendPrivateMsgResp !== null
        ? SendPrivateMsgResp.fromPartial(object.sendPrivateMsgResp)
        : undefined;
    message.sendGroupMsgResp =
      object.sendGroupMsgResp !== undefined && object.sendGroupMsgResp !== null
        ? SendGroupMsgResp.fromPartial(object.sendGroupMsgResp)
        : undefined;
    message.sendMsgResp =
      object.sendMsgResp !== undefined && object.sendMsgResp !== null
        ? SendMsgResp.fromPartial(object.sendMsgResp)
        : undefined;
    message.deleteMsgResp =
      object.deleteMsgResp !== undefined && object.deleteMsgResp !== null
        ? DeleteMsgResp.fromPartial(object.deleteMsgResp)
        : undefined;
    message.getMsgResp =
      object.getMsgResp !== undefined && object.getMsgResp !== null
        ? GetMsgResp.fromPartial(object.getMsgResp)
        : undefined;
    message.getForwardMsgResp =
      object.getForwardMsgResp !== undefined &&
      object.getForwardMsgResp !== null
        ? GetForwardMsgResp.fromPartial(object.getForwardMsgResp)
        : undefined;
    message.sendLikeResp =
      object.sendLikeResp !== undefined && object.sendLikeResp !== null
        ? SendLikeResp.fromPartial(object.sendLikeResp)
        : undefined;
    message.setGroupKickResp =
      object.setGroupKickResp !== undefined && object.setGroupKickResp !== null
        ? SetGroupKickResp.fromPartial(object.setGroupKickResp)
        : undefined;
    message.setGroupBanResp =
      object.setGroupBanResp !== undefined && object.setGroupBanResp !== null
        ? SetGroupBanResp.fromPartial(object.setGroupBanResp)
        : undefined;
    message.setGroupAnonymousBanResp =
      object.setGroupAnonymousBanResp !== undefined &&
      object.setGroupAnonymousBanResp !== null
        ? SetGroupAnonymousBanResp.fromPartial(object.setGroupAnonymousBanResp)
        : undefined;
    message.setGroupWholeBanResp =
      object.setGroupWholeBanResp !== undefined &&
      object.setGroupWholeBanResp !== null
        ? SetGroupWholeBanResp.fromPartial(object.setGroupWholeBanResp)
        : undefined;
    message.setGroupAdminResp =
      object.setGroupAdminResp !== undefined &&
      object.setGroupAdminResp !== null
        ? SetGroupAdminResp.fromPartial(object.setGroupAdminResp)
        : undefined;
    message.setGroupAnonymousResp =
      object.setGroupAnonymousResp !== undefined &&
      object.setGroupAnonymousResp !== null
        ? SetGroupAnonymousResp.fromPartial(object.setGroupAnonymousResp)
        : undefined;
    message.setGroupCardResp =
      object.setGroupCardResp !== undefined && object.setGroupCardResp !== null
        ? SetGroupCardResp.fromPartial(object.setGroupCardResp)
        : undefined;
    message.setGroupNameResp =
      object.setGroupNameResp !== undefined && object.setGroupNameResp !== null
        ? SetGroupNameResp.fromPartial(object.setGroupNameResp)
        : undefined;
    message.setGroupLeaveResp =
      object.setGroupLeaveResp !== undefined &&
      object.setGroupLeaveResp !== null
        ? SetGroupLeaveResp.fromPartial(object.setGroupLeaveResp)
        : undefined;
    message.setGroupSpecialTitleResp =
      object.setGroupSpecialTitleResp !== undefined &&
      object.setGroupSpecialTitleResp !== null
        ? SetGroupSpecialTitleResp.fromPartial(object.setGroupSpecialTitleResp)
        : undefined;
    message.setFriendAddRequestResp =
      object.setFriendAddRequestResp !== undefined &&
      object.setFriendAddRequestResp !== null
        ? SetFriendAddRequestResp.fromPartial(object.setFriendAddRequestResp)
        : undefined;
    message.setGroupAddRequestResp =
      object.setGroupAddRequestResp !== undefined &&
      object.setGroupAddRequestResp !== null
        ? SetGroupAddRequestResp.fromPartial(object.setGroupAddRequestResp)
        : undefined;
    message.getLoginInfoResp =
      object.getLoginInfoResp !== undefined && object.getLoginInfoResp !== null
        ? GetLoginInfoResp.fromPartial(object.getLoginInfoResp)
        : undefined;
    message.getStrangerInfoResp =
      object.getStrangerInfoResp !== undefined &&
      object.getStrangerInfoResp !== null
        ? GetStrangerInfoResp.fromPartial(object.getStrangerInfoResp)
        : undefined;
    message.getFriendListResp =
      object.getFriendListResp !== undefined &&
      object.getFriendListResp !== null
        ? GetFriendListResp.fromPartial(object.getFriendListResp)
        : undefined;
    message.getGroupInfoResp =
      object.getGroupInfoResp !== undefined && object.getGroupInfoResp !== null
        ? GetGroupInfoResp.fromPartial(object.getGroupInfoResp)
        : undefined;
    message.getGroupListResp =
      object.getGroupListResp !== undefined && object.getGroupListResp !== null
        ? GetGroupListResp.fromPartial(object.getGroupListResp)
        : undefined;
    message.getGroupMemberInfoResp =
      object.getGroupMemberInfoResp !== undefined &&
      object.getGroupMemberInfoResp !== null
        ? GetGroupMemberInfoResp.fromPartial(object.getGroupMemberInfoResp)
        : undefined;
    message.getGroupMemberListResp =
      object.getGroupMemberListResp !== undefined &&
      object.getGroupMemberListResp !== null
        ? GetGroupMemberListResp.fromPartial(object.getGroupMemberListResp)
        : undefined;
    message.getGroupHonorInfoResp =
      object.getGroupHonorInfoResp !== undefined &&
      object.getGroupHonorInfoResp !== null
        ? GetGroupHonorInfoResp.fromPartial(object.getGroupHonorInfoResp)
        : undefined;
    message.getCookiesResp =
      object.getCookiesResp !== undefined && object.getCookiesResp !== null
        ? GetCookiesResp.fromPartial(object.getCookiesResp)
        : undefined;
    message.getCsrfTokenResp =
      object.getCsrfTokenResp !== undefined && object.getCsrfTokenResp !== null
        ? GetCsrfTokenResp.fromPartial(object.getCsrfTokenResp)
        : undefined;
    message.getCredentialsResp =
      object.getCredentialsResp !== undefined &&
      object.getCredentialsResp !== null
        ? GetCredentialsResp.fromPartial(object.getCredentialsResp)
        : undefined;
    message.getRecordResp =
      object.getRecordResp !== undefined && object.getRecordResp !== null
        ? GetRecordResp.fromPartial(object.getRecordResp)
        : undefined;
    message.getImageResp =
      object.getImageResp !== undefined && object.getImageResp !== null
        ? GetImageResp.fromPartial(object.getImageResp)
        : undefined;
    message.canSendImageResp =
      object.canSendImageResp !== undefined && object.canSendImageResp !== null
        ? CanSendImageResp.fromPartial(object.canSendImageResp)
        : undefined;
    message.canSendRecordResp =
      object.canSendRecordResp !== undefined &&
      object.canSendRecordResp !== null
        ? CanSendRecordResp.fromPartial(object.canSendRecordResp)
        : undefined;
    message.getStatusResp =
      object.getStatusResp !== undefined && object.getStatusResp !== null
        ? GetStatusResp.fromPartial(object.getStatusResp)
        : undefined;
    message.getVersionInfoResp =
      object.getVersionInfoResp !== undefined &&
      object.getVersionInfoResp !== null
        ? GetVersionInfoResp.fromPartial(object.getVersionInfoResp)
        : undefined;
    message.setRestartResp =
      object.setRestartResp !== undefined && object.setRestartResp !== null
        ? SetRestartResp.fromPartial(object.setRestartResp)
        : undefined;
    message.cleanCacheResp =
      object.cleanCacheResp !== undefined && object.cleanCacheResp !== null
        ? CleanCacheResp.fromPartial(object.cleanCacheResp)
        : undefined;
    message.setGroupSignInResp =
      object.setGroupSignInResp !== undefined &&
      object.setGroupSignInResp !== null
        ? SetGroupSignInResp.fromPartial(object.setGroupSignInResp)
        : undefined;
    message.sendMusicResp =
      object.sendMusicResp !== undefined && object.sendMusicResp !== null
        ? SendMusicResp.fromPartial(object.sendMusicResp)
        : undefined;
    message.sendGroupPokeResp =
      object.sendGroupPokeResp !== undefined &&
      object.sendGroupPokeResp !== null
        ? SendGroupPokeResp.fromPartial(object.sendGroupPokeResp)
        : undefined;
    message.sendFriendPokeResp =
      object.sendFriendPokeResp !== undefined &&
      object.sendFriendPokeResp !== null
        ? SendFriendPokeResp.fromPartial(object.sendFriendPokeResp)
        : undefined;
    message.sendChannelMsgResp =
      object.sendChannelMsgResp !== undefined &&
      object.sendChannelMsgResp !== null
        ? SendChannelMsgResp.fromPartial(object.sendChannelMsgResp)
        : undefined;
    return message;
  },
};

function createBaseFrame_ExtraEntry(): Frame_ExtraEntry {
  return { key: "", value: "" };
}

export const Frame_ExtraEntry = {
  encode(
    message: Frame_ExtraEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Frame_ExtraEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrame_ExtraEntry();
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

  fromJSON(object: any): Frame_ExtraEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Frame_ExtraEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Frame_ExtraEntry>, I>>(
    object: I
  ): Frame_ExtraEntry {
    const message = createBaseFrame_ExtraEntry();
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
