import { storage_local_key_get } from "./storage_local_key_get.mjs";
import { storage_json_parse_or_throw } from "./storage_json_parse_or_throw.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function storage_session_get(app_fn, key) {
  "session storage belongs to one browser tab: two tabs of the same app each keep their own value, where local storage would hand both tabs the same one";
  let storage_key = storage_local_key_get(app_fn, key);
  let json = sessionStorage.getItem(storage_key);
  let nn = null_not_is(json);
  let result = null;
  if (nn) {
    let r = storage_json_parse_or_throw(storage_key, json);
    result = property_get(r, "value");
  }
  return result;
}
