import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export function ebible_languages_to_bible_folders(language_codes) {
  let languages = ebible_languages();
  function lambda2(c) {
    let item = list_find_property(languages, "language_code", c);
    let bible_folder = property_get(item, "bible_folder");
    return bible_folder;
  }
  let bible_folders = list_map(language_codes, lambda2);
  return bible_folders;
}
