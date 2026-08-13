import { ebible_bible_folders_sorted } from "./ebible_bible_folders_sorted.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_bible_folder_known_is(bible_folder) {
  "Whether a folder name in a link names a bible this repo actually ships.";
  let known = ebible_bible_folders_sorted();
  let named = list_includes(known, bible_folder);
  return named;
}
