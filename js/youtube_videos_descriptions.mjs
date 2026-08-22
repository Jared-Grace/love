import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_videos_records } from "./youtube_videos_records.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
export async function youtube_videos_descriptions(video_ids) {
  "$plain video_ids";
  "The words written under each of many videos, and separately the videos youtube would say nothing about.";
  "THE TWO ANSWERS ARE KEPT APART ON PURPOSE. A video carrying nothing and a video that could not be read are different facts, and folding them together is what made a whole sweep lie: a refused page has no words in it either, so every video behind a refusal was reported as bare. Measured 2026-08-21, two readings minutes apart of the same thirteen hundred videos called twenty-seven bare and then four hundred and thirty-seven, and every one looked at by hand was carrying its words the whole time.";
  "So a name youtube left out of its answer goes in the silent list, and only a video it actually described gets an entry - which may be an empty run of letters, and that empty run is then a real reading rather than a guess.";
  arguments_assert(arguments, 1);
  let records = await youtube_videos_records(video_ids);
  let said = {};
  for (let record of records) {
    let video_id = property_get(record, "id");
    let description = property_path_get_2(record, "snippet", "description");
    property_set(said, video_id, description);
  }
  function lambda$absent(video_id) {
    let absent = property_exists_not(said, video_id);
    return absent;
  }
  let silent = list_filter(video_ids, lambda$absent);
  let r = {
    said: said,
    silent: silent,
  };
  return r;
}
