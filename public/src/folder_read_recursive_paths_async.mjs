import { list_map_path_join_left } from "../../../love/public/src/list_map_path_join_left.mjs";
import { folder_read_recursive_async } from "../../../love/public/src/folder_read_recursive_async.mjs";
export async function folder_read_recursive_paths_async(path_folder) {
  let result = await folder_read_recursive_async(path_folder);
  let combineds = list_map_path_join_left(result, path);
  return combineds;
}
