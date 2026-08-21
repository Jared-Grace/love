import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { youtube_video_record_write } from "./youtube_video_record_write.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function youtube_video_description_write(video_id, description) {
  "$plain video_id";
  "$plain description";
  "Changes the words written under one video, and leaves every other thing about it exactly as it was.";
  "The record is read out whole first and only the words in it are altered, because the way a video is written back replaces the parts it names rather than mending them. Anything not read out first and handed back would be emptied, and emptied without complaint.";
  "A video carries its words twice - once plainly, and once again under the language they are spoken in - and a reader is shown whichever of the two its own language asks for. Changing only the plain one leaves the second still saying the old thing, so both are changed together.";
  "The words as they stand afterwards are read back out of the reply rather than assumed from what was asked, because the reply is the record and the ask is only an intention.";
  arguments_assert(arguments, 2);
  let record = await youtube_video_record(video_id);
  let snippet = property_get(record, "snippet");
  let description_before = property_get(snippet, "description");
  property_set(snippet, "description", description);
  let localized = property_get_or_null(snippet, "localized");
  let b = null_is(localized);
  let localized_exists = not(b);
  if (localized_exists) {
    property_set(localized, "description", description);
  }
  let answer = await youtube_video_record_write(record);
  let snippet_after = property_get(answer, "snippet");
  let description_after = property_get(snippet_after, "description");
  let r = {
    video_id,
    description_before,
    description_after,
  };
  return r;
}
