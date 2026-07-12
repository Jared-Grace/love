import { property_initialize_lambda_info_async } from "./property_initialize_lambda_info_async.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { global_get } from "./global_get.mjs";
export async function global_function_initialize_lambda_info_async(fn, lambda) {
  arguments_assert(arguments, 2);
  let global = global_get();
  let value = await property_initialize_lambda_info_async(
    global,
    fn.name,
    lambda,
  );
  return value;
}
