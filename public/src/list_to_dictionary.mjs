import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function list_to_dictionary(list, lambda$item) {
  let key_get = identity;
  let dictionary = list_to_dictionary_key(list, lambda$item, key_get);
  return dictionary;
}
