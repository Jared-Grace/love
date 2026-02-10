import { property_equals_json } from "../../../love/public/src/property_equals_json.mjs";
export function object_property_equals_json_lambda(
  property_name,
  property_value,
) {
  let v2 = function lambda(item) {
    let v = property_equals_json(item, property_name, property_value);
    return v;
  };
  return v2;
}
