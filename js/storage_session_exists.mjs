import { storage_key_get } from "./storage_key_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function storage_session_exists(app_fn, key) {
  "has this tab stored anything under the key yet — a sibling tab having stored one does not count";
  let storage_key = storage_key_get(app_fn, key);
  let json = sessionStorage.getItem(storage_key);
  let exists = null_not_is(json);
  return exists;
}
