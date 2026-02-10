import { property_initialize_lambda } from "../../../love/public/src/property_initialize_lambda.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export function global_function_initialize_lambda(fn, lambda) {
  assert_arguments(arguments, 2);
  let global = global_get();
  let value = property_initialize_lambda(global, fn.name, lambda);
  return value;
}
