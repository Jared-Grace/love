import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_equals } from "../../../love/public/src/object_property_equals.mjs";
export function object_property_equals_json_lambda(
  property_name,
  property_value,
) {
  marker("1");
  let v2 = function lambda(item) {
    let v = object_property_equals(item, property_name, property_value);
    return v;
  };
  return v2;
}
