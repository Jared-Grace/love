import { text_to_uuid } from "../../../love/public/src/text_to_uuid.mjs";
import { file_path_too_long } from "../../../love/public/src/file_path_too_long.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { file_path_safe_to } from "../../../love/public/src/file_path_safe_to.mjs";
import { invoke_cache_key } from "../../../love/public/src/invoke_cache_key.mjs";
export function invoke_cache_file_key_get(fn, args) {
  let g = async function lambda() {
    let json = invoke_cache_key(fn, args);
    let tl = file_path_too_long(json);
    if (tl) {
      json = await text_to_uuid(text);
    }
    let safe = file_path_safe_to(json);
    let file_name = file_name_json(safe);
    let f_path = folder_user_storage_function_path(fn);
    let joined = path_join([f_path, file_name]);
    return joined;
  };
  return g;
}
