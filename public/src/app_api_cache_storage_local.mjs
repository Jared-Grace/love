import { app_a_api_generic } from "../../../love/public/src/app_a_api_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { http_post_json_cache_storage_local } from "../../../love/public/src/http_post_json_cache_storage_local.mjs";
export async function app_api_cache_storage_local(f_name, args) {
  marker("1");
  let fn = http_post_json_cache_storage_local;
  let result = await app_a_api_generic(f_name, args, fn);
  return result;
}
