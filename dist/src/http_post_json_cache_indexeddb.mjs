import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { invoke_cache_indexeddb } from "../../../love/public/src/invoke_cache_indexeddb.mjs";
export async function http_post_json_cache_indexeddb(url, body, db_get, store) {
  let v = await invoke_cache_indexeddb(
    http_post_json,
    [url, body],
    db_get,
    store,
  );
  return v;
}
