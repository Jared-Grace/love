export async function cache_generic(
  key_get,
  cached_exists,
  cached_get,
  value_get,
  cache_save,
) {
  let key = await key_get();
  let e = await cached_exists(key);
  let result = null;
  if (e) {
    result = await cached_get(key);
  } else {
    let value = await value_get();
    await cache_save(key, value);
    result = await cached_get(key);
  }
  return result;
}
