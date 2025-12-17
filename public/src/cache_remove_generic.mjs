import { log } from "../../../love/public/src/log.mjs";
import { true_is_assert } from "../../../love/public/src/true_is_assert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function cache_remove_generic(
  key_get,
  cached_exists,
  cache_remove,
) {
  marker("1");
  let key = key_get();
  log({
    key,
  });
  let e = await cached_exists(key);
  true_is_assert(e);
  await cache_remove(e);
}
