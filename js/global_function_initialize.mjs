import { global_function_initialize_lambda } from "./global_function_initialize_lambda.mjs";
import { lambda_get } from "./lambda_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function global_function_initialize(fn, initial) {
  arguments_assert(arguments, 2);
  let value_get = lambda_get(initial);
  let value = global_function_initialize_lambda(fn, value_get);
  return value;
}
