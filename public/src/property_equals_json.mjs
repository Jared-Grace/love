import { json_equal } from "../../../love/public/src/json_equal.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function property_equals_json(item, property_name, property_value) {
  let left = object_property_get(item, property_name);
  let v = json_equal(left, property_value);
  return v;
}
