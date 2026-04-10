import { repos_paths_map_unordered_combine_merge_functions } from "../../../love/public/src/repos_paths_map_unordered_combine_merge_functions.mjs";
import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { folder_read_paths_async } from "../../../love/public/src/folder_read_paths_async.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "../../../love/public/src/repos_paths_map_unordered_combine_squash_functions.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
import { function_name_folder_to_path } from "../../../love/public/src/function_name_folder_to_path.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export async function functions_names_to_paths() {
  async function mapper(folder) {
    let f_names = await functions_names_from_path(folder);
    function lambda(f_name) {
      let joined = function_name_folder_to_path(f_name, folder);
      return joined;
    }
    let dictionary = list_to_dictionary_value(f_names, lambda);
    return dictionary;
  }
  let squashed =
    await repos_paths_map_unordered_combine_squash_functions(mapper);
  let dictionary = list_reduce(squashed, object_merge, {});
  return dictionary;
  async function lambda(repo_path) {
    let paths = await folder_read_paths_async(repo_path);
    let dictionary = list_to_dictionary_key(paths, function_path_to_name);
    return dictionary;
  }
  let r = await repos_paths_map_unordered_combine_merge_functions(lambda);
}
