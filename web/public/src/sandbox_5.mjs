import { folder_read_recursive_paths_async } from "../../../love/public/src/folder_read_recursive_paths_async.mjs";
import { folder_user_storage_function_path_function } from "./folder_user_storage_function_path_function.mjs";
export async function sandbox_5() {
  let f = folder_user_storage_function_path_function();
  let files = await folder_read_recursive_paths_async(f);
  return files;
}
