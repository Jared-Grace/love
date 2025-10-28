import { storage_local_key_prefix } from "../../../karate_code/public/src/storage_local_key_prefix.mjs";
import { storage_local_keys_global_starts_with } from "../../../karate_code/public/src/storage_local_keys_global_starts_with.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function storage_local_keys_global_context(context) {
  marker("1");
  let prefix = storage_local_key_prefix(context);
  let filtered = storage_local_keys_global_starts_with(prefix);
  return filtered;
}
