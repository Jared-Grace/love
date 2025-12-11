import { marker } from "../../../love/public/src/marker.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_get_double_equal_assert(
  imported,
  local,
  property_name,
) {
  marker("1");
  let name = object_property_get(imported, property_name);
  let name2 = object_property_get(local, property_name);
  equal_assert(name, name2);
  return name;
}
