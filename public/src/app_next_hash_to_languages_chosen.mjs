import { text_split_plus } from "../../../love/public/src/text_split_plus.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_next_hash_to_languages_chosen(hash) {
  let l = object_property_get(hash, "l");
  let languages_chosen = text_split_plus(l);
  return languages_chosen;
}
