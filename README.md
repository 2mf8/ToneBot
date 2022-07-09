# 使用说明

## 所需环境

[nodejs](https://nodejs.org/)

推荐安装版本: LTS (长期支持版)

## 运行方法(下载源码版)

下载源码并解压，然后进入解压目录

安装`npm install`

运行`npm run start`

运行 [pbrq](https://github.com/ProtobufBot/pbrq/releases) ，登陆机器人QQ

## 基于现有项目开发
可以参考 `demo` 里的例子进行开发

或者基于 [GroupAdminForRQ](https://github.com/2mf8/GroupAdminForRQ) 进行开发

## 用Javascript开发

安装`npm i tspbbot-for-rq`
```javascript
let {EventHandler, Msg, createBotServer} = require("tspbbot-for-rq");

let port = 8081

console.log("开始启动")

EventHandler.handleConnect = async (bot) => {
  console.log(`机器人已连接: ${bot.botId.toString()}`)
}

EventHandler.handleDisconnect = async (bot) => {
  console.log(`机器人已断开: ${bot.botId.toString()}`)
}

EventHandler.handlePrivateMessage = async (bot, event) => {
  let rawMsg = event.rawMessage
  let userId = event.userId
  console.log(`收到私聊消息，发送者: ${userId.toString()}，内容: ${rawMsg}`)
  await bot.sendPrivateMessage(userId, "hello world", false)
}

EventHandler.handleGroupMessage = async (bot, event) => {
  var rawMsg = event.rawMessage
  let userId = event.userId
  let groupId = event.groupId
  let message_id = event.messageId
  console.log(`收到群聊消息，群号: ${groupId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)
  if (rawMsg == "撤回" && message_id != undefined){
  await bot.deleteMsg(message_id)
  return
  }
  //if (rawMsg !== "hello") return
  if (rawMsg == "hello"){
  let msg = Msg.builder().text("world")
  await bot.sendGroupMessage(groupId, msg)
  return
  }
}

createBotServer(port)

console.log(`启动成功，端口：${port}`)
```
## 用Typescript开发

安装`npm i tspbbot-for-rq`
```typescript
import { EventHandler } from "tspbbot-for-rq/lib/bot/EventHandler";
import { createBotServer } from "tspbbot-for-rq/lib/server/BotWsServer";
import { Msg } from "tspbbot-for-rq/lib/util/Msg";

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
  if (userId != undefined && groupId != undefined && rawMsg != undefined){
  console.log(`收到群聊消息，群号: ${groupId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)
    if (rawMsg == "撤回" && message_id != undefined){
    await bot.deleteMsg(message_id)
    return
    }
    //if (rawMsg !== "hello") return
    if (rawMsg == "hello"){
    let msg = Msg.builder().text("world")
    await bot.sendGroupMessage(groupId, msg)
    return
  }
  }
}

createBotServer(port)

console.log(`启动成功，端口：${port}`)
```