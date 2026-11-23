export async function html_camera_microphone_stream_wished() {
  let stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: "user",
      width: {
        ideal: 720,
      },
      height: {
        ideal: 1280,
      },
      aspectRatio: {
        ideal: 0.5625,
      },
    },
    audio: true,
  });
  return stream;
}
