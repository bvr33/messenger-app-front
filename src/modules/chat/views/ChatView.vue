<script setup lang="ts">
import { provide } from 'vue'
//
import chatLayout from '@/modules/chat/layouts/chatLayout.vue'
import chatsListPanel from '@/modules/chat/components/chat-list-panel/chatsListPanel.vue'
import messageBoard from '@/modules/chat/components/messages-board/messageBoard.vue'
import messageItem from '@/modules/chat/components/messages-board/messageItem.vue'
import { useChatStore } from '@/modules/chat/stores/chat.store'
import listDataItem from '@/modules/chat/components/chat-list-panel/listDataItem.vue'
import { userInfo } from '@/mock/data'

//
const chatsStore = useChatStore()
provide('user-data', { ...userInfo })
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
