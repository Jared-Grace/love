import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function cache_remove_generic(
  key_get,
  cached_exists,
  cache_remove,
) {
  let key = await key_get();
  let e = await cached_exists(key);
  true_is_assert_json(e, {
    hint: "the cache entry should exist before it can be removed — was it already gone?",
    key,
  });
  await cache_remove(key);
}
