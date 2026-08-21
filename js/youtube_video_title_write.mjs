import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { youtube_video_record_write } from "./youtube_video_record_write.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function youtube_video_title_write(video_id, title) {
  "$plain video_id";
  "$plain title";
  "Changes what one video is called, and leaves every other thing about it exactly as it was.";
  "The record is read out whole first and only the name in it is altered, because the way a video is written back replaces the parts it names rather than mending them. Anything not read out first and handed back would be emptied, and emptied without complaint.";
  "A video carries its name twice - once plainly, and once again under the language it is spoken in - and a reader is shown whichever of the two its own language asks for. Changing only the plain one leaves the second still saying the old thing, so both are changed together and the video cannot end up called two things at once.";
  "The name as it stands afterwards is read back out of the reply rather than assumed from what was asked, because the reply is the record and the ask is only an intention.";
  arguments_assert(arguments, 2);
  let record = await youtube_video_record(video_id);
  let snippet = property_get(record, "snippet");
  let title_before = property_get(snippet, "title");
  property_set(snippet, "title", title);
  let localized = property_get_or_null(snippet, "localized");
  let b = null_is(localized);
  let localized_exists = not(b);
  if (localized_exists) {
    property_set(localized, "title", title);
  }
  let answer = await youtube_video_record_write(record);
  let snippet_after = property_get(answer, "snippet");
  let title_after = property_get(snippet_after, "title");
  let r = {
    video_id,
    title_before,
    title_after,
  };
  return r;
}
