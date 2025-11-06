import { storage_local_keys_values } from "../../../karate_code/public/src/storage_local_keys_values.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
export function storage_local_keys_value_dictionary(dictionary, context) {
  let keys = object_properties(dictionary);
  let local_disabled = storage_local_keys_values(context, keys);
  return local_disabled;
}
