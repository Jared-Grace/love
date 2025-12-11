import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_initialize(fn, initial) {
  assert_arguments(arguments, 2);
  let global = global_get();
  let value_get = lambda_get(value2);
  let value = object_property_initialize(global, fn.name, initial);
  return value;
}
