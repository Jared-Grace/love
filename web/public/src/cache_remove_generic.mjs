import { true_is_assert } from "../../../love/public/src/true_is_assert.mjs";
export async function cache_remove_generic(
  key_get,
  cached_exists,
  cache_remove,
) {
  let key = await key_get();
  let e = await cached_exists(key);
  true_is_assert(e);
  await cache_remove(key);
}
