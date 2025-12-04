import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_function_property_initialize(
  fn,
  property_name,
  value_initial,
) {
  let global = global_get();
  marker("1");
  let fn_object = object_property_initialize(global, fn.name, {});
  let value = object_property_initialize_lambda(
    fn_object,
    property_name,
    value_initial,
  );
  return value;
}
