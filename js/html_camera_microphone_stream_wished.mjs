import { arguments_assert } from "./arguments_assert.mjs";
export async function html_camera_microphone_stream_wished(devices) {
  "$plain devices";
  "The camera asked for with the upright size wished for, from the devices the caller has already made sure the browser gave - so this never reaches for them itself, where on a page that is not secure they are simply absent.";
  arguments_assert(arguments, 1);
  let stream = await devices.getUserMedia({
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
