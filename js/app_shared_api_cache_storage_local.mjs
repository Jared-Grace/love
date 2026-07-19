import { app_api_generic } from "./app_api_generic.mjs";
import { http_post_json_cache_storage_local } from "./http_post_json_cache_storage_local.mjs";
export async function app_shared_api_cache_storage_local(f_name, args) {
  let fn = http_post_json_cache_storage_local;
  let result = await app_api_generic(f_name, args, fn);
  return result;
}
