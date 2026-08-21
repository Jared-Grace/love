import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_verse_mislabelled } from "./psalms_videos_verse_mislabelled.mjs";
import { youtube_video_title_write_if_titled } from "./youtube_video_title_write_if_titled.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size } from "./list_size.mjs";
export async function psalms_videos_verse_mislabelled_titles_write() {
  "Renames every song whose title names a verse other than the one it sings, so that each is called the verse it actually is.";
  "The set is asked for rather than handed in, so this cannot be run over a list that has drifted from the one the songs were listened to against. Adding a newly heard song to that list is the whole of what it takes to include it here.";
  "Each song is renamed only while it is still called what the list says it is called, so a run that stopped halfway is finished simply by running it again, and a song somebody has since renamed by hand is left alone and said so rather than quietly overwritten.";
  "One song at a time and waiting for each, rather than all twelve at once. A write is a real change to something outside this machine and there are only so many allowed in a day, so a refusal partway through should leave a report that reads in the order things happened.";
  "The title is what everything downstream believes - the chapter a song is filed under, the verse text written beneath it, the playlist it is put in - so this is the change the rest of the mending waits on, not one of several.";
  arguments_assert(arguments, 0);
  let mislabelled = psalms_videos_verse_mislabelled();
  let rows = [];
  for (let row of mislabelled) {
    let video_id = property_get(row, "video_id");
    let titled = property_get(row, "titled");
    let sung = property_get(row, "sung");
    let written = await youtube_video_title_write_if_titled(
      video_id,
      titled,
      sung,
    );
    list_add(rows, written);
  }
  let written_rows = list_filter_property(rows, "written", true);
  let written_count = list_size(written_rows);
  let asked_count = list_size(rows);
  let r = {
    asked_count,
    written_count,
    rows,
  };
  return r;
}
