import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { identity } from "./identity.mjs";
export function list_to_dictionary_value(list, lambda$item2v) {
  let key_get = identity;
  let dictionary = list_to_dictionary(list, key_get, lambda$item2v);
  return dictionary;
}
