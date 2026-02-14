import { storage_local_keys_global } from "../../../karate_code/public/src/storage_local_keys_global.mjs";
import { storage_local_keys_browser } from "../../../love/public/src/storage_local_keys_browser.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
export function storage_local_keys() {
  let enabled = storage_local_enabled();
  let keys = null;
  let result = null;
  if (enabled) {
    result = storage_local_keys_browser();
  } else {
    result = storage_local_keys_global();
  }
  keys = result;
  return keys;
}
