import { hash_fields_all } from "./hash_fields_all.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function hash_fields_keys() {
  "The word each checkable field of a page address is spelled with in the link.";
  let fields = hash_fields_all();
  let keys = list_map_property(fields, "key");
  return keys;
}
