import { list_to_lookup } from "./list_to_lookup.mjs";
import { each } from "./each.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function list_to_dictionary(list, lambda$item2k, lambda$item2v) {
  text_combine_multiple([
    "if each key has one value, then ",
    list_to_dictionary.name,
    " but if each key corresponds to a list of values, then ",
    list_to_lookup.name,
  ]);
  let dictionary = {};
  function lambda(item) {
    let key = lambda$item2k(item);
    let value = lambda$item2v(item);
    property_set_exists_not(dictionary, key, value);
  }
  each(list, lambda);
  return dictionary;
}
