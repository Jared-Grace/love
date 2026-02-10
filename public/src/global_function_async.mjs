import { property_initialize_lambda } from "../../../love/public/src/property_initialize_lambda.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
export async function global_function_async(fn, lambda) {
  let global = global_get();
  let value = property_initialize_lambda(global, fn.name, lambda);
  let awaited = await value;
  return awaited;
}
