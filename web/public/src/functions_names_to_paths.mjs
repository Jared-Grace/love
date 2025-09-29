import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
import { marker } from "./marker.mjs";
import { functions_names_from_path } from "./functions_names_from_path.mjs";
import { function_name_folder_to_path } from "./function_name_folder_to_path.mjs";
export async function functions_names_to_paths() {
  marker("1");
  function mapper(folder) {
    let f_names = functions_names_from_path(folder);
    function lambda(f_name) {
      let joined = function_name_folder_to_path(f_name, folder);
      return joined;
    }
    let dictionary = list_to_dictionary(f_names, lambda);
    return dictionary;
  }
  let squashed = await repos_paths_map_unordered_combine_squash(mapper);
  return squashed;
}
