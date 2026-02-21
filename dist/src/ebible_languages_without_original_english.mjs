import { ebible_language_en_code } from "../../../love/public/src/ebible_language_en_code.mjs";
import { list_remove_property } from "../../../love/public/src/list_remove_property.mjs";
import { ebible_languages_without_original } from "../../../love/public/src/ebible_languages_without_original.mjs";
export function ebible_languages_without_original_english() {
  let languages = ebible_languages_without_original();
  let e = ebible_language_en_code();
  list_remove_property(languages, "language_code", e);
  return languages;
}
