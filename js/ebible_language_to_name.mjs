import { language_code_key } from "./language_code_key.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_language_to_name(language) {
  "What a language is called, from the short code a link names it by.";
  "The twin of the one next door that answers with the folder. A code is what an address carries and what a reader chose; a name is the only one of the two worth showing anybody.";
  let languages_list = ebible_languages();
  let property_name = language_code_key();
  let name = list_find_property_get(
    languages_list,
    property_name,
    language,
    "name",
  );
  return name;
}
