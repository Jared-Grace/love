import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { youtube_video_description_write } from "./youtube_video_description_write.mjs";
import { psalms_video_description } from "./psalms_video_description.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
export async function psalms_video_description_write(video_id) {
  "$plain video_id";
  "Puts under one sung Psalm the words it is actually of, worked out from the name it now wears.";
  "The name is the only thing that says which verses a song is of, so the words are read off the name rather than kept alongside it. That is what makes this the mend for a song whose name has just been corrected: the words underneath were right for the old name and are now wrong, and nothing about the video says so - a watcher reads a title naming one verse and text quoting another, and has no way to tell which of the two is the mistake.";
  "A name that does not name a passage of the Psalms is left alone rather than guessed at. The channel is not only psalms, and a song whose name this cannot read is a song this has nothing true to say about.";
  "Words already right are left alone too, and the two refusals are told apart in what comes back. Otherwise running this over the whole channel would rewrite every video on it to the value it already held, spending a day's allowance to change nothing, and the report would not distinguish that from having mended them all.";
  arguments_assert(arguments, 1);
  let record = await youtube_video_record(video_id);
  let snippet = property_get(record, "snippet");
  let title = property_get(snippet, "title");
  let wanted = await psalms_video_description(title);
  let unreadable = null_is(wanted);
  if (unreadable) {
    let refused = {
      video_id,
      written: false,
      title,
      why: "the name does not name a passage of the Psalms",
    };
    return refused;
  }
  let already = property_equals(snippet, "description", wanted);
  if (already) {
    let agreed = {
      video_id,
      written: false,
      title,
      why: "the words already say what the name does",
    };
    return agreed;
  }
  let written = await youtube_video_description_write(video_id, wanted);
  let description_after = property_get(written, "description_after");
  let r = {
    video_id,
    written: true,
    title,
    description_after,
  };
  return r;
}
