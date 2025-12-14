import { invoke_cache_clear } from "../../../love/public/src/invoke_cache_clear.mjs";
import { http_post_json_cache_global_args } from "../../../love/public/src/http_post_json_cache_global_args.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function http_post_json_cache_clear(url, body) {
  marker("1");
  let fn = http_post_json;
  let args = http_post_json_cache_global_args(url, body);
  invoke_cache_clear(fn, args);
}
