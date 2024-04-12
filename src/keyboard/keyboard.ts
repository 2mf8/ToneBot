type Row = {
    buttons?:Button[]
}

type Button = {
    id?:string
    render_data?:RenderData
    action?:Action
}

type RenderData = {
    label?:string
    visited_label?:string
    style?:number
}

type Action = {
    type?: number
    permission?:Permission
    unsupport_tips?:string
    data?:string
    reply?:boolean
    enter?:boolean
    at_bot_show_channel_list?:boolean
}

// Permission 按纽操作权限
type Permission = {
    type?:number // Type 操作权限类型
    specify_role_ids?:string[] // SpecifyRoleIDs 身份组
    specify_user_ids?:string[] // SpecifyUserIDs 指定 UserID
}

var AutoId = 1
var ActionTypeUrl = 0 // ActionTypeURL http 或 小程序 客户端识别 schema, data字段为链接
var ActionTypeCallBack = 1 // ActionTypeCallback 回调互动回调地址, data 传给互动回调地址
var ActionTypeAtBot = 2 // ActionTypeAtBot at机器人, 根据 at_bot_show_channel_list 决定在当前频道或用户选择频道,自动在输入框 @bot data
var PermissionTypeSpecifyUserIDs = 0 // PermissionTypeSpecifyUserIDs 仅指定这条消息的人可操作
var PermissionTypManager = 1 // PermissionTypManager  仅频道管理者可操作
var PermissionTypAll = 2 // PermissionTypAll  所有人可操作
var PermissionTypSpecifyRoleIDs = 3 // PermissionTypSpecifyRoleIDs 指定身份组可操作

export class KeyBoard {
    private buttons: Button[]
    private row: Row
    public rows: Row[]
    constructor() {
        this.buttons = []
        this.row = {}
        this.rows = []
    }

    static builder(): KeyBoard {
        return new KeyBoard()
    }

    commonButton(label:string, visitedLabel:string, data:string, style: number, actionType: number, permissionType: number, reply: boolean, enter: boolean, atBotShowChannelList: boolean): KeyBoard {
        let id = AutoId++
        let button = {
            id: id.toString(),
            render_data: {
                label: label,
                visited_label: visitedLabel,
                style: style,
            },
            action: {
                type: actionType,
                permission: {
                    type: permissionType // Type 操作权限类型
                },
                unsupport_tips: "您所使用的QQ版本太低，暂不支持查看该消息",
                data: data,
                reply: reply,
                enter: enter,
                at_bot_show_channel_list: atBotShowChannelList
            }
        }
        this.buttons.push(button)
        return this
    }

    textButton(label:string, visitedLabel:string, data:string, reply: boolean, enter: boolean): KeyBoard {
        let id = AutoId++
        let button = {
            id: id.toString(),
            render_data: {
                label: label,
                visited_label: visitedLabel,
                style: 0,
            },
            action: {
                type: ActionTypeAtBot,
                permission: {
                    type: PermissionTypAll // Type 操作权限类型
                },
                unsupport_tips: "您所使用的QQ版本太低，暂不支持查看该消息",
                data: data,
                reply: reply,
                enter: enter,
                at_bot_show_channel_list: false
            }
        }
        this.buttons.push(button)
        return this
    }

    textButtonAdmin(label:string, visitedLabel:string, data:string, reply: boolean, enter: boolean): KeyBoard {
        let id = AutoId++
        let button = {
            id: id.toString(),
            render_data: {
                label: label,
                visited_label: visitedLabel,
                style: 0,
            },
            action: {
                type: ActionTypeAtBot,
                permission: {
                    type: PermissionTypManager // Type 操作权限类型
                },
                unsupport_tips: "您所使用的QQ版本太低，暂不支持查看该消息",
                data: data,
                reply: reply,
                enter: enter,
                at_bot_show_channel_list: false
            }
        }
        this.buttons.push(button)
        return this
    }

    urlButton(label:string, visitedLabel:string, url:string, reply: boolean, enter: boolean): KeyBoard {
        let id = AutoId++
        let button = {
            id: id.toString(),
            render_data: {
                label: label,
                visited_label: visitedLabel,
                style: 0,
            },
            action: {
                type: ActionTypeUrl,
                permission: {
                    type: PermissionTypAll // Type 操作权限类型
                },
                unsupport_tips: "您所使用的QQ版本太低，暂不支持查看该消息",
                data: url,
                reply: reply,
                enter: enter,
                at_bot_show_channel_list: false
            }
        }
        this.buttons.push(button)
        return this
    }

    urlButtonAdmin(label:string, visitedLabel:string, url:string, reply: boolean, enter: boolean): KeyBoard {
        let id = AutoId++
        let button = {
            id: id.toString(),
            render_data: {
                label: label,
                visited_label: visitedLabel,
                style: 0,
            },
            action: {
                type: ActionTypeUrl,
                permission: {
                    type: PermissionTypManager // Type 操作权限类型
                },
                unsupport_tips: "您所使用的QQ版本太低，暂不支持查看该消息",
                data: url,
                reply: reply,
                enter: enter,
                at_bot_show_channel_list: false
            }
        }
        this.buttons.push(button)
        return this
    }

    setRow(): KeyBoard{
        let row = {
            buttons: this.buttons
        }
        this.rows.push(row)
        return this
    }

    resetRow(): KeyBoard{
        this.buttons = []
        this.row = {}
        return this
    }

    resetAutoId() {
        AutoId = 1
    }
}