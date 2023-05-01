<script setup lang="ts">
import { Icon } from '@iconify/vue'
//
import IconButton from '@/components/other/buttons/iconButton.vue';
defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <icon-button tooltip="camera">
    <Icon v-if="!isActive" icon="iconoir:video-camera" />
    <Icon v-else icon="iconoir:video-camera-off" />
  </icon-button>
</template>
<style lang="scss" scoped></style>
