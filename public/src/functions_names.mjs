import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { repos_paths_map_unordered_combine_squash_functions } from "../../../karate_code/public/src/repos_paths_map_unordered_combine_squash_functions.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
export async function functions_names() {
  let f_names = await repos_paths_map_unordered_combine_squash_functions(
    functions_names_from_path,
  );
  return f_names;
  (function lambda(repo_path) {});
}
