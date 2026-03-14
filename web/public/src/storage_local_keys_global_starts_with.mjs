import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { storage_local_keys_global } from "../../../love/public/src/storage_local_keys_global.mjs";
export function storage_local_keys_global_starts_with(prefix) {
  let properties = storage_local_keys_global();
  let filtered = list_filter_starts_with(properties, prefix);
  return filtered;
}
