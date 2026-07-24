import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { storage_local_specify_get_json } from "./storage_local_specify_get_json.mjs";
import { json_from } from "./json_from.mjs";
export function storage_local_specify_get(storage_local_key) {
  let json = storage_local_specify_get_json(storage_local_key);
  let nn = null_not_is(json);
  let result = null;
  if (nn) {
    let r = storage_json_parse_or_throw(storage_local_key, json);
    result = property_get(r, "value");
  }
  return result;
}
