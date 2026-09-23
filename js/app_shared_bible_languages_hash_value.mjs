import { language_code_key } from "./language_code_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
export function app_shared_bible_languages_hash_value(languages_chosen) {
  "the chosen languages as the address spells them: their codes joined by plus, or english when none is chosen, because a reader always reads in some language";
  let property_name = language_code_key();
  let codes = list_map_property(languages_chosen, property_name);
  if (list_empty_is(codes)) {
    let v = ebible_language_en_code();
    codes = [v];
  }
  let l = list_join_plus(codes);
  return l;
}
