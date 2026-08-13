import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split_plus } from "./text_split_plus.mjs";
export function app_shared_hash_field_values(hash, field) {
  "What a link actually says for one of its fields, always as a list - one item for a field that holds a single word, several for a field that holds a run of them, and nothing at all when the link is silent about it.";
  "Answering as a list even for a field that holds one word is what lets everything above this treat the two kinds the same. A field holding one word is a field holding a list that happens to be one long, and the alternative - every reader of a field asking first which kind it is - is the same branch written once per reader.";
  let key = property_get(field, "key");
  let written = property_get_or(hash, key, "");
  let silent = text_empty_is(written);
  if (silent) {
    let nothing = [];
    return nothing;
  }
  let list_is = property_get(field, "list_is");
  if (list_is) {
    let values = text_split_plus(written);
    return values;
  }
  let one = [written];
  return one;
}
