import { marker } from "./marker.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
export function list_to_dictionary_async(list, lambda$item) {
  marker("1");
  let dictionary = {};
  function lambda(item) {
    let value = lambda$item(item);
    object_property_set(dictionary, item, value);
  }
  each(list, lambda);
  return dictionary;
}
