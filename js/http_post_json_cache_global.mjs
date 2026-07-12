import { http_post_json_cache_global_args } from "./http_post_json_cache_global_args.mjs";
import { invoke_cache_global } from "./invoke_cache_global.mjs";
import { http_post_json } from "./http_post_json.mjs";
export async function http_post_json_cache_global(url, body) {
  let args = http_post_json_cache_global_args(url, body);
  let v = await invoke_cache_global(http_post_json, args);
  return v;
}
