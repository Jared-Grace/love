import { reduce } from "../../../love/public/src/reduce.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
import { function_name_folder_to_path } from "../../../love/public/src/function_name_folder_to_path.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function functions_names_to_paths() {
  marker("1");
  async function mapper(folder) {
    let f_names = await functions_names_from_path(folder);
    function lambda(f_name) {
      let joined = function_name_folder_to_path(f_name, folder);
      return joined;
    }
    let dictionary = list_to_dictionary_value(f_names, lambda);
    return dictionary;
  }
  let squashed = await repos_paths_map_unordered_combine_squash(mapper);
  let dictionary = reduce({}, squashed, object_merge);
  return dictionary;
}
