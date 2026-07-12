import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { each_async } from "./each_async.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
export async function folder_user_storage_function_each(fn, file_each) {
  let path = folder_user_storage_function_path(fn);
  let combineds = await folder_read_paths_async(path);
  await each_async(combineds, file_each);
}
