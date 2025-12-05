import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { equal } from "./equal.mjs";
export function object_property_equals(item, property_name, property_value) {
  let left = object_property_get(item, property_name);
  let v = equal(left, property_value);
  return v;
}
