import { list_map_path_join_left } from "../../../love/public/src/list_map_path_join_left.mjs";
import { folder_read_async } from "../../../love/public/src/folder_read_async.mjs";
export async function folder_read_paths_async(path) {
  let file_names = await folder_read_async(path);
  let combineds = list_map_path_join_left(file_names, path);
  return combineds;
}
