import { storage_local_disable } from "../../../love/public/src/storage_local_disable.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { storage_local_keys_browser_context } from "../../../love/public/src/storage_local_keys_browser_context.mjs";
export function storage_local_disable_if_keys_empty(context) {
  let keys = storage_local_keys_browser_context(context);
  let e = list_empty_is(keys);
  if (e) {
    storage_local_disable(context);
  }
}
