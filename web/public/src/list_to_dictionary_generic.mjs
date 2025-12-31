import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
export function list_to_dictionary_generic(key_get, lambda$item, list) {
  marker("1");
  let dictionary = {};
  function lambda(item) {
    let key = key_get(item);
    let value = lambda$item(item);
    object_property_set_exists_not(dictionary, key, value);
  }
  each(list, lambda);
  return dictionary;
}
