import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { identity } from "./identity.mjs";
export function list_to_dictionary_key(list, lambda$item2k) {
  let value_get = identity;
  let dictionary = list_to_dictionary(list, lambda$item2k, value_get);
  return dictionary;
}
