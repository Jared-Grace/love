import { invoke_cache_global } from "../../../love/public/src/invoke_cache_global.mjs";
import { global_function_property_delete } from "../../../love/public/src/global_function_property_delete.mjs";
import { invoke_cache_key_get } from "../../../love/public/src/invoke_cache_key_get.mjs";
export function invoke_cache_clear(fn, args) {
  let key_get = invoke_cache_key_get(fn, args);
  let property_name = key_get();
  global_function_property_delete(invoke_cache_global, property_name);
}
