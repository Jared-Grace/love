import { global_function_property_initialize } from "../../../love/public/src/global_function_property_initialize.mjs";
import { property_lambda_async } from "../../../love/public/src/property_lambda_async.mjs";
export async function global_function_property_nested_lambda(
  fn,
  property_name,
  property_name_nested,
  lambda,
) {
  let value = global_function_property_initialize(fn, property_name, {});
  let v = await property_lambda_async(value, property_name_nested, lambda);
  return v;
}
