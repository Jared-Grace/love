import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function list_to_dictionary_property(list, property) {
  function key_get(item) {
    let key = property_get(item, property);
    return key;
  }
  let dictionary = list_to_dictionary_key(list, key_get);
  return dictionary;
}
