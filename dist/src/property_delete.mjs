import { property_exists_assert } from "../../../love/public/src/property_exists_assert.mjs";
export function property_delete(object, property_name) {
  property_exists_assert(object, property_name);
  delete object[property_name];
}
