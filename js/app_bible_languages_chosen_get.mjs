import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_next_hash_to_languages_chosen } from "./app_next_hash_to_languages_chosen.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
export function app_bible_languages_chosen_get() {
  "the chosen languages live in the url hash (key l), so a shared bible link opens in the same languages and the verse and chapter readers stay in step; absent a hash this defaults to english";
  let hash = html_hash_object_get();
  let codes = app_next_hash_to_languages_chosen(hash);
  let languages_chosen = ebible_languages_from_codes(codes);
  return languages_chosen;
}
