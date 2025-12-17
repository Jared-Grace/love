import { false_is_assert } from "../../../love/public/src/false_is_assert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function cache_remove_generic(key_get, cached_exists) {
  marker("1");
  let key = key_get();
  let e = await cached_exists(key);
  false_is_assert(e);
  await cache_remove(e);
}
