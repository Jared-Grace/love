import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function invoke_cache_key(fn, args) {
  let name = object_property_get(fn, "name");
  let j = json_to([name, args]);
  return j;
}
