import { not } from "./not.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function object_property_exists_not(object, property_name) {
  let result = object_property_exists(object, property_name);
  let n = not(result);
  return n;
}
