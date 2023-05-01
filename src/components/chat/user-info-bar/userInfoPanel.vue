<script setup lang="ts">
import UserAvatar from '@/components/other/userAvatar.vue'
import { inject } from 'vue'
const data = inject<{
  avatar: string
  name: string
}>('user-data')
</script>

<template>
  <div class="user-info">
    <div class="person">
      <user-avatar :src="data?.avatar" class="user-avatar" />
      <span class="user-name"> {{ data?.name }}</span>
    </div>
    <div class="controls">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.user-info {
  flex: 1 0 auto;
  display: flex;
  place-items: center;
  justify-content: space-between;
  color: $color-white;
  gap: 10px;
  height: 100%;

  .user-avatar {
    $size: 40px;
    height: $size;
    font-size: $size;
  }

  .person {
    display: flex;
    place-items: center;
    flex-direction: row;
    gap: 10px;
  }

  .controls {
    padding: 10px;
    font-size: 1.5rem;
    display: flex;
    gap: 10px;
    place-items: center;
  }
}
</style>
