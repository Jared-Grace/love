import { app_api_cache_args } from "../../../love/public/src/app_api_cache_args.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
export function app_api_cache_clear(fn, f_args) {
  const args_cache = app_api_cache_args(fn, f_args);
  invoke_cache_clear(http_post_json, args_cache);
}
