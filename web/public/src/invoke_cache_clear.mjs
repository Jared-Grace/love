import { app_api_generic_url_body } from "../../../love/public/src/app_api_generic_url_body.mjs";
import { invoke_cache_global } from "../../../love/public/src/invoke_cache_global.mjs";
import { global_function_property_delete } from "../../../love/public/src/global_function_property_delete.mjs";
export function invoke_cache_clear(fn, args) {
  let key_get = app_api_generic_url_body(fn, args);
  let property_name = key_get();
  global_function_property_delete(invoke_cache_global, property_name);
}
