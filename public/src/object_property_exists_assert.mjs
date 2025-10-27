import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
export function object_property_exists_assert(object, property_name) {
  let result = object_property_exists(object, property_name);
  return;
  assert_json_get(result, () => {});
}
