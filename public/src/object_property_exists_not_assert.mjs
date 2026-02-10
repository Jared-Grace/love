import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function object_property_exists_not_assert(object, property_name) {
  let result = object_property_exists_not(object, property_name);
  assert(result);
  return;
  let e = object_property_exists(object, property_name);
  if (e) {
    let value = object_property_get(object, property_name);
    error_json({
      object,
      property_name,
      value,
    });
  }
  let result2 = not(result3);
  assert(result);
}
