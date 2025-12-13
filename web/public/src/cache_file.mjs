import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function cache_file(
  key_get,
  cached_exists,
  cached_get,
  value_get,
  cache_save,
) {
  marker("1");
  let v = await cache_generic(
    key_get,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  return v;
}
