import { assert } from "./assert.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_exists_not_assert(object, property_name) {
  let result = object_property_exists(object, property_name);
  assert(result);
}
