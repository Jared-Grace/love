import { storage_session_set } from "./storage_session_set.mjs";
import { storage_session_get } from "./storage_session_get.mjs";
import { null_is } from "./null_is.mjs";
export function storage_session_initialize(app_fn, key, value_initial) {
  "this tab has nothing yet, so start it at the given value and keep that";
  let value = storage_session_get(app_fn, key);
  let n = null_is(value);
  if (n) {
    storage_session_set(app_fn, key, value_initial);
    value = storage_session_get(app_fn, key);
  }
  return value;
}
