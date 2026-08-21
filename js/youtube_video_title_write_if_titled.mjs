import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { youtube_video_title_write } from "./youtube_video_title_write.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function youtube_video_title_write_if_titled(
  video_id,
  titled,
  title,
) {
  "$plain video_id";
  "$plain titled";
  "$plain title";
  "Changes what one video is called, but only while it is still called the thing it was expected to be called.";
  "What a video is named was written down somewhere else and at some earlier time, and between then and now a person may have renamed it by hand, or an earlier run of this may have already done the job. Writing regardless would in the first case undo somebody's deliberate work, and in the second case be harmless but indistinguishable from having done it - so neither the damage nor the safety would be visible in the report.";
  "Refusing on a name that does not match turns both of those into something plainly readable. It also makes running this twice cost nothing, which matters because the honest thing to do when a run stops halfway is run it again.";
  arguments_assert(arguments, 3);
  let record = await youtube_video_record(video_id);
  let snippet = property_get(record, "snippet");
  let title_now = property_get(snippet, "title");
  let titled_still = equal(title_now, titled);
  let titled_moved = not(titled_still);
  if (titled_moved) {
    let refused = {
      video_id,
      written: false,
      titled,
      title_now,
    };
    return refused;
  }
  let written = await youtube_video_title_write(video_id, title);
  let title_after = property_get(written, "title_after");
  let r = {
    video_id,
    written: true,
    titled,
    title_after,
  };
  return r;
}
