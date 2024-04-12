type PostType = string
type MsgEventType = string
type PrivateSubEventType = string
type GroupSubEventType = string
type SexType = string
type NoticeType = string
type MetaEventType = string
type HonorType = string
type ReqType = string

const
Message:   PostType = "message",
Notice:    PostType = "notice",
ERequest:  PostType = "request",
MetaEvent: PostType = "meta_event",

LifeCycle: MetaEventType = "lifecycle",
HeartBeat: MetaEventType = "heartbeat",

Private: MsgEventType = "private",
Group:   MsgEventType = "group",

SubFriend: PrivateSubEventType = "friend",
SubGroup:  PrivateSubEventType = "group",
SubOther:  PrivateSubEventType = "other",

SubNormal:    GroupSubEventType = "normal",
SubAnonymous: GroupSubEventType = "anonymous",
SubNotice:    GroupSubEventType = "notice",
SetAdmin:     GroupSubEventType = "set",
RemoveAdmin:  GroupSubEventType = "unset",
Leave:        GroupSubEventType = "leave",    // 主动退群
Kick:         GroupSubEventType = "kick",    // 成员被踢
KickMe:       GroupSubEventType = "kick_me", // 登录号被踢
Approve:      GroupSubEventType = "approve", // 管理员已同意入群
Invite:       GroupSubEventType = "invite",  // 管理员邀请入群
Ban:          GroupSubEventType = "ban",
LiftBan:      GroupSubEventType = "lift_ban",
Poke:         GroupSubEventType = "poke",
LuckyKing:    GroupSubEventType = "lucky_king",
Honor:        GroupSubEventType = "honor",

Male:    SexType = "male",
Female:  SexType = "female",
Unknown: SexType = "unknown",

GroupUpload:   NoticeType = "group_upload",
GroupAdmin:    NoticeType = "group_admin",
GroupDecrease: NoticeType = "group_decrease",
GroupIncrease: NoticeType = "group_increase",
GroupBan:      NoticeType = "group_ban",
FriendAdd:     NoticeType = "friend_add",
GroupRecall:   NoticeType = "group_recall",
FriendRecall:  NoticeType = "friend_recall",
Notify:        NoticeType = "notify",

Talkative: HonorType = "talkative",
Performer: HonorType = "performer",
Emotion:   HonorType = "emotion",

FriendAddRequest:        ReqType = "friend",
GroupAddOrInviteRequest: ReqType = "group"

export {Message,Notice,ERequest,MetaEvent,LifeCycle,HeartBeat,Performer,Private,Group,SubAnonymous,SubFriend,SubGroup,SubNormal,SubNotice,SubOther,SetAdmin,RemoveAdmin,Leave,LiftBan,Kick,KickMe,
  Approve,Invite,Ban,Poke,LuckyKing,Honor,Male,Female,FriendAdd,FriendAddRequest,Unknown,GroupAddOrInviteRequest,GroupAdmin,GroupBan,GroupDecrease,GroupIncrease,GroupRecall,GroupUpload,FriendRecall,
  Notify,Talkative,Emotion
}

export type Event = {
	time:     number  
	self_id:   number  
	post_type: string 
}

export type Privatesender = {
	user_id:   number   
	nickname: string  
	sex:      SexType 
	age:      number   
}

export type PrivateMsgEvent = {
	event:       Event
	message_type: string         
	sub_type:     string         
	message_id:   number          
	user_id:      number          
	message:     IMessage[]    
	raw_message:  string         
	font:        number          
	sender:      Privatesender 
}


export type PrivateQuickOperate = {
	reply:      string 
	auto_escape: boolean   
}

export type Anonymous = {
	id:   number  
	name: string 
	flag: string 
}

export type Groupsender = {
	user_id:   number  
	nickname: string 
	card:     string 
	sex:      string 
	age:      number  
	area:     string 
	level:    string 
	role:     string 
	title:    string 
}
export type GroupMsgEvent = {
	event:       Event
	message_type: string       
	sub_type:     string       
	message_id:   number        
	group_id:     number        
	user_id:      number        
	anonymous:   Anonymous   
	message:     IMessage[]  
	raw_message:  string       
	font:        number        
	sender:      Groupsender 
}
export type GroupQuickOperate = {
	reply:       string 
	auto_escape:  boolean   
	at_sender:    boolean   
	delete:      boolean   
	kick:        boolean   
	ban:         boolean  
	ban_duration: number  
}

export type File = {
	id:   number  
	name: string 
	size: number  
}

export type IMessage = {
	type: string         
	data: { [key: string]: string }
}

export type ForwardMsg = {
	name:    string 
	uin:     string 
	content: IMessage   
}

export type LifeTime = {
	event:       Event
	meta_event_type: string 
	sub_type:       string 
}

export type BotHeartBeat = {
    event:       Event
	meta_event_type: string           
	status:        HeartBeatStatus 
}

export type HeartBeatStatus =  {
	app_initialized: boolean 
	app_enabled:     boolean 
	app_good:        boolean 
	online:         boolean 
	good:           boolean 
}

export type GroupUploadNoticeEvent = {
	event:       Event
	notice_type: NoticeType
	group_id:    number       
	user_id:     number       
	file:       UploadFile 
}

export type UploadFile = {
	id:    number  
	name:  string 
	size:  number  
	busid: number  
}

export type GroupAdminChangeNoticeEvent = {
	event:       Event
	notice_type: NoticeType 
	sub_type:    string     
	group_id:    number      
	user_id:     number      
}

export type GroupMemberDecreaseNoticeEvent = {
	event:       Event
	notice_type: NoticeType 
	sub_type:    string     
	group_id:    number      
	operator_id: number      
	user_id:     number      
}

export type GroupMemberIncreaseNoticeEvent = {
	event:       Event
	notice_type: NoticeType 
	sub_type:    string     
	group_id:    number      
	operator_id: number      
	user_id:     number      
}

export type GroupBanNoticeEvent = {
	event:       Event
	notice_type: NoticeType 
	sub_type:    string     
	group_id:    number      
	operator_id: number      
	user_id:     number      
	duration:   number      
}

export type FriendAddNoticeEvent = {
	event:       Event
	notice_type: NoticeType 
	user_id:     number      
}

export type GroupMsgRecallNoticeEvent =  {
	event:       Event
	notice_type:  NoticeType 
	group_id:    number      
	operator_id: number      
	user_id:     number      
	message_id:  number      
}

export type FriendMsgRecallNoticeEvent =  {
	event:Event
	notice_type: NoticeType 
	user_id:     number      
	message_id:  number      
}

export type GroupPokeNoticeEvent = {
	event:Event
	notice_type: NoticeType 
	sub_type:    string     
	group_id:    number      
	user_id:     number      
	target_id:   number      
}

export type GroupLuckyKingNoticeEvent = {
	event:Event
	notice_type: NoticeType 
	sub_type:    string     
	group_id:    number      
	user_id:     number      
	target_id:   number      
}

export type GroupMemberHonorChangeNoticeEvent = {
	event:Event
	notice_type: NoticeType 
	sub_type:    string     
	group_id:    number      
	HonorType:  HonorType  
	user_id:     number      
}

export type FriendAddRequestEvent = {
	event:Event
	request_type: string 
	user_id:      number  
	comment:     string 
	flag:        string 
}

export type GroupAddOrInviteRequestEvent = {
	event:Event
	request_type: string 
	sub_type:     string 
	group_id:     number  
	user_id:      number  
	comment:     string 
	flag:        string 
}
