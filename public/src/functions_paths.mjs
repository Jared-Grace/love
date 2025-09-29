import { functions_names_from_path } from "./functions_names_from_path.mjs";
import { list_squash } from "./list_squash.mjs";
import { repos_paths_map_unordered_combine } from "./repos_paths_map_unordered_combine.mjs";
import { function_name_folder_to_path } from "./function_name_folder_to_path.mjs";
import { functions_path } from "./functions_path.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_paths() {
  let path = functions_path();
  function lambda(folder) {
    let f_names = functions_names_from_path(folder);
    function lambda2(f_name) {
      let v = function_name_folder_to_path(f_name, folder);
      return v;
    }
    let mapped = list_map(f_names, lambda2);
    return mapped;
  }
  let result = await repos_paths_map_unordered_combine(path, lambda);
  let squashed = list_squash(result);
  return squashed;
}
