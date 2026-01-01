import { marker } from "../../../love/public/src/marker.mjs";
import { list_to_dictionary } from "../../../love/public/src/list_to_dictionary.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function list_to_dictionary_key(list, lambda$item) {
  marker("1");
  let key_get = identity;
  let dictionary = list_to_dictionary(list, lambda$item, key_get);
  return dictionary;
}
