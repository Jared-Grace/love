import { path_join } from "./path_join.mjs";
import { text_to_uuid_save } from "./text_to_uuid_save.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function text_to_uuid_path() {
  let file_name = file_name_json("data");
  let f_path = folder_user_storage_function_path(text_to_uuid_save);
  let joined = path_join([f_path, file_name]);
  return joined;
}
