import { global_function_property_initialize_async } from "../../../love/public/src/global_function_property_initialize_async.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache(f_name, args) {
  let key_get = function lambda() {
    let json = json_to([f_name, args]);
    return json;
  };
  let cached_exists = async function lambda2(key) {
    async function lambda4() {}
    let value = await global_function_property_initialize_async(
      fn,
      property_name,
      lambda4,
    );
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
