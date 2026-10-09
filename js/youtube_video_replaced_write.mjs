import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_address } from "./youtube_video_address.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { youtube_video_description_write } from "./youtube_video_description_write.mjs";
import { youtube_video_status_set_write } from "./youtube_video_status_set_write.mjs";
export async function youtube_video_replaced_write(video_id, video_id_new) {
  "$plain video_id";
  "$plain video_id_new";
  "Points an older video at the newer version that replaces it, and takes the older one out of search and the channel page. Its description gains a first line linking the new one, and it becomes unlisted, so an old link still plays and tells the viewer where the new one is.";
  "Unlisted rather than deleted because a link already shared keeps working; asked for 2026-10-09, once Psalm 150's songs got versions trimmed to start at the singing.";
  "The line is added only when the description does not already begin with it, so running this twice changes nothing.";
  "Takes two ids and nothing else, so no prose ever goes on a command line; the line's words live here.";
  arguments_assert(arguments, 2);
  let line = "Newer version: " + youtube_video_address(video_id_new);
  let record = await youtube_video_record(video_id);
  let snippet = property_get(record, "snippet");
  let description = property_get(snippet, "description");
  let present = text_starts_with(description, line);
  if (not(present)) {
    await youtube_video_description_write(
      video_id,
      line + "\n\n" + description,
    );
  }
  let privacy = await youtube_video_status_set_write(
    video_id,
    "privacyStatus",
    "unlisted",
  );
  let r = {
    video_id,
    video_id_new,
    line_added: not(present),
    privacy: property_get(privacy, "after"),
  };
  return r;
}
