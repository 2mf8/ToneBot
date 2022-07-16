import { EventHandler } from "../bot/EventHandler";
import { createBotServer } from "../server/BotWsServer";
import { Msg } from "../util/Msg";

let port = 8081

console.log("开始启动")

EventHandler.handleConnect = async (bot) => {
  console.log(`机器人已连接: ${bot.botId.toString()}`)
}

EventHandler.handleDisconnect = async (bot) => {
  console.log(`机器人已断开: ${bot.botId.toString()}`)
}

EventHandler.handlePrivateMessage = async (bot, event) => {
  let rawMsg = event?.rawMessage
  let userId = event?.userId
  if (userId != undefined) {
    console.log(`收到私聊消息，发送者: ${userId.toString()}，内容: ${rawMsg}`)
    await bot.sendPrivateMessage(userId, "hello world")
  }
}

EventHandler.handleGroupMessage = async (bot, event) => {
  var rawMsg = event?.rawMessage
  let userId = event?.userId
  let groupId = event?.groupId
  let message_id = event?.messageId
  var role: string
  if (userId != undefined && groupId != undefined && rawMsg != undefined){
    console.log(`收到群聊消息，群号: ${groupId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)
    let userInfo = bot.getGroupMemberInfo(groupId, userId, true)
    userInfo.then(
      (resp) => {
        let respRole = resp?.role
        if (respRole == null){
          role = "role"
        } else {
          role = respRole
        }
        //不以.开头的消息直接结束
        if (groupId != undefined && rawMsg != undefined){
          if(!rawMsg.startsWith(".")) {
            return
          }

          rawMsg = rawMsg.substring(".".length)

          rawMsg = rawMsg.replace("<at qq=\"","").trim()
          rawMsg = rawMsg.replace("\"/>", " ").trim()
          while(rawMsg.indexOf("  ")> -1){
              rawMsg = rawMsg.replace("  ", " ")
          }
          //禁言功能，成功时会有小灰字提示，故机器人不发送成功消息
          if (rawMsg.startsWith("jin") && isAdmin(role)) {
          //if (rawMsg.startsWith("jin") && userId == 2693678434) {
              rawMsg = rawMsg.substring("jin".length).trim()
              let split = rawMsg.split(" ")

              if(split.length != 2) {
                  bot.sendGroupMessage(groupId,"禁言格式错误", false)
                  return
              }
              let jinId = Number(split[0].trim())
              if (jinId == 0) {
                  bot.sendGroupMessage(groupId,"禁言对象错误", false)
                  return
              }
              let str = split[1]
                      .replace("天","d")
                      .replace("小时","h")
                      .replace("时","h")
                      .replace("分","m")
                      .replace("秒","s")
                      .trim() + "s"
              let m = new RegExp(/([0-9]+)([dhms])/g)
              let rs = str.match(m)
              var duration = 0
              if (rs == null) {
                return
              }
              rs.forEach(m =>{
                if(m.indexOf("s") > -1){
                  duration += Number(m.replace("s",""))
                }
                if(m.indexOf("m") > -1){
                  duration += Number(m.replace("m","")) * 60
                }
                if(m.indexOf("h") > -1){
                  duration += Number(m.replace("h","")) * 60 * 60
                }
                if(m.indexOf("d") > -1){
                  duration += Number(m.replace("d","")) * 60 * 60 * 24
                }
              })
              if (duration <= 0){
                  bot.setGroupBan(groupId,jinId,0)
                  return
              }

              if (duration < 30 * 60 * 60 * 24) {
                  bot.setGroupBan(groupId,jinId,duration)
                  return
              } else {
                  bot.sendGroupMessage(groupId,"禁言时间超过最大允许范围")
                  return
              }
          }

          //踢人功能，成功时群人数会变化，故机器人不发送成功消息
          if((rawMsg.startsWith("t") || rawMsg.startsWith("T")) && isAdmin(role)){
              let rejectAddAgain = rawMsg.startsWith("T")
              rawMsg = rawMsg.replace("T","t").substring("t".length).trim()
              var tId = Number(rawMsg)
              if(tId == 0){
                  bot.sendGroupMessage(groupId,"踢出对象错误", false)
                  return
              }
              bot.setGroupKick(groupId,tId,rejectAddAgain)
          }
        }
      })
      if (rawMsg == "撤回" && message_id != undefined){
        await bot.deleteMsg(message_id)
        return
      }
      //if (rawMsg !== "hello") return
      if (rawMsg == "hello"){
      let msg = Msg.builder().text("好家伙")
      await bot.sendGroupMessage(groupId, msg)
      return
      
    }
  }
}

EventHandler.handleChannelMessage = async (bot, event) => {
  let guildId = event?.guildId
  let channelId = event?.channelId
  let userId = event?.sender?.tinyId
  let rawMsg = event?.rawMessage
  if (guildId != undefined && channelId != undefined && userId != undefined) {
    console.log(`收到频道消息，Guilid: ${guildId.toString()}，ChannelId：${channelId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)
    await bot.sendChannelMessage(guildId, channelId, "成功", false)
  }
}


createBotServer(port)

console.log(`启动成功，端口：${port}`)

function isAdmin (role: string) { 
    return role.toLowerCase() == "owner" || role.toLowerCase() == "admin"
}