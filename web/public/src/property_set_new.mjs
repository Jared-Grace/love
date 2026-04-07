import { property_set } from "../../../love/public/src/property_set.mjs";
export function property_set_new(property_name, value) {
  let object = {};
  property_set(object, property_name, value);
  return object;
}
