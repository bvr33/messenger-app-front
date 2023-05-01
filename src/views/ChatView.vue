<script setup lang="ts">
import { provide } from 'vue'
//
import ChatLayout from '@/components/chat/layouts/chatLayout.vue'
import ChatsListPanel from '@/components/chat/chat-list-panel/chatsListPanel.vue'
import ListDataItem from '@/components/chat/chat-list-panel/listDataItem.vue'
import MessageBoard from '@/components/chat/messages-board/messageBoard.vue'
import MessageItem from '@/components/chat/messages-board/messageItem.vue'
import { useChatStore } from '../stores/chat.store'

//
const chatsStore = useChatStore()
provide('user-data', {
  name: 'Everett Mertz',
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/660.jpg'
})
provide('open-chat-data', chatsStore.openChatData)
</script>

<template>
  <chat-layout>
    <template #left-panel>
      <chats-list-panel>
        <list-data-item
          v-for="(chat, idx) in chatsStore.chats"
          :key="idx"
          :chat-id="idx"
          :userName="chat.name"
          :avatarSrc="chat.avatar"
        >
          {{ chat.msg }}
        </list-data-item>
      </chats-list-panel>
    </template>

    <template #board>
      <message-board>
        <message-item
          v-for="(msg, idx) in chatsStore.openChatData.messages"
          :key="idx"
          :msg-owner="msg.owner"
          >{{ msg.msg }}</message-item
        >
      </message-board>
    </template>
  </chat-layout>
</template>
