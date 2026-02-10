import { property_equals } from "../../../love/public/src/property_equals.mjs";
export function property_equals_lambda(property_name, property_value) {
  let v2 = function object_property_equals_lambda_result(item) {
    let v = property_equals(item, property_name, property_value);
    return v;
  };
  return v2;
}
