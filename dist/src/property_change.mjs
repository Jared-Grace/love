import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function property_change(o, property, lambda$value) {
  let value = property_get(o, property);
  value = lambda$value(value);
  property_set(o, property, value);
  return value;
}
