import { app_api_cache_indexeddb } from "../../../love/public/src/app_api_cache_indexeddb.mjs";
export async function app_api_cache_indexeddb_fn(fn, args, db_get, store) {
  let v = await app_api_cache_indexeddb(fn.name, args, db_get, store);
  return v;
}
