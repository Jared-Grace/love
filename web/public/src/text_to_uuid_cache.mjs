import { text_to_uuid_save_get } from "../../../love/public/src/text_to_uuid_save_get.mjs";
import { text_to_uuid_save } from "../../../love/public/src/text_to_uuid_save.mjs";
import { text_to_uuid_save_exists } from "../../../love/public/src/text_to_uuid_save_exists.mjs";
import { null_get } from "../../../love/public/src/null_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
export async function text_to_uuid_cache(text) {
  let key_get = lambda_get(text);
  let value_get = null_get();
  let cached_exists = text_to_uuid_save_exists;
  let cached_get = text_to_uuid_save_get;
  let cache_save = async function lambda4(text, id) {
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
