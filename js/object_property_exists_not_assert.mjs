import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function object_property_exists_not_assert(object, property_name) {
  marker("1");
  let result = object_property_exists_not(object, property_name);
  assert(result);
}
