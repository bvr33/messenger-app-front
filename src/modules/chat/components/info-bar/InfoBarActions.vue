<script setup lang="ts">
import { Icon } from '@iconify/vue'
//
import iconButton from '@/core/components/buttons/iconButton.vue'
import { useChatStore } from '@/modules/chat/stores/chat.store'

const {
  call: { start }
} = useChatStore()
</script>

<template>
  <icon-button tooltip="audio call" tt-position="bottom" @click="start">
    <Icon icon="solar:end-call-outline" />
  </icon-button>

  <icon-button tooltip="video call" tt-position="bottom" @click="start">
    <Icon icon="solar:videocamera-outline" />
  </icon-button>

  <icon-button tooltip="chat settings" tt-position="bottom">
    <Icon icon="solar:settings-outline" />
  </icon-button>
</template>
