<script setup lang="ts">
import { computed } from 'vue'
//
import UserAvatar from '@/components/other/userAvatar.vue'
import { useChatStore } from '../../../stores/chat.store'

//
const props = defineProps<{
  chatId: number
  userName: string
  avatarSrc: string
}>()

const chatsStore = useChatStore()

const isActive = computed(() => chatsStore.openChatId == props.chatId)
</script>

<template>
  <span class="chat-item" :class="isActive ? 'active' : ''" @click="chatsStore.setOpenChat(chatId)">
    <user-avatar :src="avatarSrc" class="user-avatar" />
    <div class="data">
      <span class="user-name">
        {{ userName }}
      </span>
      <span class="text">
        <slot />
      </span>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.chat-item {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  flex: 0 0 1;
  flex-direction: row;
  place-items: center;
  gap: 10px;

  .user-avatar {
    $avatar-size: 50px;
    height: $avatar-size;
    font-size: $avatar-size;
  }

  .data {
    overflow: hidden;
    flex: 1 0 1;
    display: flex;
    gap: 5px;
    flex-direction: column;

    .user-name,
    .text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .user-name {
      flex: 1 0 1;
      color: $color-white;
      font-size: 1rem;
    }

    .text {
      flex: 1 0 1;
      color: $color-gray;
      font-size: 0.8rem;
      width: 100%;
    }
  }

  &.active,
  &:hover {
    background-color: $color-primary-darker;
    border-radius: $border-radius;
  }
}
</style>
