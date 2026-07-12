import { property_set } from "./property_set.mjs";
export function property_set_new(property_name, value) {
  let object = {};
  property_set(object, property_name, value);
  return object;
}
