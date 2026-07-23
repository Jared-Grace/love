import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_next_hash_to_languages_chosen } from "./app_next_hash_to_languages_chosen.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { list_map } from "./list_map.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export function app_bible_languages_chosen_get(context) {
  "the chosen languages live in the url hash (key l), so a shared bible link opens in the same languages and the verse and chapter readers stay in step; absent a hash this defaults to english";
  let hash = html_hash_object_get();
  let codes = app_next_hash_to_languages_chosen(hash);
  let languages = ebible_languages();
  function to_language(code) {
    return list_find_property_or_null(languages, "language_code", code);
  }
  let mapped = list_map(codes, to_language);
  let languages_chosen = list_filter_null_not_is(mapped);
  return languages_chosen;
}
