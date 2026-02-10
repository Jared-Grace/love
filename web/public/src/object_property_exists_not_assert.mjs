import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { error_json } from "../../../love/public/src/error_json.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export function object_property_exists_not_assert(object, property_name) {
  let e = object_property_exists(object, property_name);
  if (e) {
    let value = object_property_get(object, property_name);
    error_json({
      object,
      property_name,
      value,
    });
  }
}
