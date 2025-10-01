import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
import { function_name_folder_to_path } from "../../../love/public/src/function_name_folder_to_path.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export async function functions_paths() {
  marker("1");
  async function mapper(folder) {
    let f_names = await functions_names_from_path(folder);
    function lambda2(f_name) {
      let v = function_name_folder_to_path(f_name, folder);
      return v;
    }
    let mapped = list_map(f_names, lambda2);
    return mapped;
  }
  let squashed = await repos_paths_map_unordered_combine_squash(mapper);
  return squashed;
}
