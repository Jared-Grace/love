import { app_api_cache_indexeddb } from "../../../love/public/src/app_api_cache_indexeddb.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_cache_indexeddb_fn(f_name, args, db_get) {
  marker("1");
  let v = await app_api_cache_indexeddb(f_name, args, db_get);
  return v;
}
