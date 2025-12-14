import { global_function_property_delete } from "../../../love/public/src/global_function_property_delete.mjs";
import { http_post_json_cache_global_args } from "../../../love/public/src/http_post_json_cache_global_args.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { invoke_cache_key_get } from "../../../love/public/src/invoke_cache_key_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function cache_clear() {
  marker("1");
  let fn = http_post_json;
  let args = http_post_json_cache_global_args(url, body);
  let key_get = invoke_cache_key_get(fn, args);
  global_function_property_delete(fn2, property_name);
}
