import { error_json_lamba } from "../../../love/public/src/error_json_lamba.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function property_get(object, property_name) {
  if (not(property_name in object)) {
    function object_get() {
      let properties = properties_get(object);
      let v = {
        property_name,
        properties,
        object,
      };
      return v;
    }
    error_json_lamba(object_get);
  }
  let value = object[property_name];
  return value;
}
