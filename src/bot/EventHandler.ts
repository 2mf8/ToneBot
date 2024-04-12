import {Bot} from "./Bot";
import * as event from "../onebot/onebot_event";

export class EventHandler {

  static async handleConnect(bot: Bot) {

  }

  static async handleDisconnect(bot: Bot) {

  }

  static async handlePrivateMessage(bot: Bot, event: event.PrivateMsgEvent | undefined) {

  }

  static async handleGroupMessage(bot: Bot, event: event.GroupMsgEvent | undefined) {

  }

  static async handleGroupUploadNotice(bot: Bot, event: event.GroupUploadNoticeEvent | undefined) {

  }

  static async handleGroupAdminNotice(bot: Bot, event: event.GroupAdminChangeNoticeEvent | undefined) {

  }

  static async handleGroupDecreaseNotice(bot: Bot, event: event.GroupMemberDecreaseNoticeEvent | undefined) {

  }

  static async handleGroupIncreaseNotice(bot: Bot, event: event.GroupMemberIncreaseNoticeEvent | undefined) {

  }

  static async handleGroupBanNotice(bot: Bot, event: event.GroupBanNoticeEvent | undefined) {

  }

  static async handleFriendAddNotice(bot: Bot, event: event.FriendAddNoticeEvent | undefined) {

  }

  static async handleGroupRecallNotice(bot: Bot, event: event.GroupMsgRecallNoticeEvent | undefined) {

  }

  static async handleFriendRecallNotice(bot: Bot, event: event.FriendMsgRecallNoticeEvent | undefined) {

  }

  static async handleFriendRequest(bot: Bot, event: event.FriendAddRequestEvent | undefined) {

  }

  static async handleGroupRequest(bot: Bot, event: event.GroupAddOrInviteRequestEvent | undefined) {

  }

  static async handleGroupNotify(bot: Bot, event: event.GroupLuckyKingNoticeEvent | undefined){

  }
}
