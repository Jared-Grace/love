import { marker } from "../../../love/public/src/marker.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { storage_local_key_prefix } from "../../../karate_code/public/src/storage_local_key_prefix.mjs";
import { storage_local_keys_starts_with } from "../../../karate_code/public/src/storage_local_keys_starts_with.mjs";
export function storage_local_keys_browser_context(context) {
  marker("1");
  let prefix = storage_local_key_prefix(context);
  let keys = storage_local_keys_starts_with(prefix);
  let mapped = list_map_prefix_without(keys, prefix);
  return mapped;
}
