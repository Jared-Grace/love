import { invoke_value_get } from "../../../love/public/src/invoke_value_get.mjs";
import { invoke_cache_key_get } from "../../../love/public/src/invoke_cache_key_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { global_function_property_set_exists_not } from "../../../love/public/src/global_function_property_set_exists_not.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_function_property_get } from "../../../love/public/src/global_function_property_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache_global(fn, args) {
  marker("1");
  let key_get = invoke_cache_key_get(fn, args);
  let value_get = invoke_value_get(fn, args);
  let cached_exists = function lambda3(key) {
    let exists = global_function_property_exists(invoke_cache_global, key);
    return exists;
  };
  let cached_get = async function lambda2(key) {
    let value = await global_function_property_get(invoke_cache_global, key);
    return value;
  };
  let cache_save = function lambda4(key, value) {
    let v2 = global_function_property_set_exists_not(
      invoke_cache_global,
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
