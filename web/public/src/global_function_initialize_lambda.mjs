import { marker } from "../../../love/public/src/marker.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_initialize_lambda(fn, lambda) {
  marker("1");
  assert_arguments(arguments, 2);
  let global = global_get();
  let value_initial = lambda();
  let value = object_property_initialize(global, fn.name, value_initial);
  return value;
}
