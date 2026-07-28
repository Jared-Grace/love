import { function_path_to_name } from "./function_path_to_name.mjs";
import { function_path_own_is } from "./function_path_own_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
export async function functions_names_from_path(path) {
  ("Only the files that are this repo's own functions are counted, and that is");
  ("asked as an inclusion rather than as a list of things to skip. Anything else");
  ("in the folder used to arrive here as a function name and then be fed back");
  ("through the naming law to build a path, which opened a file nobody wrote.");
  let paths = await folder_read_files(path);
  let own = list_filter(paths, function_path_own_is);
  let f_names = list_map(own, function_path_to_name);
  return f_names;
}
