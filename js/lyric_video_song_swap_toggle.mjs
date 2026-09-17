import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_song_swaps_path } from "./lyric_video_song_swaps_path.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_toggle } from "./list_toggle.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
export async function lyric_video_song_swap_toggle(name, before, path) {
  "$plain name";
  "$plain before";
  "$plain path";
  "Marks one picture as chosen for the place of the picture at before, or unmarks it when it was already chosen, and answers with every picture now chosen there.";
  "MORE THAN ONE MAY BE CHOSEN, because a choice among paintings is often a shortlist before it is a single answer, and a picture that is left in the song may be chosen as well as one that would replace it.";
  "THE CHOICE IS KEPT IN THE SAME FILE AS THE OFFER, beside the picture it is about, so the two cannot drift apart.";
  arguments_assert(arguments, 3);
  let swaps_path = lyric_video_song_swaps_path(name);
  let chosen = null;
  function toggle(data) {
    let swaps = property_get(data, "swaps");
    let swap = list_find_property(swaps, "before", before);
    chosen = property_initialize_list(swap, "chosen");
    list_toggle(chosen, path);
  }
  await file_json_transform(swaps_path, toggle);
  return chosen;
}
