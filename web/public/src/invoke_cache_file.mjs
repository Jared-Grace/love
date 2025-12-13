import { file_path_safe_to } from "../../../love/public/src/file_path_safe_to.mjs";
import { invoke_cache_key } from "../../../love/public/src/invoke_cache_key.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { invoke_cache_value_get } from "../../../love/public/src/invoke_cache_value_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function invoke_cache_file(fn, args) {
  marker("1");
  let key_get = function lambda() {
    let json = invoke_cache_key(fn, args);
    let safe = file_path_safe_to(json);
    let file_name = file_name_json(safe);
    let f_path = folder_user_storage_function_path(fn);
    let joined = path_join([f_path, file_name]);
    return joined;
  };
  let value_get = invoke_cache_value_get(fn, args);
  let cached_exists = async function lambda3(key) {
    let exists = await file_exists(key);
    return exists;
  };
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
