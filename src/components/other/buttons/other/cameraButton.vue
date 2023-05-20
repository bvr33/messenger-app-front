<script setup lang="ts">
import { Icon } from '@iconify/vue'
//
import IconButton from '@/components/other/buttons/iconButton.vue'
defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <icon-button tooltip="camera">
    <Icon v-if="!isActive" icon="solar:videocamera-record-outline" />
    <Icon v-else icon="solar:videocamera-line-duotone" />
  </icon-button>
</template>
<style lang="scss" scoped></style>
