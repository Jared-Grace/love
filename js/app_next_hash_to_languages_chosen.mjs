import { text_split_plus } from "./text_split_plus.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
export function app_next_hash_to_languages_chosen(hash) {
  let l = property_get_or(hash, "l", ebible_language_en_code());
  let languages_chosen = text_split_plus(l);
  return languages_chosen;
}
