import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function ebible_bible_folders_sorted() {
  "Every bible this repo ships, named by its folder, in the order of the names.";
  "Asked of the list of bibles rather than written out, because the list grows and nothing about adding a bible asks whoever swept them all last to come back and remember it.";
  "Sorted by the name of the folder rather than left in the order the list happens to be in, because that order is by how many people speak the language - so a record written in it would shuffle from end to end whenever one of those numbers is corrected, and nothing in the shuffle would be about the bibles.";
  "Each language is asked for its folder rather than read for one, because a language names several translations now and only the first of them is the one it is read in.";
  let languages = ebible_languages();
  let bible_folders = list_map(languages, ebible_language_bible_folder);
  list_sort_text(bible_folders);
  return bible_folders;
}
