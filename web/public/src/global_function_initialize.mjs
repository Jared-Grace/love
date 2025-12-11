import { global_function_initialize_lambda } from "../../../love/public/src/global_function_initialize_lambda.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { global_get } from "./global_get.mjs";
export function global_function_initialize(fn, initial) {
  assert_arguments(arguments, 2);
  let value_get = lambda_get(initial);
  let value = global_function_initialize_lambda(global, fn.name, value_get);
  return value;
}
