import { object_property_lambda } from "./object_property_lambda.mjs";
import { global_get } from "./global_get.mjs";
import { marker } from "./marker.mjs";
export async function global_function_async(fn, lambda) {
  let global = global_get();
  marker("1");
  let value = object_property_lambda(global, fn.name, lambda);
  let awaited = await value();
  return awaited;
}
