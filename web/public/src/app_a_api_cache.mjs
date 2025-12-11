import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { http_post_json_cache_storage_local } from "../../../love/public/src/http_post_json_cache_storage_local.mjs";
export async function app_a_api_cache(f_name, args) {
  let fn = http_post_json;
  let result = await http_post_json_cache_storage_local(f_name, args, fn);
  return result;
}
