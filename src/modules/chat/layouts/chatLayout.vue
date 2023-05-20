<script setup lang="ts">
import chatInfoBar from '@/modules/chat/components/info-bar/chatInfoBar.vue'
import { useChatStore } from '@/modules/chat/stores/chat.store'
import callBoard from '@/modules/chat/components/call-board/callBoard.vue'

const chatsStore = useChatStore()
</script>
<template>
  <main>
    <slot name="left-panel" />
    <div class="chat">
      <call-board v-if="chatsStore.isCallActive" />
      <chat-info-bar />
      <slot name="board" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  height: 100%;
  overflow: hidden;
}
.chat {
  flex: 1 1 1;
  gap: 5px;
  overflow: hidden;
  background-color: $color-primary;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
