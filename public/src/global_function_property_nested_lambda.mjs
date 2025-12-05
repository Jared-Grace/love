import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_lambda_async } from "../../../love/public/src/object_property_lambda_async.mjs";
import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
export async function global_function_property_nested_lambda(
  fn,
  property_name,
  property_name_nested,
  lambda,
) {
  marker("1");
  let value = await global_function_property_initialize_async(
    fn,
    property_name,
  );
  let v = await object_property_lambda_async(
    value,
    property_name_nested,
    lambda,
  );
  return v;
}
