import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { indexeddb_read } from "../../../love/public/src/indexeddb_read.mjs";
import { invoke_cache_value_get } from "../../../love/public/src/invoke_cache_value_get.mjs";
import { invoke_cache_key_get } from "../../../love/public/src/invoke_cache_key_get.mjs";
import { storage_local_set_exists_not } from "../../../love/public/src/storage_local_set_exists_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache_indexeddb(fn, args, db_get, store) {
  marker("1");
  let key_get = invoke_cache_key_get(fn, args);
  let value_get = invoke_cache_value_get(fn, args);
  let cached_exists = async function lambda3(key) {
    let item = await indexeddb_read(db_get, store, key);
    let exists = null_not_is(item);
    return exists;
  };
  let cached_get = async function lambda2(key) {
    let item = await indexeddb_read(db_get, store, key);
    return item;
  };
  let cache_save = function lambda4(key, value) {
    let v2 = storage_local_set_exists_not(invoke_cache_indexeddb, key, value);
    return v2;
  };
  let result = await cache_generic(
    key_get,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  return result;
}
