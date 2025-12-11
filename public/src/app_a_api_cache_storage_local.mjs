import { marker } from "../../../love/public/src/marker.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { http_post_json_cache_storage_local } from "../../../love/public/src/http_post_json_cache_storage_local.mjs";
export async function app_a_api_cache_storage_local(f_name, args) {
  marker("1");
  let fn = http_post_json;
  let result = await http_post_json_cache_storage_local(f_name, args);
  return result;
}
