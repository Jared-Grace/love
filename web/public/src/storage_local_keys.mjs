import { ternary } from "../../../love/public/src/ternary.mjs";
import { storage_local_keys_global } from "../../../karate_code/public/src/storage_local_keys_global.mjs";
import { storage_local_keys_browser } from "../../../love/public/src/storage_local_keys_browser.mjs";
import { storage_local_enabled } from "../../../love/public/src/storage_local_enabled.mjs";
export function storage_local_keys() {
  let enabled2 = storage_local_enabled();
  let keys = null;
  let on_true = storage_local_keys_browser();
  let on_false = storage_local_keys_global();
  keys = ternary(enabled2, on_true, on_false);
  return keys;
}
