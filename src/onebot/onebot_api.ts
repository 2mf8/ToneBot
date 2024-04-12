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
	Messages: event.ForwardMsg[]
}

export interface SendMsgResponse{
	Status:  string
	RetCode: number
	Data:    SendMsgResponseData
	Echo:    string
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
	Status:  string
	RetCode: number
	Data:    GroupInfo
	Echo:    string
}

export type GroupInfo = {
	GroupId:        number
	GroupName:      string
	MemberCount:    number
	MaxMemberCount: number
}

export interface SetGroupBanResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:   string
}

export interface SetGroupKickResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupLeaveResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupWholeBanResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface DeleteMsgResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface GetMsgResp{
	Status:  string  
	RetCode: number 
	Data:    IGetMsg
	Echo:    string 
}

export type IGetMsg = {
	Time:        number
	MessageType: string
	MessageId:   number
	RealId:      number
	//Sender:      GroupSender
	//Message     []*IMessage
}

export interface GetForwardMsgResp{
	Status:  string
	RetCode: number
	//Data:    []*IMessage
	Echo:    string
}

export interface SendLikeResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupAnonymousBanResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupAdminResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupAnonymousResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupCardResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupNameResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupSpecialTitleResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetFriendAddRequestResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface SetGroupAddRequestResp{
	Status:  string
	RetCode: number
	Data:    any
	Echo:    string
}

export interface GetLoginInfoResp{
	Status:  string         
	RetCode: number          
	Data:    IGetLoginInfo 
	Echo:    string         
}

export type IGetLoginInfo = {
	UserId:   number  
	nickname: string 
}

export interface GetStrangerInfoResp{
	Status:  string            
	RetCode: number             
	Data:    IGetStrangerInfo 
	Echo:    string            
}

export type IGetStrangerInfo = {
	UserId:   number   
	nickname: string  
	sex:      string 
	age:      number   
}

export interface GetFriendListResp{
	Status:  string          
	RetCode: number           
	Data:    IGetFriendList 
	Echo:    string          
}

export type IGetFriendList = {
	UserId:   number  
	nickname: string 
	Remark:   string 
}

export interface GetGroupListResp{
	Status:  string       
	RetCode: number        
	Data:    GroupInfo[] 
	Echo:    string       
}

export interface GetGroupMemberListResp{
	Status:  string             
	RetCode: number              
	Data:    GroupMemberInfo[] 
	Echo:    string             
}

export interface GetGroupHonorInfoResp{
	Status:  string              
	RetCode: number               
	Data:    IGetGroupHonorInfo 
	Echo:    string              
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
	UserId:   number  
	nickname: string 
	Avatar:   string 
	DayCount: number  
}

export type OtherList = {
	UserId:      number  
	nickname:    string 
	Avatar:      string 
	Description: string 
}

export interface GetCookiesResp{
	Status:  string   
	RetCode: number    
	Data:    Cookies 
	Echo:    string   
}

export type Cookies = {
	Cookies: string 
}

export interface GetCRSFTokenResp{
	Status:  string 
	RetCode: number  
	Data:    Token 
	Echo:    string 
}

export type Token = {
	Token: number 
}

export interface GetCredentialsResp{
	Status:  string           
	RetCode: number            
	Data:    CookiesAndToken 
	Echo:    string           
}

export type CookiesAndToken = {
	Cookies: string 
	Token:   number  
}

export interface GetRecordResp{
	Status:  string 
	RetCode: number  
	Data:    IFile 
	Echo:    string 
}

export type IFile = {
	File: string
}

export interface GetImageResp{
	Status:  string 
	RetCode: number  
	Data:    IFile 
	Echo:    string 
}

export interface CanSendImageResp{
	Status:  string                 
	RetCode: number                  
	Data:    ICanSendImageOrRecord 
	Echo:    string                 
}

export type ICanSendImageOrRecord = {
	Yes: boolean 
}

export interface CanSendRecordResp{
	Status:  string                 
	RetCode: number                  
	Data:    ICanSendImageOrRecord
	Echo:    string                 
}

export interface GetStatusResp{
	Status:  string      
	RetCode: number       
	Data:    IGetStatus
	Echo:    string      
}

export interface IGetStatus{
	Online: boolean 
	Good:   boolean 
}

export interface GetVersioInfoResp{
	Status:  string          
	RetCode: number           
	Data:    IGetVersioInfo 
	Echo:    string          
}

export type IGetVersioInfo = {
	AppName:         string 
	AppVersion:      string 
	ProtocolVersion: string  // OneBot 标准版本，如 v11
}

export interface SetRestartResp{
	Status:  string 
	RetCode: number  
	Data:    any    
	Echo:    string 
}

export interface CleanCacheResp{
	Status:  string 
	RetCode: number  
	Data:    any    
	Echo:    string 
}

export interface SendMarkdownMsgResp{
	Status:  string 
	RetCode: number  
	Data:    string 
	Echo:    string 
}

export interface SendForwardMsgResp{
	Status:  string 
	RetCode: number  
	Data:    string 
	Echo:    string 
}
