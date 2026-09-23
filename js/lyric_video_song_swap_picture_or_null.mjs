import { arguments_assert } from "./arguments_assert.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { file_path_name_last } from "./file_path_name_last.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_song_swap_picture_or_null(pictures, before) {
  "The song's picture a swap stands for: the one at the swap's own path, or else the one carrying the same file name.";
  "THE FILE NAME IS THE FALLBACK BECAUSE SETTLING A CHOICE KEEPS IT. A settled picture is written into another folder under the name of the picture it replaces, and the song is then pointed at that copy, so the path a swap was written against is gone while its file name is still the song's.";
  "THE EXACT PATH IS ASKED FIRST, so a song that still holds the original never has it confused with a copy of the same name somewhere else.";
  arguments_assert(arguments, 2);
  let exact = list_find_property_or_null(pictures, "path", before);
  let found = null_not_is(exact);
  if (found) {
    return exact;
  }
  let name = file_path_name_last(before);
  for (let picture of pictures) {
    let path = property_get(picture, "path");
    let left = file_path_name_last(path);
    let same = equal(left, name);
    if (same) {
      return picture;
    }
  }
  return null;
}
