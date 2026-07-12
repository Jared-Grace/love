import { text_to_uuid_save_get } from "./text_to_uuid_save_get.mjs";
import { text_to_uuid_save } from "./text_to_uuid_save.mjs";
import { text_to_uuid_save_exists } from "./text_to_uuid_save_exists.mjs";
import { null_get } from "./null_get.mjs";
import { cache_generic } from "./cache_generic.mjs";
import { lambda_get } from "./lambda_get.mjs";
export async function text_to_uuid_cache(text) {
  let key_get = lambda_get(text);
  let value_get = null_get();
  let cached_exists = text_to_uuid_save_exists;
  let cached_get = text_to_uuid_save_get;
  let cache_save = async function lambda(text, n) {
    await text_to_uuid_save(text);
  };
  let r = await cache_generic(
    key_get,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  return r;
}
