import { property_initialize_lambda } from "../../../love/public/src/property_initialize_lambda.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export function global_function_initialize_lambda(fn, lambda) {
  arguments_assert(arguments, 2);
  let global = global_get();
  let value = property_initialize_lambda(global, fn.name, lambda);
  return value;
}
