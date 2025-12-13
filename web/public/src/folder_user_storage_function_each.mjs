import { folder_user_storage_path } from "../../../love/public/src/folder_user_storage_path.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_read_paths_async } from "../../../love/public/src/folder_read_paths_async.mjs";
export async function folder_user_storage_function_each(fn, file_each) {
  let path = folder_user_storage_path("function\\" + fn.name);
  let combineds = await folder_read_paths_async(path);
  await each_async(combineds, file_each);
}
