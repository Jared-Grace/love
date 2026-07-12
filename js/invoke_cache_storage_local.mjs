import { invoke_cache_generic } from "./invoke_cache_generic.mjs";
import { storage_local_set_exists_not } from "./storage_local_set_exists_not.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
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
    let v = storage_local_set_exists_not(
      invoke_cache_storage_local,
      key,
      value,
    );
    return v;
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
