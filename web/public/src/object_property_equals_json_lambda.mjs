import { object_property_equals_json } from "../../../love/public/src/object_property_equals_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function object_property_equals_json_lambda(
  property_name,
  property_value,
) {
  marker("1");
  let v2 = function lambda(item) {
    let v = object_property_equals_json(item, property_name, property_value);
    return v;
  };
  return v2;
}
