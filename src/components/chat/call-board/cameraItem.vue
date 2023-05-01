<script lang="ts" setup>
import { Icon } from '@iconify/vue'

defineProps<{
  src?: MediaStream
}>()
</script>

<template>
  <span class="camera-item">
    <Icon v-if="!src" icon="iconoir:user-circle" />
    <video v-else :srcObject="src" autoplay />
  </span>
</template>
<style lang="scss" scoped>
.camera-item {
  background-color: $color-white;
  height: 200px;
  width: 300px;
  overflow: hidden;
  place-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-radius;
  border: 2px solid $color-white;

  .iconify {
    font-size: 80px;
  }
  video {
    height: 100%;
    border-radius: $border-radius;
  }
}
</style>
