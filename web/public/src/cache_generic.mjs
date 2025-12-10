import { marker } from "../../../love/public/src/marker.mjs";
export async function cache_generic(
  key_get,
  url,
  cached_exists,
  cached_get,
  value_get,
  cache_save,
) {
  marker("1");
  let key = key_get(url);
  let e = await cached_exists(key);
  let result = null;
  if (e) {
    result = await cached_get(key);
  } else {
    let value = await value_get(url);
    await cache_save(key, value);
    result = await cached_get(key);
  }
  return result;
}
