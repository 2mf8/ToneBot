import WebSocket from "ws";
import {LRUCache} from 'lru-cache'
import {EventHandler} from "./EventHandler";
import {Msg} from "../util/Msg";
import {IdGenerator} from "../util/IdGenerator";
import * as onebot from "../onebot/onebot_frame";
import Frame = onebot.Frame;
import * as api from "../onebot/onebot_api";
import * as event from "../onebot/onebot_event";
import { MarkDown } from "../markdown/markdown";
import { KeyBoard } from "../keyboard/keyboard";

interface WaitingFrame {
  resolve: (value: Frame | PromiseLike<Frame>) => void
  reject: (reason?: any) => void
  echo: string
}

var echo = ""

export class Bot {
  botId: number
  session: WebSocket
  waitingFrames: LRUCache<string, WaitingFrame>

  static bots = new Map<number, Bot>()

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
      let frame: Frame = JSON.parse(data.toString())
      let messageData = JSON.parse(data.toString())
      frame.post_type ? messageData["post_type"] : null
      frame.message_type ? messageData["message_type"] : null
      frame.meta_event_type ? messageData["meta_event_type"] : null
      frame.notice_type ? messageData["notice_type"] : null
      frame.request_type ? messageData["request_type"] : null
      frame.sub_type ? messageData["sub_type"] : null
      if (frame.post_type == event.MetaEvent) {
        if (frame.meta_event_type == event.LifeCycle) {
          frame.LifeTime = messageData
        }
        if (frame.meta_event_type == event.HeartBeat) {
          frame.BotHeartBeat = messageData
        }
      }
      if (frame.post_type == event.Message){
        if (frame.message_type == event.Group) {
          frame.GroupMsgEvent = messageData
        }
        if (frame.message_type == event.Private) {
          frame.PrivateMsgEvent = messageData
        }
      }
      if (frame.post_type == event.Notice) {
        if (frame.notice_type == event.GroupAdmin) {
          frame.GroupAdminChangeNoticeEvent = messageData
        }
        if (frame.notice_type == event.GroupUpload) {
          frame.GroupUploadNoticeEvent = messageData
        }
        if (frame.notice_type == event.GroupDecrease) {
          frame.GroupMemberDecreaseNoticeEvent = messageData
        }
        if (frame.notice_type == event.GroupIncrease) {
          frame.GroupMemberIncreaseNoticeEvent = messageData
        }
        if (frame.notice_type == event.GroupBan) {
          frame.GroupBanNoticeEvent = messageData
        }
        if (frame.notice_type == event.FriendAdd) {
          frame.FriendAddNoticeEvent = messageData
        }
        if (frame.notice_type == event.GroupRecall) {
          frame.GroupMsgRecallNoticeEvent = messageData
        }
        if (frame.notice_type == event.FriendRecall) {
          frame.FriendMsgRecallNoticeEvent = messageData
        }
        if (frame.notice_type == event.Notice) {
          if (frame.sub_type == event.LuckyKing) {
            frame.GroupLuckyKingNoticeEvent = messageData
          }
        }
      }
      if (frame.post_type == event.ERequest) {
        if (frame.request_type == event.FriendAddRequest) {
          frame.FriendAddRequestEvent = messageData
        }
        if (frame.request_type == event.GroupAddOrInviteRequest) {
          frame.GroupAddOrInviteRequestEvent = messageData
        }
      }
      try {
        await this.handleFrame(frame)
      } catch (e) {
        console.log("failed to handle frame")
        console.error(e)
      }
    })
  }

  async handleFrame(frame: Frame) {
    frame.message_type == event.Private && await EventHandler.handlePrivateMessage(this, frame.PrivateMsgEvent)
    frame.message_type == event.Group && await EventHandler.handleGroupMessage(this, frame.GroupMsgEvent)
    frame.notice_type == event.GroupUpload && await EventHandler.handleGroupUploadNotice(this, frame.GroupUploadNoticeEvent)
    frame.notice_type == event.GroupAdmin && await EventHandler.handleGroupAdminNotice(this, frame.GroupAdminChangeNoticeEvent)
    frame.notice_type == event.GroupDecrease && await EventHandler.handleGroupDecreaseNotice(this, frame.GroupMemberDecreaseNoticeEvent)
    frame.notice_type == event.GroupIncrease && await EventHandler.handleGroupIncreaseNotice(this, frame.GroupMemberIncreaseNoticeEvent)
    frame.notice_type == event.Ban && await EventHandler.handleGroupBanNotice(this, frame.GroupBanNoticeEvent)
    frame.notice_type == event.FriendAdd && await EventHandler.handleFriendAddNotice(this, frame.FriendAddNoticeEvent)
    frame.notice_type == event.GroupRecall && await EventHandler.handleGroupRecallNotice(this, frame.GroupMsgRecallNoticeEvent)
    frame.notice_type == event.FriendRecall && await EventHandler.handleFriendRecallNotice(this, frame.FriendMsgRecallNoticeEvent)
    frame.request_type == event.FriendAddRequest && await EventHandler.handleFriendRequest(this, frame.FriendAddRequestEvent)
    frame.request_type == event.GroupAddOrInviteRequest && await EventHandler.handleGroupRequest(this, frame.GroupAddOrInviteRequestEvent)
    frame.sub_type == event.LuckyKing && await EventHandler.handleGroupNotify(this, frame.GroupLuckyKingNoticeEvent)
    let waitingFrame = this.waitingFrames.get(frame.echo as string)
    if (!!waitingFrame) {
      waitingFrame.resolve(frame)
    }
    this.waitingFrames.delete(frame.echo as string)
  }

  sendFrame(frame: Frame) {
    let sendingData = JSON.stringify(frame)
    this.session.send(sendingData)
  }

  async sendFrameAndWait(frame: Frame): Promise<Frame> {
    frame.bot_id = this.botId
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

  async sendPrivateMessage(userId: number, msg: Msg, autoEscape: boolean = true): Promise<api.SendMsgResponse | null> {
    if (typeof msg == 'string') {
      msg = Msg.builder().text(msg)
    }
    return await this.sendFrameAndWait({
        action: api.SendPrivateMsg,
        params: {
          user_id: userId,
          message: msg.messageList,
          auto_escape: autoEscape
        },
        echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async sendGroupMessage(groupId: number, msg: Msg, autoEscape: boolean = true): Promise<Frame | null> {
    if (typeof msg == 'string') {
      msg = Msg.builder().text(msg)
    }
    return await this.sendFrameAndWait({
        action: api.SendGroupMsg,
        params: {
          group_id: groupId,
          message: msg.messageList,
          auto_escape: autoEscape
        },
        echo: echo,
    }).then(resp => {
      console.log(resp)
      let a = JSON.parse(JSON.stringify(resp)) || null
      return a
    })
      .catch(() => null)
  }

  /** GMC专用*/
  async deleteMsg(messageId: number): Promise<api.DeleteMsgResp | null> {
    return await this.sendFrameAndWait({
        action: api.DeleteMsg,
        params: {
          message_id: messageId,
        },
        echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  
  async getMsg(messageId: number): Promise<api.GetMsgResp | null> {
    return await this.sendFrameAndWait({
      action: api.GetMsg,
      params: {
        message_id: messageId,
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async setGroupKick(groupId: number, userId: number, rejectAddRequest: boolean): Promise<api.SetGroupKickResp | null> {
    return await this.sendFrameAndWait({
      action: api.SetGroupKick,
      params: {
        group_id: groupId,
        user_id: userId,
        reject_add_request: rejectAddRequest
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async setGroupBan(groupId: number, userId: number, duration: number): Promise<api.SetGroupBanResp | null> {
    return await this.sendFrameAndWait({
      action: api.SetGroupBan,
      params: {
        group_id: groupId,
        user_id: userId,
        duration: duration
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async setGroupWholeBan(groupId: number, enable: boolean): Promise<api.SetGroupWholeBanResp | null> {
    return await this.sendFrameAndWait({
      action: api.SetGroupWholeBan,
      params: {
        group_id: groupId,
        enable: enable
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async setGroupCard(groupId: number, userId: number, card: string): Promise<api.SetGroupCardResp | null> {
    return await this.sendFrameAndWait({
      action: api.SetGroupCard,
      params: {
        group_id: groupId,
        user_id: userId,
        card: card
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async setGroupLeave(groupId: number, isDismiss: boolean): Promise<api.SetGroupLeaveResp | null> {
    return await this.sendFrameAndWait({
      action: api.SetGroupLeave,
      params: {
        group_id: groupId,
        is_dismiss: isDismiss
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async setGroupSpecialTitle(groupId: number, userId: number, specialTitle: string, duration: number): Promise<api.SetGroupSpecialTitleResp | null> {
    return await this.sendFrameAndWait({
      action: api.SetGroupSpecialTitle,
      params: {
        group_id: groupId,
        user_id: userId,
        special_title: specialTitle,
        duration: duration
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async setFriendAddRequest(flag: string, approve: boolean, remark: string): Promise<api.SetFriendAddRequestResp | null> {
    return await this.sendFrameAndWait({
      action: api.SetFriendAddRequest,
      params: {
        flag: flag,
        approve: approve,
        remark: remark
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async setGroupAddRequest(flag: string, subType: string, type: string, approve: boolean, reason: string): Promise<api.SetGroupAddRequestResp | null> {
    return await this.sendFrameAndWait({
      action: api.SetGroupAddRequest,
      params: {
        flag: flag,
        sub_type: subType,
        type: type,
        approve: approve,
        reason: reason
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async getLoginInfo(): Promise<api.GetLoginInfoResp | null> {
    return await this.sendFrameAndWait({
      action: api.GetLoginInfo,
      params: {},
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async getStrangerInfo(userId: number, noCache: boolean = true): Promise<api.GetStrangerInfoResp | null> {
    return await this.sendFrameAndWait({
      action: api.GetStrangerInfo,
      params: {
        user_id: userId,
        no_cache: noCache
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async getFriendList(): Promise<api.GetFriendListResp | null> {
    return await this.sendFrameAndWait({
      action: api.GetFriendList,
      params: {},
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async getGroupList(): Promise<api.GetGroupListResp | null> {
    return await this.sendFrameAndWait({
      action: api.GetGroupList,
      params: {},
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async getGroupInfo(groupId: number, noCache: boolean = false): Promise<api.GetGroupInfoResp | null> {
    return await this.sendFrameAndWait({
      action: api.GetGroupInfo,
      params: {
        group_id: groupId,
        no_cache: noCache
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async getGroupMemberInfo(groupId: number, userId: number, noCache: boolean = false): Promise<api.GetGroupMemberInfoResp | null> {
    return await this.sendFrameAndWait({
      action: api.GetGroupMemberInfo,
      params: {
        group_id: groupId,
        user_id: userId,
        no_cache: noCache
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async getGroupMemberList(groupId: number): Promise<api.GetGroupMemberListResp | null> {
    return await this.sendFrameAndWait({
      action: api.GetGroupMemberList,
      params: {
        group_id: groupId
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async sendGroupForward(groupId: number, forwardMsg: api.ForwardParams): Promise<api.SendForwardMsgResp | null>{
    return await this.sendFrameAndWait({
      action: api.SendForwardMsg,
      params: {
        messages: forwardMsg.Messages
      },
      echo: echo,
    }).then(resp => JSON.parse(JSON.stringify(resp)) || null)
      .catch(() => null)
  }

  async sendGroupForwardMsg(groupId: number, forwardMsg: api.ForwardParams){
    let sgf = await this.sendGroupForward(groupId, forwardMsg)
    if (sgf != null){
       let msg = Msg.builder().forward(sgf.Data)
       await this.sendGroupMessage(groupId, msg)
    }
  }

  async sendMarkDownMsg(groupId: number, userId: number, markdown: MarkDown){
    let nickname = "[]"
    let gi = await this.getGroupMemberInfo(groupId, this.botId, false)
    if (gi != null){
      nickname = gi.data.nickname
    }
          if (markdown.markdown.length == 0) {
            markdown.markdown.push("# 标题 ")
          }
          let md = `{\"content\":\"${markdown.markdown.join().replace(/,/g, "")}\"}`
          let smd = await this.sendFrameAndWait({
            action: api.SendForwardMsg,
            params: {
              messages: [{
                type: "node",
                data: {
                  "name": nickname,
                  "uin": this.botId.toString(),
                  "content": [{
                    type: "markdown",
                    data: {
                      "content": md
                    }
                  }]
                }
              }]
            },
            echo: echo,
          }).then(resp => resp || null)
          .catch(()=>{})
          if (smd != null) {
            let msg = Msg.builder().longMsg(smd.data)
            KeyBoard.builder().resetAutoId()
            if (groupId > 0) {
              return await this.sendGroupMessage(groupId, msg)
            }
            if (groupId == 0 && userId > 0){
              return await this.sendPrivateMessage(userId, msg)
            }
          } 
    }

    async sendMarkDownAndKeyBoardMsg(groupId: number, userId: number, markdown: MarkDown, keyboard: KeyBoard){
      let nickname = "[]"
      let gi = await this.getGroupMemberInfo(groupId, this.botId, false)
      if (gi != null){
        nickname = gi.data.nickname
      }
      if (markdown.markdown.length == 0) {
        markdown.markdown.push("# 标题 ")
      }
      let md = `{\"content\":\"${markdown.markdown.join().replace(/,/g, "")}\"}`
      let smd = await this.sendFrameAndWait({
        action: api.SendForwardMsg,
        params: {
          messages: [{
            type: "node",
            data: {
              "name": nickname,
              "uin": this.botId.toString(),
              "content": [{
                type: "markdown",
                data: {
                  "content": md
                }
              },{
                type: "keyboard",
                data:{
                  "content": {
                    "rows": keyboard.rows
                  }
                }
              }]
            }
          }]
        },
        echo: echo,
      }).then(resp => resp || null)
      .catch(()=>{})
      if (smd != null) {
        let msg = Msg.builder().longMsg(smd.data)
        KeyBoard.builder().resetAutoId()
        if (groupId > 0) {
          return await this.sendGroupMessage(groupId, msg)
        }
        if (groupId == 0 && userId > 0){
          return await this.sendPrivateMessage(userId, msg)
        }
      } 
  }

  async sendMarkDownWithAtMsg(groupId: number, userId: number, markdown: MarkDown){
    let nickname = "[]"
      let gi = await this.getGroupMemberInfo(groupId, this.botId, false)
      if (gi != null){
        nickname = gi.data.nickname
      }
    if (markdown.markdown.length == 0) {
      markdown.markdown.push("# 标题 ")
    }
    let md = `{\"content\":\"${markdown.markdown.join().replace(/,/g, "")}\"}`
    let smd = await this.sendFrameAndWait({
      action: api.SendForwardMsg,
      params: {
        messages: [{
          type: "at",
          data: {
            "qq": userId.toString()
          }
        },
        {
          type: "node",
          data: {
            "name": nickname,
            "uin": this.botId.toString(),
            "content": [{
              type: "markdown",
              data: {
                "content": md
              }
            }]
          }
        }]
      },
      echo: echo,
    }).then(resp => resp || null)
    .catch(()=>{})
    if (smd != null) {
      let msg = Msg.builder().longMsg(smd.data)
      KeyBoard.builder().resetAutoId()
      if (groupId > 0) {
        return await this.sendGroupMessage(groupId, msg)
      }
      if (groupId == 0 && userId > 0){
        return await this.sendPrivateMessage(userId, msg)
      }
    } 
  }

  async sendMarkDownAndKeyBoardWithAtMsg(groupId: number, userId: number, markdown: MarkDown, keyboard: KeyBoard){
    let nickname = "[]"
      let gi = await this.getGroupMemberInfo(groupId, this.botId, false)
      if (gi != null){
        nickname = gi.data.nickname
      }
    if (markdown.markdown.length == 0) {
      markdown.markdown.push("# 标题 ")
    }
    let md = `{\"content\":\"${markdown.markdown.join().replace(/,/g, "")}\"}`
    let smd = await this.sendFrameAndWait({
      action: api.SendForwardMsg,
      params: {
        messages: [{
          type: "at",
          data: {
            "qq": userId.toString()
          }
        },
        {
          type: "node",
          data: {
            "name": nickname,
            "uin": this.botId.toString(),
            "content": [{
              type: "markdown",
              data: {
                "content": md
              }
            },{
              type: "keyboard",
              data:{
                "content": {
                  "rows": keyboard.rows
                }
              }
            }]
          }
        }]
      },
      echo: echo,
    }).then(resp => resp || null)
    .catch(()=>{})
    if (smd != null) {
      let msg = Msg.builder().longMsg(smd.data)
      KeyBoard.builder().resetAutoId()
      if (groupId > 0) {
        return await this.sendGroupMessage(groupId, msg)
      }
      if (groupId == 0 && userId > 0){
        return await this.sendPrivateMessage(userId, msg)
      }
    } 
  }
}