import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { data, generateRandomChat } from '@/mock'
import type { ChatListData } from '@/types/chatListData'
export const useChatStore = defineStore('chats', () => {
  //message chats
  const chats = ref<ChatListData[]>(data())

  const openChatId = ref<number>(0)

  const openChatData = computed(() => {
    const { avatar, name } = chats.value[openChatId.value]
    return {
      user: { avatar, name },
      messages: generateRandomChat()
    }
  })
  const setOpenChat = (id: number) => (openChatId.value = id)

  //call
  const isCallActive = ref<boolean>(false)

  const call = {
    start: () => {
      isCallActive.value = true
    },
    stop: () => {
      isCallActive.value = false
    }
  }

  return {
    call,
    isCallActive,
    chats,
    openChatData,
    setOpenChat,
    openChatId
  }
})
