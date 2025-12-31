import { list_to_dictionary_generic } from "../../../love/public/src/list_to_dictionary_generic.mjs";
import { identity } from "./identity.mjs";
export function list_to_dictionary(list, lambda$item) {
  let key_get = identity;
  let dictionary = list_to_dictionary_generic(key_get, lambda$item, list);
  return dictionary;
}
