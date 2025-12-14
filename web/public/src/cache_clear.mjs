import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { invoke_cache_key_get } from "../../../love/public/src/invoke_cache_key_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function cache_clear() {
  marker("1");
  let fn = http_post_json;
  let key_get = invoke_cache_key_get(fn, args);
}
