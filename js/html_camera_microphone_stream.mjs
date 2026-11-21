import { not } from "./not.mjs";
import { error } from "./error.mjs";
export async function html_camera_microphone_stream() {
  "The front camera and the microphone together, as one live stream, asked of the browser - which asks the person first. Front, because the one recording is the one being filmed, reading.";
  "Portrait at 720 by 1280 is asked for rather than demanded, so a camera that cannot give it still gives what it can.";
  "A browser offers the camera only on a secure page - https, or the machine's own localhost. Anywhere else the camera is simply absent, so it is asked about first and the reason said in words, rather than the call throwing a message about something being undefined.";
  let devices = navigator.mediaDevices;
  if (not(devices)) {
    error("The camera only works on a secure page: open this page with https.");
  }
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
