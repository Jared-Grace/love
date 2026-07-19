import { http_post_json_cache_indexeddb } from "./http_post_json_cache_indexeddb.mjs";
import { app_api_generic } from "./app_api_generic.mjs";
export async function app_shared_api_cache_indexeddb(
  f_name,
  args,
  db_get,
  store,
) {
  let fn = async function lambda(url, body) {
    let v = await http_post_json_cache_indexeddb(url, body, db_get, store);
    return v;
  };
  let result = await app_api_generic(f_name, args, fn);
  return result;
}
