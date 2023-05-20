<script lang="ts" setup>
import iconButton from '@/core/components/buttons/iconButton.vue'
import cameraButton from '@/core/components/buttons/other/cameraButton.vue'
import microphoneButton from '@/core/components/buttons/other/microphoneButton.vue'
import { Icon } from '@iconify/vue'
import { useChatStore } from '@/modules/chat/stores/chat.store'
import { reactive } from 'vue'

const mediaActive = reactive({
  camera: false,
  mic: false
})

const toggleCamera = (): void => {
  mediaActive.camera = !mediaActive.camera
}
const toggleMic = (): void => {
  mediaActive.mic = !mediaActive.mic
}
const {
  call: { stop }
} = useChatStore()
</script>

<template>
  <icon-button class="button btn-end_call" tooltip="End Call" @click="stop">
    <Icon icon="solar:call-cancel-outline" />
  </icon-button>
  <icon-button class="button" tooltip="Share Screen">
    <Icon icon="solar:screen-share-outline" />
  </icon-button>
  <microphone-button @click="toggleMic" class="button" :is-active="mediaActive.mic" />
  <camera-button @click="toggleCamera" class="button" :is-active="mediaActive.camera" />
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
