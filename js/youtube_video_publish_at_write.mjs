import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { youtube_video_record_write } from "./youtube_video_record_write.mjs";
export async function youtube_video_publish_at_write(video_id, publish_at) {
  "$plain video_id";
  "$plain publish_at";
  "Sets the moment a private film goes public on its own, so a run of films can be released one at a time without anybody there to press the button.";
  "★ ONLY A PRIVATE FILM CAN BE GIVEN ONE. YouTube keeps a release time only on a film nobody can see yet, so a film already public or unlisted is refused here rather than sent and quietly left as it was.";
  "THE TIME IS WRITTEN THE WAY THE API READS IT, a full date and time with its offset, such as 2026-10-08T03:00:00+08:00; the answer carries the time YouTube actually stored, which comes back in UTC, so the two are compared by a reader rather than by text.";
  arguments_assert(arguments, 2);
  let record = await youtube_video_record(video_id);
  let status = property_get(record, "status");
  let privacy = property_get(status, "privacyStatus");
  let b = equal(privacy, "private");
  assert_json(b, {
    video_id,
    privacy,
  });
  let publish_at_before = property_get_or_null(status, "publishAt");
  property_set(status, "publishAt", publish_at);
  let answer = await youtube_video_record_write(record);
  let status_after = property_get(answer, "status");
  let publish_at_after = property_get_or_null(status_after, "publishAt");
  let r = {
    video_id,
    publish_at_before,
    publish_at_after,
  };
  return r;
}
