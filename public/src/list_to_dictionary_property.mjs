import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function list_to_dictionary_property(list, property) {
  marker("1");
  function key_get(item) {
    let key = object_property_get(item, property);
    return key;
  }
  let dictionary = list_to_dictionary_key(list, key_get);
  return dictionary;
}
