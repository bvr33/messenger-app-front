import { MediaType } from '@/types/mediaType'

export const getUserMediaStream = async (constraints: MediaStreamConstraints) => {
  return navigator.mediaDevices.getUserMedia(constraints)
}

const stopTracks = (track: MediaStreamTrack) => {
  track.stop()
}
const getLiveTracks = (mediaStream: MediaStream) => {
  return mediaStream.getTracks().filter((track) => track.readyState === 'live')
}

export const stopUserMediaStream = (mediaStream: MediaStream | undefined, mediaType: MediaType) => {
  if (!mediaStream) {
    return false
  }
  switch (mediaType) {
    case MediaType.all:
      getLiveTracks(mediaStream).forEach(stopTracks)
      break
    case MediaType.audio:
      getLiveTracks(mediaStream).forEach(stopTracks)
      break
    case MediaType.video:
      getLiveTracks(mediaStream).forEach(stopTracks)
      break
  }
}

export const someTrackIsLive = (mediaStream: MediaStream | undefined, mediaType: MediaType) => {
  if (!mediaStream) {
    return false
  }
  switch (mediaType) {
    case MediaType.all:
      return getLiveTracks(mediaStream).length > 0

    case MediaType.audio:
      return getLiveTracks(mediaStream).length > 0

    case MediaType.video:
      return getLiveTracks(mediaStream).length > 0
  }
}
