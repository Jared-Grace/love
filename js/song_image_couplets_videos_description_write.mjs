import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_videos_descriptions } from "./song_image_couplets_videos_descriptions.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { youtube_video_description_write } from "./youtube_video_description_write.mjs";
import { equal } from "./equal.mjs";
export async function song_image_couplets_videos_description_write(channel_id) {
  "$plain channel_id";
  "Puts the hymn's own words, and under them the passages those words rest on, beneath every song of the hymn on a channel - and says which songs it had to change and which were already carrying it.";
  "WHAT GOES UNDER EACH SONG IS DECIDED SOMEWHERE ELSE and only put there here, so the same thing a person read before agreeing can be the thing that is written. This half is the part that cannot be undone.";
  "A song already carrying these words is left alone and counted apart, so running it twice does not spend the day's allowance rewriting each song to the value it already holds - and the report tells that apart from having mended them all.";
  "It reports names rather than addresses because the name is the thing a person can check: a line saying the widescreen cut was changed can be read, and a line of eleven letters cannot.";
  arguments_assert(arguments, 1);
  let descriptions = await song_image_couplets_videos_descriptions(channel_id);
  let written = [];
  let already = [];
  for (let said of descriptions) {
    let record = await youtube_video_record(said.video_id);
    let snippet = property_get(record, "snippet");
    let description_now = property_get(snippet, "description");
    let same = equal(description_now, said.description);
    if (same) {
      list_add(already, said.title);
      continue;
    }
    await youtube_video_description_write(said.video_id, said.description);
    list_add(written, said.title);
  }
  let r = {
    written: written,
    already: already,
  };
  return r;
}
