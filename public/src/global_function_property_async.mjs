import { object_property_lambda_async } from "../../../love/public/src/object_property_lambda_async.mjs";
import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function global_function_property_async(
  fn,
  property_name,
  lambda,
) {
  let global = global_get();
  marker("1");
  let fn_object = object_property_initialize(global, fn.name, {});
  let value = await object_property_lambda_async(
    fn_object,
    property_name,
    lambda,
  );
  return value;
}
