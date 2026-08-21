import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_verse_mislabelled } from "./psalms_videos_verse_mislabelled.mjs";
import { psalms_video_description_write } from "./psalms_video_description_write.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size } from "./list_size.mjs";
export async function psalms_videos_verse_mislabelled_descriptions_write() {
  "Puts right the words written under every song whose name has been corrected, so that each quotes the verse it actually sings.";
  "Correcting a name breaks the words beneath it, because those words were worked out from the name the song used to wear. So this is the second half of one mend and not a separate errand, and it is the half a watcher can see - a wrong place in a playlist is untidy, whereas a song titled one verse and quoting another tells whoever is reading it something false.";
  "The set is asked for rather than handed in, and each song's words are worked out from the name it wears at this moment rather than from the name written down. That means this stays right if a name was corrected by hand, or corrected to something other than what was expected, and it can be run before or after the renaming without being told which.";
  "Words already right are passed over, so running this twice costs nothing and a run that stopped halfway is finished by running it again.";
  arguments_assert(arguments, 0);
  let mislabelled = psalms_videos_verse_mislabelled();
  let rows = [];
  for (let row of mislabelled) {
    let video_id = property_get(row, "video_id");
    let written = await psalms_video_description_write(video_id);
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
