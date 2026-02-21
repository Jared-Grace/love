import { folder_read_recursive_paths_to } from "../../../love/public/src/folder_read_recursive_paths_to.mjs";
import { folder_read_recursive_async } from "../../../love/public/src/folder_read_recursive_async.mjs";
export async function folder_read_recursive_paths_async(path_folder) {
  let result = await folder_read_recursive_async(path_folder);
  let mapped = folder_read_recursive_paths_to(result, path_folder);
  return mapped;
}
