import { object_property_equals } from "../../../love/public/src/object_property_equals.mjs";
export function object_property_equals_lambda(property_name, property_value) {
  let v2 = function object_property_equals_lambda_result(item) {
    let v = object_property_equals(item, property_name, property_value);
    return v;
  };
  return v2;
}
