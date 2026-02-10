import { property_exists } from "../../../love/public/src/property_exists.mjs";
import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
export function object_property_exists_assert(object, property_name) {
  let result = property_exists(object, property_name);
  function lambda() {
    let v = {
      object,
      property_name,
    };
    return v;
  }
  assert_json_get(result, lambda);
}
