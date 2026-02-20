import { property_initialize_lambda_async } from "../../../love/public/src/property_initialize_lambda_async.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export async function global_function_initialize_lambda_async(fn, lambda) {
  arguments_assert(arguments, 2);
  let global = global_get();
  let value = await property_initialize_lambda_async(global, fn.name, lambda);
  return value;
}
