import { property_set } from "../../../love/public/src/property_set.mjs";
import { property_exists_not_assert } from "../../../love/public/src/property_exists_not_assert.mjs";
export function property_set_exists_not(object, property_name, value) {
  property_exists_not_assert(object, property_name);
  property_set(object, property_name, value);
}
