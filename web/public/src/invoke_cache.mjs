import { function_import } from "../../../love/public/src/function_import.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { storage_local_set_exists_not } from "../../../love/public/src/storage_local_set_exists_not.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
import { storage_local_exists } from "../../../love/public/src/storage_local_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache(f_name, args) {
  marker("1");
  let key_get = function lambda() {
    let json = json_to([f_name, args]);
    return json;
  };
  async function value_get() {
    let result2 = await function_import(f_name, args);
    return result2;
    let f = eval(f_name);
    log(f);
    let v = await f(...args);
    return v;
  }
  let cached_exists = function lambda3(key) {
    let exists = storage_local_exists(invoke_cache, key);
    return exists;
  };
  let cached_get = async function lambda2(key) {
    let value = await storage_local_get(invoke_cache, key);
    return value;
  };
  let cache_save = function lambda4(key, value) {
    let v2 = storage_local_set_exists_not(invoke_cache, key, value);
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
