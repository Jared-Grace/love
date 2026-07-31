import { storage_json_value_or_null } from "./storage_json_value_or_null.mjs";
import { storage_local_specify_get_json } from "./storage_local_specify_get_json.mjs";
export function storage_local_specify_get(storage_local_key) {
  let json = storage_local_specify_get_json(storage_local_key);
  let result = storage_json_value_or_null(storage_local_key, json);
  return result;
}
