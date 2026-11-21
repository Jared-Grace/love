export async function html_camera_microphone_stream() {
  "The front camera and the microphone together, as one live stream, asked of the browser - which asks the person first. Front, because the one recording is the one being filmed, reading.";
  "Portrait at 720 by 1280 is asked for rather than demanded, so a camera that cannot give it still gives what it can.";
  let stream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: "user",
      width: {
        ideal: 720,
      },
      height: {
        ideal: 1280,
      },
    },
    audio: true,
  });
  return stream;
}
