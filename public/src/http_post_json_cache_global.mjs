import { http_post_json_cache_global_args } from "../../../love/public/src/http_post_json_cache_global_args.mjs";
import { invoke_cache_global } from "../../../love/public/src/invoke_cache_global.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
export async function http_post_json_cache_global(url, body) {
  marker("1");
  let args = http_post_json_cache_global_args(url, body);
  let v4 = await invoke_cache_global(http_post_json, args);
  return v4;
}
