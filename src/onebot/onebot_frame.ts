import {GetGroupMemberInfoResp, GroupMemberInfo, Params} from "./onebot_api"
import * as event from "../onebot/onebot_event";
export type Frame = {
  bot_id?:         number     
	ok?:            boolean     
	time?:          number    
	self_id?:        number    
	post_type?:      string
	sub_type?:       string   
	message_type?:   string   
	notice_type?:    string   
	request_type?:   string   
	meta_event_type?: string   
	status?:        any      
	retcode?:          number
  code?: number    
	data?:          any
  
  action?: string
	params?: Params
	echo?:   string

  PrivateMsgEvent?: event.PrivateMsgEvent
  GroupMsgEvent?: event.GroupMsgEvent
  GroupUploadNoticeEvent?: event.GroupUploadNoticeEvent
  GroupAddOrInviteRequestEvent?: event.GroupAddOrInviteRequestEvent
  FriendAddNoticeEvent?:event.FriendAddNoticeEvent
  FriendAddRequestEvent?:event.FriendAddRequestEvent
  GroupBanNoticeEvent?:event.GroupBanNoticeEvent
  FriendMsgRecallNoticeEvent?:event.FriendMsgRecallNoticeEvent
  GroupAdminChangeNoticeEvent?:event.GroupAdminChangeNoticeEvent
  GroupMemberDecreaseNoticeEvent?:event.GroupMemberDecreaseNoticeEvent
  GroupMemberIncreaseNoticeEvent?: event.GroupMemberIncreaseNoticeEvent
  GroupMsgRecallNoticeEvent?:event.GroupMsgRecallNoticeEvent
  GroupLuckyKingNoticeEvent?:event.GroupLuckyKingNoticeEvent
  LifeTime?: event.LifeTime
  BotHeartBeat?: event.BotHeartBeat
  GetGroupMemberInfoResp?: GetGroupMemberInfoResp
}