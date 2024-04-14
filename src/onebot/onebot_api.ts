import * as event from "../onebot/onebot_event";
type ActionType = string
const 
  	SendPrivateMsg:       ActionType = "send_private_msg",
	SendGroupMsg:         ActionType = "send_group_msg",
	SendMsg:              ActionType = "send_msg",
	SendForwardMsg:       ActionType = "send_forward_msg",
	DeleteMsg:            ActionType = "delete_msg",
	GetMsg:               ActionType = "get_msg",
	GetForwardMsg:        ActionType = "get_forward_msg",
	SendLike:             ActionType = "send_like",
	SetGroupKick:         ActionType = "set_group_kick",
	SetGroupBan:          ActionType = "set_group_ban",
	SetGroupAnonymousBan: ActionType = "set_group_anonymous_ban",
	SetGroupWholeBan:     ActionType = "set_group_whole_ban",
	SetGroupAdmin:        ActionType = "set_group_admin",
	SetGroupAnonymous:    ActionType = "set_group_anonymous",
	SetGroupCard:         ActionType = "set_group_card",
	SetGroupName:         ActionType = "set_group_name",
	SetGroupLeave:        ActionType = "set_group_leave",
	SetGroupSpecialTitle: ActionType = "set_group_special_title",
	SetFriendAddRequest:  ActionType = "set_friend_add_request",
	SetGroupAddRequest:   ActionType = "set_group_add_request",
	GetLoginInfo:         ActionType = "get_login_info",
	GetStrangerInfo:      ActionType = "get_stranger_info",
	GetFriendList:        ActionType = "get_friend_list",
	GetGroupInfo:         ActionType = "get_group_info",
	GetGroupList:         ActionType = "get_group_list",
	GetGroupMemberInfo:   ActionType = "get_group_member_info",
	GetGroupMemberList:   ActionType = "get_group_member_list",
	GetGroupHonorInfo:    ActionType = "get_group_honor_info",
	GetGookies:           ActionType = "get_cookies",
	GetGsrfToken:         ActionType = "get_csrf_token",
	GetGredentials:       ActionType = "get_credentials",
	GetGecord:            ActionType = "get_record",
	GetImage:             ActionType = "get_image",
	CanSendImage:         ActionType = "can_send_image",
	CanSendRecord:        ActionType = "can_send_record",
	GetStatus:            ActionType = "get_status",
	GetVersioInfo:        ActionType = "get_version_info",
	SetRestart:           ActionType = "set_restart",
	CleanCache:           ActionType = "clean_cache",
	GroupPoke:            ActionType = "group_poke",
	FriendPoke:           ActionType = "friend_poke"

export {ActionType,SendGroupMsg,SendForwardMsg,SendPrivateMsg,SendMsg,DeleteMsg,GetMsg,GetForwardMsg,SendLike,SetGroupKick, SetGroupBan,SetGroupAnonymous, SetGroupAnonymousBan, SetGroupWholeBan,
  SetGroupAdmin,SetGroupCard,SetGroupName,SetGroupLeave, SetGroupSpecialTitle,SetFriendAddRequest,SetGroupAddRequest,GetLoginInfo,GetStrangerInfo,GetFriendList,GetGroupInfo,GetGecord,GetGookies,
  GetGredentials,GetGroupHonorInfo,GetGroupList,GetGroupMemberInfo,GetGroupMemberList,GetGsrfToken,GetImage,GetStatus,GetVersioInfo,CanSendImage,CanSendRecord,SetRestart,CleanCache,GroupPoke,FriendPoke}


export type Params = {
	user_id?:           number
	group_id?:          number
	message?:          event.IMessage[]
	messages?:         any
	message_type?:      string
	auto_escape?:       boolean
	message_id?:        number
	id?:               string
	reject_add_request?: boolean
	duration?:         number
	enable?:           boolean
	card?:             string
	group_name?:        string
	flag?:             string
	approve?:          boolean
	remark?:           string
	is_dismiss?:        boolean
	special_title?:     string
	sub_type?:          string
	type?:             string
	reason?:           string
	nickname?:         string
	no_cache?:          boolean
	domain?:           string
	file?:             string
	delay?:            number
	out_format?:        string
	times?:            number
	anonymous?:        event.Anonymous
	anonymous_flag?:    string
	name?:             string
	uin?:              string
	content?:          string
}

export type ForwardParams = {
	messages: event.ForwardMsg[]
}

export interface SendMsgResponse{
	status:  string
	retcode: number
	data:    SendMsgResponseData
	echo:    string
}
export type SendMsgResponseData = {
	message_id: number
}

export type GetGroupMemberInfoResp = {
	status:  string
	retcode?: number
	data:    GroupMemberInfo
	echo?:    string
}

export type GroupMemberInfo = {
	group_id:         number
	user_id:          number
	nickname:        string
	card:            string
	sex:             string
	age:             number
	area:            string
	join_time:        number
	last_sent_time:    number
	level:           string
	role:            string
	unfriendly:      boolean
	title:           string
	title_expire_time: number
	card_changeable:  boolean
}

export interface GetGroupInfoResp{
	status:  string
	retcode: number
	data:    GroupInfo
	echo:    string
}

export type GroupInfo = {
	group_id:        number
	group_name:      string
	member_count:    number
	max_member_count: number
}

export interface SetGroupBanResp{
	status:  string
	retcode: number
	data:    any
	echo:   string
}

export interface SetGroupKickResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupLeaveResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupWholeBanResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface DeleteMsgResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface GetMsgResp{
	status:  string  
	retcode: number 
	data:    IGetMsg
	echo:    string 
}

export type IGetMsg = {
	time:        number
	message_type: string
	message_id:   number
	real_id:      number
	sender:      event.Groupsender
	message:     event.IMessage[]
}

export interface GetForwardMsgResp{
	status:  string
	retcode: number
	data:    event.IMessage[]
	echo:    string
}

export interface SendLikeResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupAnonymousBanResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupAdminResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupAnonymousResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupCardResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupNameResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupSpecialTitleResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetFriendAddRequestResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface SetGroupAddRequestResp{
	status:  string
	retcode: number
	data:    any
	echo:    string
}

export interface GetLoginInfoResp{
	status:  string         
	retcode: number          
	data:    IGetLoginInfo 
	echo:    string         
}

export type IGetLoginInfo = {
	user_id:   number  
	nickname: string 
}

export interface GetStrangerInfoResp{
	status:  string            
	retcode: number             
	data:    IGetStrangerInfo 
	echo:    string            
}

export type IGetStrangerInfo = {
	user_id:   number   
	nickname: string  
	sex:      string 
	age:      number   
}

export interface GetFriendListResp{
	status:  string          
	retcode: number           
	data:    IGetFriendList 
	echo:    string          
}

export type IGetFriendList = {
	user_id:   number  
	nickname: string 
	remark:   string 
}

export interface GetGroupListResp{
	status:  string       
	retcode: number        
	data:    GroupInfo[] 
	echo:    string       
}

export interface GetGroupMemberListResp{
	status:  string             
	retcode: number              
	data:    GroupMemberInfo[] 
	echo:    string             
}

export interface GetGroupHonorInfoResp{
	status:  string              
	retcode: number               
	data:    IGetGroupHonorInfo 
	echo:    string              
}

export type IGetGroupHonorInfo = {
	GroupId:          number             
	CurrentTalkative: CurrentTalkative   // 当前龙王，仅 type 为 talkative 或 all 时有数据
	TalkativeList:    OtherList             // 历史龙王，仅 type 为 talkative 或 all 时有数据
	PerformerList:    OtherList            // 群聊之火，仅 type 为 performer 或 all 时有数据
	LegendList:       OtherList                // 群聊炽焰，仅 type 为 legend 或 all 时有数据
	StrongNewbieList: OtherList         // 冒尖小春笋，仅 type 为 strong_newbie 或 all 时有数据
	EmotionList:      OtherList              // 快乐之源，仅 type 为 emotion 或 all 时有数据
}

export type CurrentTalkative = {
	user_id:   number  
	nickname: string 
	avatar:   string 
	day_count: number  
}

export type OtherList = {
	user_id:      number  
	nickname:    string 
	avatar:      string 
	description: string 
}

export interface GetCookiesResp{
	status:  string   
	retcode: number    
	data:    Cookies 
	echo:    string   
}

export type Cookies = {
	cookies: string 
}

export interface GetCRSFTokenResp{
	status:  string 
	retcode: number  
	data:    Token 
	echo:    string 
}

export type Token = {
	token: number 
}

export interface GetCredentialsResp{
	status:  string           
	retcode: number            
	data:    CookiesAndToken 
	echo:    string           
}

export type CookiesAndToken = {
	cookies: string 
	token:   number  
}

export interface GetRecordResp{
	status:  string 
	retcode: number  
	data:    IFile 
	echo:    string 
}

export type IFile = {
	file: string
}

export interface GetImageResp{
	status:  string 
	retcode: number  
	data:    IFile 
	echo:    string 
}

export interface CanSendImageResp{
	status:  string                 
	retcode: number                  
	data:    ICanSendImageOrRecord 
	echo:    string                 
}

export type ICanSendImageOrRecord = {
	yes: boolean 
}

export interface CanSendRecordResp{
	status:  string                 
	retcode: number                  
	data:    ICanSendImageOrRecord
	echo:    string                 
}

export interface GetStatusResp{
	status:  string      
	retcode: number       
	data:    IGetStatus
	echo:    string      
}

export interface IGetStatus{
	online: boolean 
	good:   boolean 
}

export interface GetVersioInfoResp{
	status:  string          
	retcode: number           
	data:    IGetVersioInfo 
	echo:    string          
}

export type IGetVersioInfo = {
	app_name:         string 
	app_version:      string 
	protocol_version: string  // OneBot 标准版本，如 v11
}

export interface SetRestartResp{
	status:  string 
	retcode: number  
	data:    any    
	echo:    string 
}

export interface CleanCacheResp{
	status:  string 
	retcode: number  
	data:    any    
	echo:    string 
}

export interface SendMarkdownMsgResp{
	status:  string 
	retcode: number  
	data:    string 
	echo:    string 
}

export interface SendForwardMsgResp{
	status:  string 
	retcode: number  
	data:    string 
	echo:    string 
}
