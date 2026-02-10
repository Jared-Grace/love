import { storage_local_keys_values } from "../../../karate_code/public/src/storage_local_keys_values.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
export function storage_local_keys_value_dictionary(dictionary, context) {
  let keys = properties_get(dictionary);
  let local_disabled = storage_local_keys_values(context, keys);
  return local_disabled;
}
