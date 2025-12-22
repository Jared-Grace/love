import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_path_join_left } from "../../../love/public/src/list_map_path_join_left.mjs";
export function folder_read_recursive_paths_to(result, path_folder) {
  let combineds = list_map_path_join_left(result, path_folder);
  let mapped = list_map(combineds, path_normalize);
  return mapped;
}
