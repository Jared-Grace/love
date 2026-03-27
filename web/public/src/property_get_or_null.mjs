import { property_get_or } from "../../../love/public/src/property_get_or.mjs";
export function property_get_or_null(hash, property) {
  let value = property_get_or(hash, property, null);
  return value;
}
