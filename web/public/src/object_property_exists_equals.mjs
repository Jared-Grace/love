import { property_equals } from "../../../love/public/src/property_equals.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function object_property_exists_equals(
  o,
  property_name,
  property_value,
) {
  let v =
    object_property_exists(property_name) &&
    property_equals(o, property_name, property_value);
  return v;
}
