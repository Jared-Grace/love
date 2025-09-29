import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_map } from "./list_map.mjs";
import { functions_names } from "./functions_names.mjs";
export async function functions_paths() {
  let f_names = await functions_names();
  let f_paths = list_map(f_names, function_name_to_path);
  return f_paths;
    let path = functions_path();
  let result = await repos_paths_map_unordered_combine(path, r=>{
    let v = function_name_folder_to_path(f_name, folder);});
  let squashed = list_squash(result);
  return squashed;
}
