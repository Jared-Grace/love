import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { invoke_cache_value_get } from "../../../love/public/src/invoke_cache_value_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
export async function invoke_cache_file(fn, args) {
  let key_get = invoke_cache_file_key_get(fn, args);
  let value_get = invoke_cache_value_get(fn, args);
  let cached_exists = file_exists;
  let cached_get = async function lambda2(key) {
    let data = await file_read_json(key);
    let result2 = object_property_get(data, "result");
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
