import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
export function property_initialize_empty(object, property_name) {
  let value = property_initialize(object, property_name, {});
  return value;
}
