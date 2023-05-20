<script setup lang="ts">
import { Icon } from '@iconify/vue'
defineProps<{
  src?: string
}>()
</script>

<template>
  <span class="user-avatar">
    <Icon v-if="!src" icon="solar:user-outline" />
    <img v-else :src="src" />
  </span>
</template>
<style lang="scss" scoped>
.user-avatar {
  display: flex;
  height: 100%;
  width: max-content;
  place-items: center;

  img {
    aspect-ratio: 1/1;
    height: 100%;
  }

  .iconify {
    font-size: inherit;
  }

  img {
    overflow: hidden;
    border-radius: 100%;
  }
}
</style>
