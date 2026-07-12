import { property_initialize_lambda_async } from "./property_initialize_lambda_async.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { global_get } from "./global_get.mjs";
export async function global_function_property_initialize_async(
  fn,
  property_name,
  lambda,
) {
  let global = global_get();
  let fn_object = property_initialize(global, fn.name, {});
  let value = await property_initialize_lambda_async(
    fn_object,
    property_name,
    lambda,
  );
  return value;
}
