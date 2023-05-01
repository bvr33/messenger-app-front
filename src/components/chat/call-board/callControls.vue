<script lang="ts" setup>
import IconButton from '@/components/other/buttons/iconButton.vue'
import CameraButton from '@/components/other/buttons/other/cameraButton.vue'
import MicrophoneButton from '@/components/other/buttons/other/microphoneButton.vue'
import { Icon } from '@iconify/vue'
import { useChatStore } from '@/stores/chat.store'

const {
  call: { stop }
} = useChatStore()
</script>

<template>
  <icon-button class="button btn-end_call" tooltip="End Call" @click="stop">
    <Icon icon="ic:baseline-call-end" />
  </icon-button>
  <icon-button class="button" tooltip="Share Screen">
    <Icon icon="ic:baseline-screen-share" />
  </icon-button>
  <microphone-button class="button" :is-active="false" />
  <camera-button class="button" :is-active="false" />
</template>

<style lang="scss" scoped>
.button {
  background-color: $color-primary;
  border-radius: 100%;
  padding: 10px;

  &.btn-end_call {
    background-color: $color-red;
  }
}
</style>
