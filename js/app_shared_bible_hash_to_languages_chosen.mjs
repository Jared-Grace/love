import { app_shared_bible_hash_to_languages_chosen_or } from "./app_shared_bible_hash_to_languages_chosen_or.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
export function app_shared_bible_hash_to_languages_chosen(hash) {
  "The language codes a link names, falling back to english when it names none.";
  let en = ebible_language_en_code();
  let languages_chosen = app_shared_bible_hash_to_languages_chosen_or(hash, en);
  return languages_chosen;
}
