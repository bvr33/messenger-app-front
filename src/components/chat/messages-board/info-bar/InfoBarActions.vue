<script setup lang="ts">
import { Icon } from '@iconify/vue'
//
import IconButton from '@/components/other/buttons/iconButton.vue'
import { useChatStore } from '@/stores/chat.store'

const {
  call: { start }
} = useChatStore()
</script>

<template>
  <icon-button tooltip="audio call" tt-position="bottom" @click="start">
    <Icon icon="iconoir:phone" />
  </icon-button>

  <icon-button tooltip="video call" tt-position="bottom" @click="start">
    <Icon icon="iconoir:video-camera" />
  </icon-button>

  <icon-button tooltip="chat settings" tt-position="bottom">
    <Icon icon="iconoir:settings" />
  </icon-button>
</template>
