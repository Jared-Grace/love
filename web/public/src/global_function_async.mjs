import { object_property_lambda_async } from "./object_property_lambda_async.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
import { marker } from "./marker.mjs";
export async function global_function_async(fn, property_name, lambda) {
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
