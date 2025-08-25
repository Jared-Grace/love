import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { marker } from "./marker.mjs";
import { assert } from "./assert.mjs";
export function object_property_exists_not_assert(object, property_name) {
  marker("1");
  let result = object_property_exists_not(object, property_name);
  assert(result);
}
