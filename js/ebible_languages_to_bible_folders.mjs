import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { list_map } from "./list_map.mjs";
export function ebible_languages_to_bible_folders(language_codes) {
  "Which folders a list of language codes are read from, one for each and in the order they were asked in.";
  "The one next door done to each in turn, rather than the same lookup written out a second time, so that whatever the single answer learns the many answer knows too.";
  let bible_folders = list_map(language_codes, ebible_language_to_bible_folder);
  return bible_folders;
}
