import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { global_function_property_set_exists_not } from "../../../love/public/src/global_function_property_set_exists_not.mjs";
import { invoke_cache_global } from "../../../love/public/src/invoke_cache_global.mjs";
import { invoke_cache_value_get } from "../../../love/public/src/invoke_cache_value_get.mjs";
import { cache_generic } from "../../../love/public/src/cache_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function invoke_cache_file(fn, args) {
  marker("1");
  let key_get = function lambda() {
    let json = json_to([fn.name, args]);
    let f_path = folder_user_storage_function_path(fn);
    let file_name = file_name_json(key);
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
    return data;
  };
  let cache_save = async function lambda4(key, value) {
    await file_overwrite_json(file_path, object);
    let v2 = global_function_property_set_exists_not(
      invoke_cache_global,
      key,
      value,
    );
    return v2;
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
