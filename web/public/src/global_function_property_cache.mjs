import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function global_function_property_cache(fn, key, value_get) {
  marker("1");
  let json = json_to(key);
  let c = global_function_initialize(fn, {
    json: null,
    result: null,
  });
  let json_existing = object_property_get(c, "json");
  if (equal_not(json, json_existing)) {
    let r = value_get();
    object_property_set(c, "result", r);
    object_property_set(c, "json", json);
  }
  let result = object_property_get(c, "result");
  return result;
}
