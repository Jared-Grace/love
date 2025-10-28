import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { storage_local_keys } from "../../../love/public/src/storage_local_keys.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { storage_local_key_prefix } from "../../../karate_code/public/src/storage_local_key_prefix.mjs";
export function storage_local_keys_context(context) {
  let prefix = storage_local_key_prefix(context);
  marker("1");
  let keys3 = storage_local_keys();
  let keys2 = list_filter_starts_with(keys3, prefix);
  let keys = list_map_prefix_without(keys2, prefix);
  return keys;
}
