import { null_get } from "../../../love/public/src/null_get.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { text_to_uuid_set } from "../../../love/public/src/text_to_uuid_set.mjs";
import { text_to_uuid_set_exists } from "../../../love/public/src/text_to_uuid_set_exists.mjs";
import { text_to_uuid_get } from "../../../love/public/src/text_to_uuid_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache_text_to_uuid(text) {
  let key_get = value_get(text);
  let value_get = null_get(value_get);
  let cached_exists = text_to_uuid_set_exists;
  let cached_get = async function lambda2(key) {
    let item = await text_to_uuid_get(key);
    return item;
  };
  let cache_save = async function lambda4(key, value) {
    let o = {
      key,
      value,
    };
    let json = json_to(o);
    await text_to_uuid_set(json);
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
