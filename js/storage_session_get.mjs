import { storage_json_value_or_null } from "./storage_json_value_or_null.mjs";
import { storage_key_get } from "./storage_key_get.mjs";
export function storage_session_get(app_fn, key) {
  "session storage belongs to one browser tab: two tabs of the same app each keep their own value, where local storage would hand both tabs the same one";
  let storage_key = storage_key_get(app_fn, key);
  let json = sessionStorage.getItem(storage_key);
  let result = storage_json_value_or_null(storage_key, json);
  return result;
}
