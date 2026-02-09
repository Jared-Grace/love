import { invoke_cache_value_get } from "../../../love/public/src/invoke_cache_value_get.mjs";
import { invoke_cache_key_get } from "../../../love/public/src/invoke_cache_key_get.mjs";
import { storage_local_set_exists_not } from "../../../love/public/src/storage_local_set_exists_not.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_exists } from "../../../love/public/src/storage_local_exists.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache_storage_local(fn, args) {
  let cached_exists = function lambda3(key) {
    let exists = storage_local_exists(invoke_cache_storage_local, key);
    return exists;
  };
  let cached_get = async function lambda2(key) {
    let value = await storage_local_get(invoke_cache_storage_local, key);
    return value;
  };
  let cache_save = function lambda4(key, value) {
    let v2 = storage_local_set_exists_not(
      invoke_cache_storage_local,
      key,
      value,
    );
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
