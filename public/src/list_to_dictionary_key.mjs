import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
export function list_to_dictionary_key(list, lambda$item2v, lambda$item2k) {
  marker("1");
  let dictionary = {};
  function lambda(item) {
    let key = lambda$item2k(item);
    let value = lambda$item2v(item);
    object_property_set_exists_not(dictionary, key, value);
  }
  each(list, lambda);
  return dictionary;
}
