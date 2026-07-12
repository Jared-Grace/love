import { list_to_dictionary_key } from "./list_to_dictionary_key.mjs";
import { property_get } from "./property_get.mjs";
export function list_to_dictionary_property(list, property) {
  function key_get(item) {
    let key = property_get(item, property);
    return key;
  }
  let dictionary = list_to_dictionary_key(list, key_get);
  return dictionary;
}
