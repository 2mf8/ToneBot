import * as Websocket from 'ws'
import Long from "long";
import {Bot} from "../bot/Bot";
import {EventHandler} from "../bot/EventHandler";


export function createBotServer(port: number) {
  let wsServer = new Websocket.Server({port})
  wsServer.on("connection", async (session, req) => {
    let xSelfId = req.headers["x-self-id"] as string
    if (!xSelfId) {
      console.error("failed to get xSelfId")
      session.close()
      return
    }
    let botId = Long.fromString(xSelfId)
    let bot = new Bot(Number(botId), session)
    Bot.bots.set(botId, bot)
    await EventHandler.handleConnect(bot)
    session.onclose = async () => {
      Bot.bots.delete(botId)
      await EventHandler.handleDisconnect(bot)
    }
  })
}
