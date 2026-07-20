import { ebible_language_original_code } from "./ebible_language_original_code.mjs";
import { list_remove_property } from "./list_remove_property.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export function ebible_languages_without_original() {
  let languages = ebible_languages();
  let original = ebible_language_original_code();
  list_remove_property(languages, "language_code", original);
  return languages;
}
