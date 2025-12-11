import { marker } from "../../../love/public/src/marker.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_get_double_equal_assert(o1, o2, property_name) {
  marker("1");
  let name = object_property_get(o1, property_name);
  let name2 = object_property_get(o2, property_name);
  equal_assert(name, name2);
  return name;
}
