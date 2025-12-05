import { global_function_property_initialize } from "../../../love/public/src/global_function_property_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_lambda_async } from "../../../love/public/src/object_property_lambda_async.mjs";
export async function global_function_property_nested_lambda(
  fn,
  property_name,
  property_name_nested,
  lambda,
) {
  marker("1");
  let value = global_function_property_initialize(fn, property_name);
  let v = await object_property_lambda_async(
    value,
    property_name_nested,
    lambda,
  );
  return v;
}
