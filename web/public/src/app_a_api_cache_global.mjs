import { http_post_json_cache_global } from "../../../love/public/src/http_post_json_cache_global.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
export async function app_a_api_cache_global(f_name, args) {
  marker("1");
  let fn = http_post_json;
  let result = await http_post_json_cache_global(f_name, args, fn);
  return result;
}
