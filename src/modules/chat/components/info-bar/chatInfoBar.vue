<script setup lang="ts">
//
import InfoBarActions from '@/modules/chat/components/info-bar/InfoBarActions.vue'
import userAvatar from '@/core/components/other/userAvatar.vue'
import { useChatStore } from '@/modules/chat/stores/chat.store'

const data = useChatStore()
</script>

<template>
  <div class="chat-top-bar">
    <div class="user-info">
      <user-avatar :src="data.openChatData.user.avatar" />
      <span class="user-name"> {{ data.openChatData.user.name }} </span>
    </div>
    <div class="controls">
      <info-bar-actions />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-top-bar {
  width: 100%;
  height: 60px;
  font-size: 1.5rem;
  color: $color-white;
  background-color: $color-primary;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .user-info {
    display: flex;
    place-items: center;
    gap: 10px;

    .user-name {
      color: $color-white;
      font-size: 1.2rem;
    }
  }

  .controls {
    display: flex;
    place-items: center;
    gap: 20px;
    font-size: 1.5rem;
  }
}
</style>
