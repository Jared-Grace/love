import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function object_property_get_curry_right(property_name) {
  let f = function object_property_get_curry_right_result(item) {
    let value = object_property_get(item, property_name);
    return value;
  };
  return f;
}
