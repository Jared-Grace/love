import { log } from "./log.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { global_get } from "./global_get.mjs";
import { marker } from "./marker.mjs";
export async function global_function_async(fn, lambda) {
  let global = global_get();
  marker("1");
  let value = object_property_initialize(global, fn.name, lambda);
  let awaited = await value;
  log(message);
  return awaited;
}
