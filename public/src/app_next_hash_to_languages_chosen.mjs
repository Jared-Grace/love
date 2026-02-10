import { text_split_plus } from "../../../love/public/src/text_split_plus.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_next_hash_to_languages_chosen(hash) {
  let l = property_get(hash, "l");
  let languages_chosen = text_split_plus(l);
  return languages_chosen;
}
