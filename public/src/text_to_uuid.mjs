import { text_to_uuid_set_get } from "../../../love/public/src/text_to_uuid_set_get.mjs";
import { text_to_uuid_set } from "../../../love/public/src/text_to_uuid_set.mjs";
import { text_to_uuid_set_exists } from "../../../love/public/src/text_to_uuid_set_exists.mjs";
import { null_get } from "../../../love/public/src/null_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
export async function text_to_uuid(text) {
  let key_get = lambda_get(text);
  let value_get = null_get();
  let cached_exists = text_to_uuid_set_exists;
  let cached_get = text_to_uuid_set_get;
  let cache_save = async function lambda4(key, value) {
    await text_to_uuid_set(key);
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
