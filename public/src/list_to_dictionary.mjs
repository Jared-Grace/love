import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
export function list_to_dictionary(list, lambda$item2v, lambda$item2k) {
  marker("1");
  let dictionary = {};
  function lambda(item) {
    let key = lambda$item2k(item);
    let value = lambda$item2v(item);
    object_property_set_exists_not(dictionary, key, value);
  }
  each(list, lambda);
  return dictionary;
  "if each key has one value, then " +
    list_to_dictionary.name +
    " but if each key corresponds to a list of values, then " +
    list_to_lookup.name;
}
