import { object_property_lambda_async } from "./object_property_lambda_async.mjs";
import { global_get } from "./global_get.mjs";
import { marker } from "./marker.mjs";
export async function global_function_async(fn, lambda) {
  let global = global_get();
  marker("1");
  let value = await object_property_lambda_async(global, fn.name, lambda);
  return value;
}
