import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { invoke_cache_value_get } from "../../../love/public/src/invoke_cache_value_get.mjs";
import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
export async function invoke_cache_generic(
  fn,
  args,
  cached_exists,
  cached_get,
  cache_save,
) {
  let key_get = invoke_cache_file_key_get(fn, args);
  let value_get = invoke_cache_value_get(fn, args);
  let v = await cache_generic(
    key_get,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  return v;
}
