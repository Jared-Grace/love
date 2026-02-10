import { object_property_exists_assert } from "../../../love/public/src/object_property_exists_assert.mjs";
export function property_delete(object, property_name) {
  object_property_exists_assert(object, property_name);
  delete object[property_name];
}
