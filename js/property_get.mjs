import { error_json_lamba } from "./error_json_lamba.mjs";
import { properties_get } from "./properties_get.mjs";
import { not } from "./not.mjs";
export function property_get(object, property_name) {
  if (not(property_name in object)) {
    function object_get() {
      let properties = properties_get(object);
      ("this way you see ",
        property_name,
        " if you receive truncated beginning or ending");
      let v = {
        property_name,
        properties,
        object,
        properties_end: properties,
        property_name_end: property_name,
      };
      return v;
    }
    error_json_lamba(object_get);
  }
  let value = object[property_name];
  return value;
}
