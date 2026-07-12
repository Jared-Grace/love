import { property_equals } from "./property_equals.mjs";
import { property_exists } from "./property_exists.mjs";
export function property_exists_equals(o, property_name, property_value) {
  let v =
    property_exists(o, property_name) &&
    property_equals(o, property_name, property_value);
  return v;
}
