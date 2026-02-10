import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function ebible_language_to_bible_folder(language) {
  let languages_list = ebible_languages();
  let filtered = list_find_property(languages_list, "language_code", language);
  let bible_folder = property_get(filtered, "bible_folder");
  return bible_folder;
}
