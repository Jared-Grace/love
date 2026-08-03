import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
import { functions_names_from_path } from "./functions_names_from_path.mjs";
export async function functions_names() {
  "The name of every function in every repository here, gathered into one list.";
  let f_names = await repos_paths_map_unordered_combine_squash_functions(
    functions_names_from_path,
  );
  return f_names;
}
