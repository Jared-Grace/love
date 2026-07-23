import { list_filter_prefix_without } from "./list_filter_prefix_without.mjs";
import { storage_local_keys } from "./storage_local_keys.mjs";
import { storage_local_key_prefix } from "./storage_local_key_prefix.mjs";
export function storage_local_keys_context(context) {
  let prefix = storage_local_key_prefix(context);
  let keys3 = storage_local_keys();
  let keys = list_filter_prefix_without(keys3, prefix);
  return keys;
}
