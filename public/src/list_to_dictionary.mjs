import { each } from "../../../love/public/src/each.mjs";
import { identity } from "./identity.mjs";
import { object_property_set_exists_not } from "./object_property_set_exists_not.mjs";
export function list_to_dictionary(list, lambda$item) {
  let key_get = identity;
  let dictionary = {};
  function lambda(item) {
    let key = key_get(item);
    let value = lambda$item(item);
    object_property_set_exists_not(dictionary, key, value);
  }
  each(list, lambda);
  return dictionary;
}
