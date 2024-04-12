# 使用说明

## 所需环境

[nodejs](https://nodejs.org/)

推荐安装版本: LTS (长期支持版)

## 最新版本
最新版：[![npm](https://img.shields.io/npm/v/tonebot.svg)](https://www.npmjs.com/package/tonebot)

## 运行方法(下载源码版)

下载源码并解压，然后进入解压目录

安装`npm install`

运行`npm run start`

运行 [Lagrange.Core](https://github.com/KonataDev/Lagrange.Core/actions) ，登陆机器人账号

## 基于现有项目开发
可以参考 `demo` 里的例子进行开发

## 用Javascript开发

安装`npm i tonebot`
```javascript
let {EventHandler, createBotServer, Msg} = require("tonebot")

let port = 8082

console.log("开始启动")

EventHandler.handleConnect = async (bot) => {
  console.log(`机器人已连接: ${bot.botId.toString()}`)
}

EventHandler.handleDisconnect = async (bot) => {
  console.log(`机器人已断开: ${bot.botId.toString()}`)
}

EventHandler.handlePrivateMessage = async (bot, event) => {
  let rawMsg = event.raw_message
  let userId = event.user_id
  console.log(`收到私聊消息，发送者: ${userId.toString()}，内容: ${rawMsg}`)
  let msg = Msg.builder().text("hello world")
  await bot.sendPrivateMessage(userId, msg)
}

EventHandler.handleGroupMessage = async (bot, event) => {
    var rawMsg = event.raw_message
    let userId = event.user_id
    let groupId = event.group_id
    console.log(`收到群聊消息，群号: ${groupId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)

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

安装`npm i tonebot`
```typescript
import {EventHandler, createBotServer, Msg} from "tonebot";

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

  if (userId != undefined && groupId != undefined && rawMsg != undefined){
    console.log(`收到群聊消息，群号: ${groupId.toString()}，发送者: ${userId.toString()}，内容: ${rawMsg}`)

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