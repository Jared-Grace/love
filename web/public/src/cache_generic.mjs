import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function cache_generic(
  key_get,
  cached_exists,
  cached_get,
  value_get,
  cache_save,
) {
  marker("1");
  let key = key_get();
  let e = await cached_exists(key);
  let result = null;
  if (e) {
    result = await cached_get(key);
  } else {
    log("message2");
    let value = await value_get();
    await cache_save(key, value);
    result = await cached_get(key);
  }
  return result;
}
