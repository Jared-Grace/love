import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
export function html_hash_name_part_or_empty(index) {
  "$plain index";
  "The part of the address at this place, counting from zero between its slashes, as in mixed at 2 from #lyric_video_song_swaps/agape/mixed, or empty text when the address has no part there.";
  arguments_assert(arguments, 1);
  let name = html_hash_name_get();
  let parts = text_split(name, "/");
  let some = list_size_greater_than(parts, index);
  if (some) {
    let part = parts[index];
    return part;
  }
  let empty = "";
  return empty;
}
