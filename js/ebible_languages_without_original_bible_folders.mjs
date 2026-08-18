import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_languages_without_original } from "./ebible_languages_without_original.mjs";
export function ebible_languages_without_original_bible_folders() {
  "The bible folders of the languages that have no original-language text of their own - the set a translation-only reader is built from.";
  let languages = ebible_languages_without_original();
  let property_name = bible_folder_key();
  let bible_folders = list_map_property(languages, property_name);
  return bible_folders;
}
