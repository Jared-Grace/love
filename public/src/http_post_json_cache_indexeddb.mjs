import { invoke_cache_indexeddb } from "../../../love/public/src/invoke_cache_indexeddb.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function http_post_json_cache_indexeddb(fn, args, db_get, store) {
  marker("1");
  let v = await invoke_cache_indexeddb(fn, args, db_get, store);
  return v;
}
