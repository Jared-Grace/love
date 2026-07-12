import { list_map_property } from "./list_map_property.mjs";
import { ebible_languages_without_original } from "./ebible_languages_without_original.mjs";
export function ebible_languages_without_original_bible_folders() {
  let languages = ebible_languages_without_original();
  let bible_folders = list_map_property(languages, "bible_folder");
  return bible_folders;
}
