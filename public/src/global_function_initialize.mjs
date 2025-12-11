import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_initialize(fn, initial) {
  assert_arguments(arguments, 2);
  let global = global_get();
  (function lambda() {
    return initial;
  });
  let value = object_property_initialize(global, fn.name, initial);
  return value;
}
