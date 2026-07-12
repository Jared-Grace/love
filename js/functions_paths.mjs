import { arguments_assert } from "./arguments_assert.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
import { functions_names_from_path } from "./functions_names_from_path.mjs";
import { function_name_folder_to_path } from "./function_name_folder_to_path.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_paths() {
  arguments_assert(arguments, 0);
  async function mapper(folder) {
    let f_names = await functions_names_from_path(folder);
    function lambda(f_name) {
      let v = function_name_folder_to_path(f_name, folder);
      return v;
    }
    let mapped = list_map(f_names, lambda);
    return mapped;
  }
  let squashed =
    await repos_paths_map_unordered_combine_squash_functions(mapper);
  return squashed;
}
