import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
import { marker } from "./marker.mjs";
import { functions_names_from_path } from "./functions_names_from_path.mjs";
import { function_name_folder_to_path } from "./function_name_folder_to_path.mjs";
export async function functions_names_to_paths() {
  marker("1");
  function lambda(item) {}
  function mapper(folder) {
    let f_names = functions_names_from_path(folder);
    let dictionary = list_to_dictionary(f_names, function_name_folder_to_path);
    return mapped;
  }
  let squashed = await repos_paths_map_unordered_combine_squash(mapper);
  return squashed;
}
