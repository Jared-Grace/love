import { list_find_property_get } from "./list_find_property_get.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_language_to_bible_folder(language) {
  let languages_list = ebible_languages();
  let bible_folder = list_find_property_get(
    languages_list,
    "language_code",
    language,
    "bible_folder",
  );
  return bible_folder;
}
