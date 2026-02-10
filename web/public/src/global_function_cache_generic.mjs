import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function global_function_cache_generic(key, c, value_get) {
  let json = json_to(key);
  let json_existing = property_get(c, "json");
  if (equal_not(json, json_existing)) {
    let r = value_get();
    object_property_set(c, "result", r);
    object_property_set(c, "json", json);
  }
  let result = property_get(c, "result");
  return result;
}
