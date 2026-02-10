import { not } from "../../../love/public/src/not.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function object_property_exists_not_assert(object, property_name) {
  let result = object_property_exists_not(object, property_name);
  assert(result);
  return;
  let result3 = object_property_exists(object, property_name);
  if (false) {
  }
  let result2 = not(result3);
  assert(result);
}
