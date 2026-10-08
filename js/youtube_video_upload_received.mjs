import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function youtube_video_upload_received(answer) {
  "Says how many bytes of a resumable upload YouTube already holds, read off the Range header of a 308 answer, so the next piece starts where the last one that landed ended.";
  "No Range header means nothing has landed yet, which is what YouTube sends before the first byte arrives — so that reads as zero rather than as an error.";
  arguments_assert(arguments, 1);
  let headers = property_get(answer, "headers");
  let range = headers["range"];
  if (equal(range, undefined)) {
    let r2 = 0;
    return r2;
  }
  let last = range.split("-")[1];
  let r = Number(last) + 1;
  return r;
}
