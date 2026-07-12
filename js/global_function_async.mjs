import { property_initialize_lambda } from "./property_initialize_lambda.mjs";
import { global_get } from "./global_get.mjs";
export async function global_function_async(fn, lambda) {
  let global = global_get();
  let value = property_initialize_lambda(global, fn.name, lambda);
  let awaited = await value;
  return awaited;
}
