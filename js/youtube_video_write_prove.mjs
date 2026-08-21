import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { youtube_video_record_write } from "./youtube_video_record_write.mjs";
import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
export async function youtube_video_write_prove(video_id) {
  "$plain video_id";
  "Reads one video, hands the very same record straight back, reads it again, and says whether anything moved.";
  "It is the one honest way to find out what a replacing write really does, and it is worth spending before any write that means something. A write that means something changes one word on purpose, so a difference afterwards proves nothing on its own - it could be the word, or it could be everything else quietly emptied alongside it. A write that changes nothing on purpose has no such excuse: every difference it leaves is damage, and it shows up against a video whose old value is still known.";
  "Only what was sent is compared. The tag YouTube keeps for its own bookkeeping changes on every write by design, so holding that against the record would report damage on a run that did none, and a check that cries wolf is worse than no check because it teaches its reader to skip it.";
  arguments_assert(arguments, 1);
  let before = await youtube_video_record(video_id);
  let object = property_get(before, "snippet");
  let snippet_before = json_to(object);
  let object2 = property_get(before, "status");
  let status_before = json_to(object2);
  await youtube_video_record_write(before);
  let after = await youtube_video_record(video_id);
  let object3 = property_get(after, "snippet");
  let snippet_after = json_to(object3);
  let object4 = property_get(after, "status");
  let status_after = json_to(object4);
  let snippet_same = equal(snippet_before, snippet_after);
  let status_same = equal(status_before, status_after);
  let r = {
    video_id,
    snippet_same,
    status_same,
    snippet_before,
    snippet_after,
    status_before,
    status_after,
  };
  return r;
}
