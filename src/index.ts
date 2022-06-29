export {EventHandler} from "./bot/EventHandler";
export {Msg} from "./util/Msg";
export {createBotServer} from "./server/BotWsServer";
export {Bot} from "./bot/Bot";

import { EventHandler } from "./bot/EventHandler";
import { createBotServer } from "./server/BotWsServer";
import { Msg } from "./util/Msg";

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
  let rawMsg = event?.rawMessage
  let userId = event?.userId
  let groupId = event?.groupId
  let message_id = event?.messageId
  if (userId != undefined && groupId != undefined){
    console.log(`收到群聊消息，群号: ${groupId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)
    if (rawMsg == "撤回" && message_id != undefined){
        await bot.deleteMsg(message_id)
    }
    if (rawMsg !== "hello") return
    let msg = Msg.builder().text("好家伙")
    await bot.sendGroupMessage(groupId, msg)
  }
}

createBotServer(port)

console.log(`启动成功，端口：${port}`)
