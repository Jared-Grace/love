import { object_property_initialize_lambda } from "../../../love/public/src/object_property_initialize_lambda.mjs";
import { global_get } from "../../../love/public/src/global_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function global_function_async(fn, lambda) {
  let global = global_get();
  marker("1");
  let value = object_property_initialize_lambda(global, fn.name, lambda);
  let awaited = await value;
  return awaited;
}
