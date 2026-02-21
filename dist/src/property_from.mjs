import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function property_from(to, property_name, from) {
  let value = property_get(from, property_name);
  property_set(to, property_name, value);
}
