import { arguments_assert } from "./arguments_assert.mjs";
export function youtube_video_upload_patience_ms() {
  "How long to go on waiting for YouTube to answer while a film is being handed over, in milliseconds.";
  "★ IT IS THE WAIT FOR THE ANSWER AND NOT THE WAIT FOR THE FILE, which is why it is far longer than any ordinary ask. The far end says nothing at all until the last byte has arrived, so this figure is really the time the sending itself is allowed to take, and the sending takes as long as the film is large divided by however fast this machine can push.";
  "★ THE FIGURE UNDERNEATH IS FIVE MINUTES AND IT IS NOT OURS. That is the default the fetch built into node applies to waiting for headers, and a film that takes longer than it fails with a timeout that names headers - which reads like the far end went quiet and is really this machine still talking. A hundred and seventy megabytes crossed that line on 2026-09-18 and the upload died with nothing created.";
  "An hour is chosen rather than no limit at all, because a sending that truly has stalled should still end in a refusal somebody can read rather than in a command that never returns.";
  arguments_assert(arguments, 0);
  let ms = 3600000;
  return ms;
}
