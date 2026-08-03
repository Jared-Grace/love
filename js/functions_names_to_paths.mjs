import { repos_paths_map_unordered_combine_merge_functions } from "./repos_paths_map_unordered_combine_merge_functions.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_to_dictionary_key } from "./list_to_dictionary_key.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
export async function functions_names_to_paths() {
  "Every function name here paired with the file it lives in, gathered across all the repositories at once.";
  async function lambda(repo_folder) {
    let paths = await folder_read_paths_async(repo_folder);
    let dictionary = list_to_dictionary_key(paths, function_path_to_name);
    return dictionary;
  }
  let r = await repos_paths_map_unordered_combine_merge_functions(lambda);
  return r;
}
