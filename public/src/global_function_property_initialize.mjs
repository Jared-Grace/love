import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export function global_function_property_initialize(
  fn,
  property_name,
  value_initial,
) {
  let global = global_get();
  let fn_object = property_initialize(global, fn.name, {});
  let value = property_initialize(fn_object, property_name, value_initial);
  return value;
}
