import { text_to_uuid_get } from "../../../love/public/src/text_to_uuid_get.mjs";
import { text_to_uuid_set_exists } from "../../../love/public/src/text_to_uuid_set_exists.mjs";
import { null_get } from "../../../love/public/src/null_get.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { lambda_get } from "./lambda_get.mjs";
export async function invoke_cache_text_to_uuid(text) {
  let key_get = lambda_get(text);
  let value_get = null_get();
  let cached_exists = text_to_uuid_set_exists;
  let cached_get = async function lambda2(key) {
    let result2 = await text_to_uuid_get(key);
    return result2;
  };
  let cache_save = async function lambda4(key, result) {
    await file_overwrite_json(key, {
      result,
    });
  };
  let v = await cache_generic(
    key_get,
    cached_exists,
    cached_get,
    value_get,
    cache_save,
  );
  return v;
}
