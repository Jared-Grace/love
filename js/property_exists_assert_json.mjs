import { property_exists } from "./property_exists.mjs";
import { assert_json } from "./assert_json.mjs";
export function property_exists_assert_json(object, property_name, json) {
  let result = property_exists(object, property_name);
  assert_json(result, {
    object,
    property_name,
    json,
  });
}
