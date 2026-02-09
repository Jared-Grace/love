import { invoke_cache_generic } from "../../../love/public/src/invoke_cache_generic.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { indexeddb_put } from "../../../love/public/src/indexeddb_put.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { indexeddb_get } from "../../../love/public/src/indexeddb_get.mjs";
export async function invoke_cache_indexeddb(fn, args, db_get, store) {
  let cached_exists = async function lambda3(key) {
    let item = await indexeddb_get(db_get, store, key);
    let exists = null_not_is(item);
    return exists;
  };
  let cached_get = async function lambda2(key) {
    let item = await indexeddb_get(db_get, store, key);
    return item;
  };
  let cache_save = async function lambda4(key, value) {
    let value_get2 = lambda_get(value);
    await indexeddb_put(db_get, store, key, value_get2);
  };
  let r = await invoke_cache_generic(
    fn,
    args,
    cached_exists,
    cached_get,
    cache_save,
  );
  return r;
}
