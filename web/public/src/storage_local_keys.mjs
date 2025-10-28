import { storage_local_keys_global } from "../../../karate_code/public/src/storage_local_keys_global.mjs";
import { storage_local_keys_browser } from "../../../love/public/src/storage_local_keys_browser.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
export function storage_local_keys() {
  let enabled2 = storage_local_enabled();
  let keys3 = null;
  if (enabled2) {
    keys3 = storage_local_keys_browser();
  } else {
    keys3 = storage_local_keys_global();
  }
  return keys3;
}
