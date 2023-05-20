<script setup lang="ts">
import { Icon } from '@iconify/vue'
//
import IconButton from '@/components/other/buttons/iconButton.vue'
defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <icon-button :tooltip="'microphone'">
    <Icon v-if="!isActive" icon="solar:microphone-outline" />
    <Icon v-else icon="solar:microphone-line-duotone" />
  </icon-button>
</template>
<style lang="scss" scoped></style>
