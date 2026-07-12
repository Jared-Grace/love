import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_remove_property } from "./list_remove_property.mjs";
import { ebible_languages_without_original } from "./ebible_languages_without_original.mjs";
export function ebible_languages_without_original_english() {
  let languages = ebible_languages_without_original();
  let e = ebible_language_en_code();
  list_remove_property(languages, "language_code", e);
  return languages;
}
