export const getUserMediaStream = async (constraints: MediaStreamConstraints) => {
  return navigator.mediaDevices.getUserMedia(constraints)
}
