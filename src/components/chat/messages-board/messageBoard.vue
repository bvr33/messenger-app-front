<script lang="ts" setup>
import CallBoard from '@/components/chat/call-board/callBoard.vue'
import ChatInfoBar from '@/components/chat/messages-board/info-bar/chatInfoBar.vue'
import MessageMediaBar from '@/components/chat/messages-board/message-media-bar/messageMediaBar.vue'
import { useChatStore } from '@/stores/chat.store'

const chatsStore = useChatStore()
</script>

<template>
  <div class="chat-board">
    <call-board v-if="chatsStore.isCallActive" />
    <chat-info-bar />
    <div class="messages-board">
      <slot />
    </div>

    <message-media-bar />
  </div>
</template>

<style lang="scss" scoped>
.chat-board {
  padding: 0 10px;
  flex: 1 1 auto;
  gap: 5px;
  background-color: $color-primary;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;

  .messages-board {
    flex: 1 1 auto;
    padding: 10px;
    display: flex;
    gap: 10px;
    height: 100%;
    flex-direction: column;
    overflow: hidden scroll;
    border-radius: $border-radius;
    background-color: $color-white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    &::-webkit-scrollbar-thumb {
      $sb-bg-thumb: $color-primary;
      background: $sb-bg-thumb;
      border-radius: $border-radius 0 0 $border-radius;

      &:hover {
        background: lighten($sb-bg-thumb, 15%);
      }
    }
  }
}
</style>
