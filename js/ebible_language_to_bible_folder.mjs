import { language_code_key } from "./language_code_key.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_language_to_bible_folder(language) {
  "Which folder a language code is read from - the first of the translations that language lists.";
  "The record is found first and asked for its folder afterwards, rather than the folder being read straight off the record, because where the folder lives moved into the list of translations and only one place should know that.";
  let languages_list = ebible_languages();
  let property_name = language_code_key();
  let found = list_find_property(languages_list, property_name, language);
  let bible_folder = ebible_language_bible_folder(found);
  return bible_folder;
}
