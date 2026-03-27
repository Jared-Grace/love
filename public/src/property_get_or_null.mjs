import { property_get_or } from "../../../love/public/src/property_get_or.mjs";
export function property_get_or_null(object, property) {
  let value = property_get_or(object, property, null);
  return value;
}
