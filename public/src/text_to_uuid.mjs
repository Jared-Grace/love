import { object_property_exists_not_assert } from "../../../love/public/src/object_property_exists_not_assert.mjs";
import { file_json_transform_initialize } from "../../../love/public/src/file_json_transform_initialize.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
export async function text_to_uuid(text) {
  let file_name = file_name_json("data");
  let f_path = folder_user_storage_function_path(text_to_uuid);
  let joined = path_join([f_path, file_name]);
  await file_json_transform_initialize(joined, {}, lambda);
  async function lambda(data) {
    object_property_exists_not_assert(object, property_name);
  }
}
