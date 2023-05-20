<script setup lang="ts">
import { Icon } from '@iconify/vue'
//
import MessageActions from '@/components/chat/messages-board/message-media-bar/messageActions.vue'
import IconButton from '@/components/other/buttons/iconButton.vue'
import MessageInput from '@/components/chat/messages-board/message-media-bar/messageInput.vue'
</script>

<template>
  <div class="create-message-bar">
    <div class="controls">
      <message-actions />
    </div>

    <message-input />

    <icon-button tooltip="send">
      <Icon icon="solar:map-arrow-right-outline" />
    </icon-button>
  </div>
</template>

<style lang="scss" scoped>
.create-message-bar {
  flex: 0 0 auto;
  width: 100%;
  height: 60px;
  color: $color-white;
  background-color: $color-primary;
  display: flex;
  justify-content: space-between;
  place-items: center;
  padding: 10px;
  gap: 10px;

  .iconify,
  .controls {
    font-size: 1.5rem;
  }

  .controls {
    display: flex;
    place-items: center;
    gap: 15px;
  }
}
</style>
