import { function_path_to_name } from "../../../love/public/src/function_path_to_name.mjs";
import { list_to_dictionary_key } from "../../../love/public/src/list_to_dictionary_key.mjs";
import { folder_read_async } from "../../../love/public/src/folder_read_async.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "../../../karate_code/public/src/repos_paths_map_unordered_combine_squash_functions.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
export async function functions_names() {
  let f_names = await repos_paths_map_unordered_combine_squash_functions(
    functions_names_from_path,
  );
  return f_names;
  (async function lambda(repo_path) {
    let paths = await folder_read_async(repo_path);
    let dictionary = list_to_dictionary_key(paths, function_path_to_name);
    return dictionary;
  });
}
