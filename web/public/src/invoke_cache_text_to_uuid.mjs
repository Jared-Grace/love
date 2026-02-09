import { text_to_uuid_get } from "../../../love/public/src/text_to_uuid_get.mjs";
import { text_to_uuid_exists } from "../../../love/public/src/text_to_uuid_exists.mjs";
import { lambda_get } from "../../../love/public/src/lambda_get.mjs";
import { indexeddb_put } from "../../../love/public/src/indexeddb_put.mjs";
import { invoke_cache_value_get } from "../../../love/public/src/invoke_cache_value_get.mjs";
import { invoke_cache_key_get } from "../../../love/public/src/invoke_cache_key_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache_text_to_uuid(fn, args, db_get, store) {
  let key_get = invoke_cache_key_get(fn, args);
  let value_get = invoke_cache_value_get(fn, args);
  let cached_exists = text_to_uuid_exists;
  let cached_get = async function lambda2(key) {
    let item = await text_to_uuid_get(key);
    return item;
  };
  let cache_save = async function lambda4(key, value) {
    let value_get2 = lambda_get(value);
    await indexeddb_put(db_get, store, key, value_get2);
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
