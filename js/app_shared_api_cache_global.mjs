import { app_api_generic } from "./app_api_generic.mjs";
import { http_post_json_cache_global } from "./http_post_json_cache_global.mjs";
export async function app_shared_api_cache_global(f_name, args) {
  let fn = http_post_json_cache_global;
  let result = await app_api_generic(f_name, args, fn);
  return result;
}
