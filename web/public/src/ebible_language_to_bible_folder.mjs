import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function ebible_language_to_bible_folder(languages_list, language) {
  let filtered = list_find_property(languages_list, "language_code", language);
  let bible_folder = object_property_get(filtered, "bible_folder");
  return bible_folder;
}
