import { property_equals } from "../../../love/public/src/property_equals.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export function object_property_exists_equals(
  o,
  property_name,
  property_value,
) {
  let v =
    property_exists(property_name) &&
    property_equals(o, property_name, property_value);
  return v;
}
