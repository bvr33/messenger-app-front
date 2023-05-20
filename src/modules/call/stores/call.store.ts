import { MediaType } from '@/types/mediaType'
import { getUserMediaStream, someTrackIsLive, stopUserMediaStream } from '@/core/utils/userMedia.util'
import { defineStore } from 'pinia'
import { ref } from 'vue'
const constraints: MediaStreamConstraints = {
  video: {
    width: 300,
    height: 200
  },
  audio: true
}

export const useCallStore = defineStore('chats', () => {
  const log = async () => {
    console.clear()

    console.log(localMedia.value?.active)
  }
  //
  const isCallActive = ref<boolean>(false)
  const localMedia = ref<MediaStream>()

  const changeCallState = async () => {
    if (!isCallActive.value) {
      if (someTrackIsLive(localMedia.value, MediaType.all)) {
        stopUserMediaStream(localMedia.value, MediaType.all)
      }
      localMedia.value = await getUserMediaStream(constraints)
    } else {
      stopUserMediaStream(localMedia.value, MediaType.all)
    }
    isCallActive.value = !isCallActive.value
    log()
  }

  return {
    localMedia,
    changeCallState,
    isCallActive
  }
})
