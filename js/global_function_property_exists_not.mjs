import { not } from "./not.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
export function global_function_property_exists_not(fn, property_name) {
  let exists = global_function_property_exists(fn, property_name);
  let ne = not(exists);
  return ne;
}
