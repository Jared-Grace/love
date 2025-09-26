import { list_map } from "./list_map.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_languages_to_bible_folders(language_codes) {
  let languages = ebible_languages();
  function lambda2(c) {
    let item = list_find_property(languages, "language_code", c);
    let bible_folder = object_property_get(item, "bible_folder");
    return bible_folder;
  }
  let mapped = list_map(language_codes, lambda2);
  return mapped;
}
