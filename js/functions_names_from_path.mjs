import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
export async function functions_names_from_path(path) {
  let paths = await folder_read_files(path);
  let f_names = list_map(paths, function_path_to_name);
  return f_names;
}
