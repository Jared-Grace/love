import { invoke_cache_clear } from "./invoke_cache_clear.mjs";
import { http_post_json_cache_global_args } from "./http_post_json_cache_global_args.mjs";
import { http_post_json } from "./http_post_json.mjs";
export function http_post_json_cache_clear(url, body) {
  let fn = http_post_json;
  let args = http_post_json_cache_global_args(url, body);
  invoke_cache_clear(fn, args);
}
