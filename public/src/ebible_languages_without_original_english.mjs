import { list_remove_property } from "../../../love/public/src/list_remove_property.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_languages_without_original } from "../../../love/public/src/ebible_languages_without_original.mjs";
export function ebible_languages_without_original_english() {
  let languages = ebible_languages_without_original();
  let e = ebible_folder_english();
  list_remove_property(languages, "language_code", e);
  return languages;
}
