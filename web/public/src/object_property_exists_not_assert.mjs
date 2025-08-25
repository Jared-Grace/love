import { marker } from "./marker.mjs";
import { assert } from "./assert.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_exists_not_assert(object, property_name) {
  marker("1");
  let result = object_property_exists(object, property_name);
  assert(result);
}
