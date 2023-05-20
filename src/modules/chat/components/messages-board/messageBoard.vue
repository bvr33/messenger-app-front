<script lang="ts" setup>
import messageMediaBar from '@/modules/chat/components/messages-board/message-media-bar/messageMediaBar.vue'
</script>

<template>
  <div class="chat-board">
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
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;

  .messages-board {
    flex: 1 1 1;
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
