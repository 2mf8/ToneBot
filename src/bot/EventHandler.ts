import {Bot} from "./Bot";
import * as event from "../proto/onebot_event";

export class EventHandler {

  static async handleConnect(bot: Bot) {

  }

  static async handleDisconnect(bot: Bot) {

  }

  static async handlePrivateMessage(bot: Bot, event: event.PrivateMessageEvent | undefined) {

  }

  static async handleGroupMessage(bot: Bot, event: event.GroupMessageEvent | undefined) {

  }

  static async handleGroupUploadNotice(bot: Bot, event: event.GroupUploadNoticeEvent | undefined) {

  }

  static async handleGroupAdminNotice(bot: Bot, event: event.GroupAdminNoticeEvent | undefined) {

  }

  static async handleGroupDecreaseNotice(bot: Bot, event: event.GroupDecreaseNoticeEvent | undefined) {

  }

  static async handleGroupIncreaseNotice(bot: Bot, event: event.GroupIncreaseNoticeEvent | undefined) {

  }

  static async handleGroupBanNotice(bot: Bot, event: event.GroupBanNoticeEvent | undefined) {

  }

  static async handleFriendAddNotice(bot: Bot, event: event.FriendAddNoticeEvent | undefined) {

  }

  static async handleGroupRecallNotice(bot: Bot, event: event.GroupRecallNoticeEvent | undefined) {

  }

  static async handleFriendRecallNotice(bot: Bot, event: event.FriendRecallNoticeEvent | undefined) {

  }

  static async handleFriendRequest(bot: Bot, event: event.FriendRequestEvent | undefined) {

  }

  static async handleGroupRequest(bot: Bot, event: event.GroupRequestEvent | undefined) {

  }

  static async handleChannelMessage(bot: Bot, event: event.ChannelMessageEvent | undefined){

  }

  static async handleGroupTempMessage(bot: Bot, event: event.GroupTempMessageEvent | undefined){

  }

  static async handleGroupNotify(bot: Bot, event: event.GroupNotifyEvent | undefined){

  }
}
