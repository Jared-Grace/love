import { greater_than } from "./greater_than.mjs";
export function html_media_recorder_start(stream) {
  "Starts recording a live stream and hands back a way to stop it, which answers with the whole recording as one file.";
  "MP4 is asked for first, because that is what phones and YouTube take most readily; a browser that cannot write it writes WebM. The file's own kind is kept on it, so whoever saves it can name it with the right ending.";
  let kinds = ["video/mp4", "video/webm;codecs=vp9,opus", "video/webm"];
  function lambda(k) {
    let r = MediaRecorder.isTypeSupported(k);
    return r;
  }
  let kind = kinds.find(lambda);
  let recorder = new MediaRecorder(stream, {
    mimeType: kind,
  });
  let chunks = [];
  recorder.ondataavailable = function lambda2(e) {
    if (greater_than(e.data.size, 0)) {
      chunks.push(e.data);
    }
  };
  let stopped = new Promise(function lambda4(resolve) {
    recorder.onstop = function lambda3() {
      resolve(
        new Blob(chunks, {
          type: recorder.mimeType,
        }),
      );
    };
  });
  recorder.start(1000);
  async function stop() {
    recorder.stop();
    let blob = await stopped;
    return blob;
  }
  return stop;
}
