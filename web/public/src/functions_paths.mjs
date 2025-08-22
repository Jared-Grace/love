import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_map } from "./list_map.mjs";
import { functions_names } from "./functions_names.mjs";
export function functions_paths() {
  let f_names = functions_names();
  let f_paths = list_map(f_names, function_name_to_path);
  return f_paths;
}
