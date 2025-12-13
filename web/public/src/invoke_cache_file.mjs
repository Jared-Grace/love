import { invoke_cache_key_get } from "../../../love/public/src/invoke_cache_key_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function invoke_cache_file(fn, args) {
  marker("1");
  let key_get = invoke_cache_key_get(fn, args);
  let v = await cache_generic(
    key_get,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  return v;
}
