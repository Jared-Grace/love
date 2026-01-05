import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
export function object_property_initialize_empty(object, property_name) {
  let value2 = object_property_initialize(object, property_name, {});
  return value2;
}
