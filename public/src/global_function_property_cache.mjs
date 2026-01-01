import { global_function_cache_generic } from "../../../love/public/src/global_function_cache_generic.mjs";
import { global_function_property_initialize } from "../../../love/public/src/global_function_property_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function global_function_property_cache(
  fn,
  property_name,
  key,
  value_get,
) {
  marker("1");
  let c = global_function_property_initialize(fn, property_name, {
    json: null,
    result: null,
  });
  let result = global_function_cache_generic(key, c, value_get);
  return result;
}
