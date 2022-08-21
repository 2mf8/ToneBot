import Long from "long";
import WebSocket from "ws";
import LRUCache from 'lru-cache'
import {EventHandler} from "./EventHandler";
import {Msg} from "../util/Msg";
import {IdGenerator} from "../util/IdGenerator";
import * as onebot from "../proto/onebot_frame";
import Frame = onebot.Frame;
import FrameType = onebot.Frame_FrameType;
import {toLong} from "../util/convertLong";
import * as Api from "../proto/onebot_api";
import {MessageReceipt} from "../proto/onebot_base"
import { type } from "os";

interface WaitingFrame {
  resolve: (value: Frame | PromiseLike<Frame>) => void
  reject: (reason?: any) => void
  echo: string
}

export class Bot {
  botId: number
  session: WebSocket
  waitingFrames: LRUCache<string, WaitingFrame>

  static bots = new Map<Long, Bot>()

  constructor(botId: number, session: WebSocket) {
    this.waitingFrames = new LRUCache<string, WaitingFrame>({
      max: 500,
      ttl: 30 * 1000, // 30秒超时
      dispose(value: WaitingFrame, key: string) {
        value.reject("waiting timeout")
      }
    })
    this.botId = botId
    this.session = session
    this.session.on('message', async (data) => {
      let frame = Frame.decode(data as Buffer)
      try {
        await this.handleFrame(frame)
      } catch (e) {
        console.log("failed to handle frame")
        console.error(e)
      }
    })
  }

  async handleFrame(frame: Frame) {
    !!frame.privateMessageEvent && await EventHandler.handlePrivateMessage(this, frame.privateMessageEvent)
    !!frame.groupMessageEvent && await EventHandler.handleGroupMessage(this, frame.groupMessageEvent)
    !!frame.groupUploadNoticeEvent && await EventHandler.handleGroupUploadNotice(this, frame.groupUploadNoticeEvent)
    !!frame.groupAdminNoticeEvent && await EventHandler.handleGroupAdminNotice(this, frame.groupAdminNoticeEvent)
    !!frame.groupDecreaseNoticeEvent && await EventHandler.handleGroupDecreaseNotice(this, frame.groupDecreaseNoticeEvent)
    !!frame.groupIncreaseNoticeEvent && await EventHandler.handleGroupIncreaseNotice(this, frame.groupIncreaseNoticeEvent)
    !!frame.groupBanNoticeEvent && await EventHandler.handleGroupBanNotice(this, frame.groupBanNoticeEvent)
    !!frame.friendAddNoticeEvent && await EventHandler.handleFriendAddNotice(this, frame.friendAddNoticeEvent)
    !!frame.groupRecallNoticeEvent && await EventHandler.handleGroupRecallNotice(this, frame.groupRecallNoticeEvent)
    !!frame.friendRecallNoticeEvent && await EventHandler.handleFriendRecallNotice(this, frame.friendRecallNoticeEvent)
    !!frame.friendRequestEvent && await EventHandler.handleFriendRequest(this, frame.friendRequestEvent)
    !!frame.groupRequestEvent && await EventHandler.handleGroupRequest(this, frame.groupRequestEvent)
    !!frame.channelMessageEvent && await EventHandler.handleChannelMessage(this, frame.channelMessageEvent)
    !!frame.groupTempMessageEvent && await EventHandler.handleGroupTempMessage(this, frame.groupTempMessageEvent)
    !!frame.groupNotifyEvent && await EventHandler.handleGroupNotify(this, frame.groupNotifyEvent)
    if ((frame.frameType || 0) > 200) {
      let waitingFrame = this.waitingFrames.get(frame.echo as string)
      if (!!waitingFrame) {
        waitingFrame.resolve(frame)
      }
      this.waitingFrames.delete(frame.echo as string)
    }
  }

  sendFrame(frame: Frame) {
    let sendingData = Frame.encode(frame).finish()
    this.session.send(sendingData)
  }

  async sendFrameAndWait(frame: Frame): Promise<Frame> {
    frame.botId = this.botId
    frame.echo = IdGenerator.generateStrId()
    frame.ok = true
    this.sendFrame(frame)
    return new Promise<Frame>((resolve, reject) => {
      let waitingFrame: WaitingFrame = {
        resolve: resolve,
        reject: reject,
        echo: frame.echo as string,
      }
      this.waitingFrames.set(frame.echo as string, waitingFrame)
    })
  }

  async sendPrivateMessage(userId: Long | string | number, msg: string | Msg, autoEscape: boolean = true): Promise<Api.SendPrivateMsgResp | null> {
    if (typeof msg == 'string') {
      msg = Msg.builder().text(msg)
    }
    return await this.sendFrameAndWait({
      frameType: FrameType.TSendPrivateMsgReq,
      sendPrivateMsgReq: {
        userId: Number(userId),
        message: msg.messageList,
        autoEscape: autoEscape,
      }
    }).then(resp => resp.sendPrivateMsgResp || null)
      .catch(() => null)
  }

  async sendGroupMessage(groupId: Long | string | number, msg: string | Msg, autoEscape: boolean = true): Promise<Api.SendGroupMsgResp | null> {
    if (typeof msg == 'string') {
      msg = Msg.builder().text(msg)
    }
    return await this.sendFrameAndWait({
      frameType: FrameType.TSendGroupMsgReq,
      sendGroupMsgReq: {
        groupId: Number(groupId),
        message: msg.messageList,
        autoEscape: autoEscape,
      }
    }).then(resp => resp.sendGroupMsgResp || null)
      .catch(() => null)
  }

  /** GMC专用*/
  async deleteMsg(messageId: number): Promise<Api.DeleteMsgResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TDeleteMsgReq,
      deleteMsgReq: {
        messageId: messageId,
        messageReceipt: undefined,
      }
    }).then(resp => resp.deleteMsgResp || null)
      .catch(() => null)
  }

  /** GMC 1.1.0 以上版本和pbrq皆可用*/
  async deleteMsgByMessageReceipt(messageId: MessageReceipt): Promise<Api.DeleteMsgResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TDeleteMsgReq,
      deleteMsgReq: {
        messageId: 0,
        messageReceipt: messageId,
      }
    }).then(resp => resp.deleteMsgResp || null)
      .catch(() => null)
  }

  async getMsg(messageId: number): Promise<Api.GetMsgResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TGetMsgReq,
      getMsgReq: {
        messageId: messageId,
      }
    }).then(resp => resp.getMsgResp || null)
      .catch(() => null)
  }

  async setGroupKick(groupId: Long | string | number, userId: Long | string | number, rejectAddRequest: boolean): Promise<Api.SetGroupKickResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TSetGroupKickReq,
      setGroupKickReq: {
        groupId: Number(groupId),
        userId: Number(userId),
        rejectAddRequest: rejectAddRequest,
        userIds: [],
      }
    }).then(resp => resp.setGroupKickResp || null)
      .catch(() => null)
  }

  async setGroupBan(groupId: Long | string | number, userId: Long | string | number, duration: number): Promise<Api.SetGroupBanResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TSetGroupBanReq,
      setGroupBanReq: {
        groupId: Number(groupId),
        userId: Number(userId),
        duration: duration,
      }
    }).then(resp => resp.setGroupBanResp || null)
      .catch(() => null)
  }

  async setGroupWholeBan(groupId: Long | string | number, enable: boolean): Promise<Api.SetGroupWholeBanResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TSetGroupWholeBanReq,
      setGroupWholeBanReq: {
        groupId: Number(groupId),
        enable: enable,
      }
    }).then(resp => resp.setGroupWholeBanResp || null)
      .catch(() => null)
  }

  async setGroupCard(groupId: Long | string | number, userId: Long | string | number, card: string): Promise<Api.SetGroupCardResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TSetGroupCardReq,
      setGroupCardReq: {
        groupId: Number(groupId),
        userId: Number(userId),
        card: card,
      }
    }).then(resp => resp.setGroupCardResp || null)
      .catch(() => null)
  }

  async setGroupLeave(groupId: Long | string | number, isDismiss: boolean): Promise<Api.SetGroupLeaveResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TSetGroupLeaveReq,
      setGroupLeaveReq: {
        groupId: Number(groupId),
        isDismiss: isDismiss,
      }
    }).then(resp => resp.setGroupLeaveResp || null)
      .catch(() => null)
  }

  async setGroupSpecialTitle(groupId: Long | string | number, userId: Long | string | number, specialTitle: string, duration: number): Promise<Api.SetGroupSpecialTitleResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TSetGroupSpecialTitleReq,
      setGroupSpecialTitleReq: {
        groupId: Number(groupId),
        userId: Number(userId),
        specialTitle: specialTitle,
        duration: Number(duration),
      }
    }).then(resp => resp.setGroupSpecialTitleResp || null)
      .catch(() => null)
  }

  async setFriendAddRequest(flag: string, approve: boolean, remark: string): Promise<Api.SetFriendAddRequestResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TSetFriendAddRequestReq,
      setFriendAddRequestReq: {
        flag: flag,
        approve: approve,
        remark: remark
      }
    }).then(resp => resp.setFriendAddRequestResp || null)
      .catch(() => null)
  }

  async setGroupAddRequest(flag: string, subType: string, type: string, approve: boolean, reason: string): Promise<Api.SetGroupAddRequestResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TSetGroupAddRequestReq,
      setGroupAddRequestReq: {
        flag: flag,
        subType: subType,
        type: type,
        approve: approve,
        reason: reason,
      }
    }).then(resp => resp.setGroupAddRequestResp || null)
      .catch(() => null)
  }

  async getLoginInfo(): Promise<Api.GetLoginInfoResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TGetLoginInfoReq,
      getLoginInfoReq: {}
    }).then(resp => resp.getLoginInfoResp || null)
      .catch(() => null)
  }

  async getStrangerInfo(userId: Long | string | number, noCache: boolean = true): Promise<Api.GetStrangerInfoResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TGetStrangerInfoReq,
      getStrangerInfoReq: {
        userId: Number(userId),
        noCache: noCache,
      }
    }).then(resp => resp.getStrangerInfoResp || null)
      .catch(() => null)
  }

  async getFriendList(): Promise<Api.GetFriendListResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TGetFriendListReq,
      getFriendListReq: {}
    }).then(resp => resp.getFriendListResp || null)
      .catch(() => null)
  }

  async getGroupList(): Promise<Api.GetGroupListResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TGetGroupListReq,
      getGroupListReq: {}
    }).then(resp => resp.getGroupListResp || null)
      .catch(() => null)
  }

  async getGroupInfo(groupId: Long | string | number, noCache: boolean = false): Promise<Api.GetGroupInfoResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TGetGroupInfoReq,
      getGroupInfoReq: {
        groupId: Number(groupId),
        noCache: noCache,
      }
    }).then(resp => resp.getGroupInfoResp || null)
      .catch(() => null)
  }

  async getGroupMemberInfo(groupId: Long | string | number, userId: Long | string | number, noCache: boolean = false): Promise<Api.GetGroupMemberInfoResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TGetGroupMemberInfoReq,
      getGroupMemberInfoReq: {
        groupId: Number(groupId),
        userId: Number(userId),
        noCache: noCache
      }
    }).then(resp => resp.getGroupMemberInfoResp || null)
      .catch(() => null)
  }

  async getGroupMemberList(groupId: Long | string | number): Promise<Api.GetGroupMemberListResp | null> {
    return await this.sendFrameAndWait({
      frameType: FrameType.TGetGroupMemberListReq,
      getGroupMemberListReq: {
        groupId: Number(groupId),
      }
    }).then(resp => resp.getGroupMemberListResp || null)
      .catch(() => null)
  }

  async sendChannelMessage(guildId: Long | string | number, channelId: Long | string | number, msg: string | Msg, autoEscape: boolean = true): Promise<Api.SendChannelMsgResp | null> {
    if (typeof msg == 'string') {
      msg = Msg.builder().text(msg)
    }
    return await this.sendFrameAndWait({
      frameType: FrameType.TSendChannelMsgReq,
      sendChannelMsgReq: {
        guildId: guildId.toString(),
        channelId: Number(channelId),
        message: msg.messageList,
        autoEscape: autoEscape,
      }
    }).then(resp => resp.sendChannelMsgResp || null)
      .catch(() => null)
  }

  /**
     * 发送群音乐
     *
     * @param groupId 群号
     * @param musicType 音乐类型 qq、164、migu、kugou、kuwo
     * @param title 标题
     * @param brief 简介
     * @param summary 概览
     * @param url 链接
     * @param pictureUrl 图片链接
     * @param musicUrl 音乐链接
     * @return 结果
     */
  async sendGroupMusicMessage(groupId: Long | string | number, musicType: string, title: string, brief: string, summary: string, url: string, pictureUrl: string, musicUrl: string): Promise<Api.SendMusicResp | null>{
    return await this.sendFrameAndWait({
      frameType: FrameType.TSendMusicReq,
      sendMusicReq: {
        groupId: Number(groupId),
        userId: 0,
        type: musicType,
        title: title,
        brief: brief,
        summary: summary,
        url: url,
        pictureUrl: pictureUrl,
        musicUrl: musicUrl
      }
    }).then(resp => resp.sendMusicResp || null)
    .catch(() => null)
  }

 /**
     * 发送好友音乐
     *
     * @param userId 好友Id
     * @param musicType 音乐类型 qq、164、migu、kugou、kuwo
     * @param title 标题
     * @param brief 简介
     * @param summary 概览
     * @param url 链接
     * @param pictureUrl 图片链接
     * @param musicUrl 音乐链接
     * @return 结果
     */
  async sendFriendMusicMessage(userId: Long | string | number, musicType: string, title: string, brief: string, summary: string, url: string, pictureUrl: string, musicUrl: string): Promise<Api.SendMusicResp | null>{
    return await this.sendFrameAndWait({
      frameType: FrameType.TSendMusicReq,
      sendMusicReq: {
        groupId: 0,
        userId: Number(userId),
        type: musicType,
        title: title,
        brief: brief,
        summary: summary,
        url: url,
        pictureUrl: pictureUrl,
        musicUrl: musicUrl
      }
    }).then(resp => resp.sendMusicResp || null)
    .catch(() => null)
  }
}