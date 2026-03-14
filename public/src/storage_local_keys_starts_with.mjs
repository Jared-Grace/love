import { storage_local_keys_browser } from "../../../love/public/src/storage_local_keys_browser.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
export function storage_local_keys_starts_with(prefix) {
  let keys = storage_local_keys_browser();
  let filtered = list_filter_starts_with(keys, prefix);
  return filtered;
}
