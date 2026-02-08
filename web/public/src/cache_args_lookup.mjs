import { not } from "../../../love/public/src/not.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
export async function cache_args_lookup() {
  let file_name = file_name_json("data");
  let f_path = folder_user_storage_function_path(cache_args_lookup);
  let joined = path_join([f_path, file_name]);
  let exists = await file_exists(joined);
  if (not(exists)) {
  }
  async function lambda(data) {}
  await file_json_transform(joined, lambda);
}
