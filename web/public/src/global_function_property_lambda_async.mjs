import { global_function_initialize_object } from "../../../love/public/src/global_function_initialize_object.mjs";
import { property_initialize_lambda_info_async } from "../../../love/public/src/property_initialize_lambda_info_async.mjs";
export async function global_function_property_lambda_async(
  fn,
  property_name,
  lambda,
) {
  let fn_object = global_function_initialize_object(fn);
  let value = await property_initialize_lambda_info_async(
    fn_object,
    property_name,
    lambda,
  );
  return value;
}
