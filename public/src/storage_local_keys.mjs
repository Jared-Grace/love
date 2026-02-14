import { storage_local_keys_global } from "../../../karate_code/public/src/storage_local_keys_global.mjs";
import { storage_local_keys_browser } from "../../../love/public/src/storage_local_keys_browser.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
export function storage_local_keys() {
  let enabled2 = storage_local_enabled();
  let keys = null;
  let on_true = storage_local_keys_browser();
  let on_false = storage_local_keys_global();
  let result = null;
  if (enabled2) {
    result = on_true;
  } else {
    result = on_false;
  }
  keys = result;
  return keys;
}
