import { invoke_cache_value_get } from "../../../love/public/src/invoke_cache_value_get.mjs";
import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
import { text_to_uuid_set } from "../../../love/public/src/text_to_uuid_set.mjs";
import { text_to_uuid_set_exists } from "../../../love/public/src/text_to_uuid_set_exists.mjs";
import { text_to_uuid_get } from "../../../love/public/src/text_to_uuid_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache_text_to_uuid(fn, args) {
  let key_get = invoke_cache_file_key_get(fn, args);
  let value_get = invoke_cache_value_get(fn, args);
  let cached_exists = text_to_uuid_set_exists;
  let cached_get = text_to_uuid_get;
  let cache_save = async function lambda4(key, text) {
    await text_to_uuid_set(text);
  };
  let result = await cache_generic(
    key_get,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  return result;
}
