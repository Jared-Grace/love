import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { storage_local_key_prefix } from "../../../karate_code/public/src/storage_local_key_prefix.mjs";
import { storage_local_keys_starts_with } from "../../../karate_code/public/src/storage_local_keys_starts_with.mjs";
export function storage_local_keys_context(context) {
  let prefix = storage_local_key_prefix(context);
  let keys = storage_local_keys_starts_with(prefix);
  let mapped = list_map_prefix_without(keys, prefix);
  return mapped;
}
