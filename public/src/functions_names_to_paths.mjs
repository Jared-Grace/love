import { repos_paths_map_unordered_combine_merge_functions } from "../../../love/public/src/repos_paths_map_unordered_combine_merge_functions.mjs";
import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { folder_read_paths_async } from "../../../love/public/src/folder_read_paths_async.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
export async function functions_names_to_paths() {
  async function lambda(repo_path) {
    let paths = await folder_read_paths_async(repo_path);
    let dictionary = list_to_dictionary_key(paths, function_path_to_name);
    return dictionary;
  }
  let r = await repos_paths_map_unordered_combine_merge_functions(lambda);
  return r;
}
