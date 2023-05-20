import { chatList, messagesList } from '@/mock/data'
import type { ChatListData } from '@/types/chatListData'

const normalizedData = chatList.map(({ msg, lastMsgOwnerName, ...data }): ChatListData => {
  return {
    ...data,
    msg: `${lastMsgOwnerName}: ${msg}`.trim()
  }
})
export const data = () => {
  return [...normalizedData]
}

const randomNumber = (min: number = 0, max: number = 1) => {
  return Math.floor(Math.random() * max + min)
}

export const generateRandomChat = () => {
  const chat = []
  const MessageCount = randomNumber(5, 80)
  for (let i = 0; i <= MessageCount; i++) {
    const singleMessage = {
      msg: messagesList[randomNumber(0, messagesList.length)],
      owner: Math.random() > 0.5 ? true : false
    }
    chat.push(singleMessage)
  }
  return chat
}
