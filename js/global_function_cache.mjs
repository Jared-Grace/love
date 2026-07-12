import { global_function_initialize } from "./global_function_initialize.mjs";
import { global_function_cache_generic } from "./global_function_cache_generic.mjs";
export function global_function_cache(fn, key, value_get) {
  let c = global_function_initialize(fn, {
    json: null,
    result: null,
  });
  let result = global_function_cache_generic(key, c, value_get);
  return result;
}
