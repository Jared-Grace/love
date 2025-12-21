import { http_post_json_cache_indexeddb } from "../../../love/public/src/http_post_json_cache_indexeddb.mjs";
import { app_api_generic } from "../../../love/public/src/app_api_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_cache_indexeddb(f_name, args) {
  marker("1");
  let fn = async function lambda(url, body) {
    let v = await http_post_json_cache_indexeddb(url, body, db_get, store);
    return v;
  };
  let result = await app_api_generic(f_name, args, fn);
  return result;
}
