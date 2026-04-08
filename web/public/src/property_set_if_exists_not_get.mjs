import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_set_if_exists_not } from "../../../love/public/src/property_set_if_exists_not.mjs";
export function property_set_if_exists_not_get(a, p, value) {
  property_set_if_exists_not(a, p, value);
  let value = property_get(hash, p);
  return value;
}
