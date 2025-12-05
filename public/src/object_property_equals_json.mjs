import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { equal } from "./equal.mjs";
export function object_property_equals_json(
  item,
  property_name,
  property_value,
) {
  marker("1");
  let left = object_property_get(item, property_name);
  let v = equal(left, property_value);
  return v;
}
