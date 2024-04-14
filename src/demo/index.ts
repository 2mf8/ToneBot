import { EventHandler } from "../bot/EventHandler";
import { KeyBoard } from "../keyboard/keyboard";
import { MarkDown } from "../markdown/markdown";
import { createBotServer } from "../server/BotWsServer";
import { Msg } from "../util/Msg";

let port = 8082

console.log("开始启动")

EventHandler.handleConnect = async (bot) => {
  console.log(`机器人已连接: ${bot.botId.toString()}`)
}

EventHandler.handleDisconnect = async (bot) => {
  console.log(`机器人已断开: ${bot.botId.toString()}`)
}

EventHandler.handlePrivateMessage = async (bot, event) => {
  let rawMsg = event?.raw_message
  let userId = event?.user_id
  if (userId != undefined) {
    console.log(`收到私聊消息，发送者: ${userId.toString()}，内容: ${rawMsg}`)
    let msg = Msg.builder().text("hello world")
    await bot.sendPrivateMessage(userId, msg)
  }
}

EventHandler.handleGroupMessage = async (bot, event) => {
  var rawMsg = event?.raw_message
  let userId = event?.user_id
  let groupId = event?.group_id
  let message_id = event?.message_id
  var role: string

  if (userId != undefined && groupId != undefined && rawMsg != undefined){
    console.log(`收到群聊消息，群号: ${groupId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)
      if (rawMsg == "hello"){ 
        let md = MarkDown.builder()
          .h1("标题").newLine()
          .blockReference("块引用")
          .blockReference("不错")
        await bot.sendMarkDownMsg(groupId, userId, md)
      }

      if (rawMsg == "mk") {
        let md = MarkDown.builder()
          .h1("标题").newLine()
          .blockReference("块引用")
          .blockReference("不错")
        let k = KeyBoard.builder()
          .textButton("测试", "已测试", "成功", false, true)
          .urlButton("爱魔方吧", "一仝", "https://2mf8.cn", false, true)
          .setRow()
          .textButton("测试2", "已测试2", "成功", false, true)
          .setRow()
        await bot.sendMarkDownAndKeyBoardMsg(groupId, userId, md, k)
      }

      if (rawMsg == "hello"){
        let msg = Msg.builder().text("好家伙").text("\n消息来自ToneBot").at(userId)
        let a = await bot.sendGroupMessage(groupId, msg)
        console.log(a?.data.message_id)
        return
      }
  }
}


createBotServer(port)

console.log(`启动成功，端口：${port}`)

function isAdmin (role: string) { 
    return role.toLowerCase() == "owner" || role.toLowerCase() == "admin"
}