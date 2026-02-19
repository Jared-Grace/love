import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_equals } from "../../../love/public/src/property_equals.mjs";
export function property_set_if_equals(
  node,
  property_name,
  name_from,
  name_to,
) {
  if (property_equals(node, property_name, name_from)) {
    property_set(node, property_name, name_to);
  }
}
