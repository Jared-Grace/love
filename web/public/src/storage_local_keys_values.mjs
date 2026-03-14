import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
export function storage_local_keys_values(context, keys) {
  function lambda7(key) {
    let v = storage_local_get_context(context, key);
    return v;
  }
  let dictionary = list_to_dictionary_value(keys, lambda7);
  return dictionary;
}
