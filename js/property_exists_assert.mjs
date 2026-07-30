import { property_exists } from "./property_exists.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
export function property_exists_assert(object, property_name) {
  let result = property_exists(object, property_name);
  let v = {
    object,
    property_name,
  };
  assert_json(result, v);
}
