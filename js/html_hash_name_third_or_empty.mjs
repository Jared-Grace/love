import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_name_get } from "./html_hash_name_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
export function html_hash_name_third_or_empty() {
  "The part of the address after a second slash, as in mixed from #lyric_video_song_swaps/agape/mixed, or empty text when the address has no second slash.";
  "THE FIRST PART NAMES THE SCREEN AND THE SECOND WHAT IT IS SHOWING; a third is that screen's way of saying which part of it to show, so a link can land on a handful of rows rather than on all of them and a note saying which rows to look at.";
  arguments_assert(arguments, 0);
  let name = html_hash_name_get();
  let parts = text_split(name, "/");
  let some = list_size_greater_than(parts, 2);
  if (some) {
    let third = parts[2];
    return third;
  }
  let empty = "";
  return empty;
}
