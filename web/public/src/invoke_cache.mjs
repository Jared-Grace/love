import { json_to } from "../../../love/public/src/json_to.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache(f_name, args) {
  let key_get = function lambda() {
    let json = json_to([f_name, args]);
    return json;
  };
  async function value_get() {
    let f = eval(f_name);
    let v = await f(...args);
    return v;
  }
  let cached_get = async function lambda2(key) {
    let value = await global_function_property(invoke_cache, key, lambda4);
    return value;
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
