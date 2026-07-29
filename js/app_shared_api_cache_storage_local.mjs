import { app_shared_api_generic } from "./app_shared_api_generic.mjs";
import { http_post_json_cache_storage_local } from "./http_post_json_cache_storage_local.mjs";
export async function app_shared_api_cache_storage_local(f_name, args) {
  let fn_http = http_post_json_cache_storage_local;
  let a = {
    f_name,
    args,
    fn_http,
  };
  let result = await app_shared_api_generic(a);
  return result;
}
