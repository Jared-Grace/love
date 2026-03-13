import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
export async function functions_names() {
  let f_names = await repos_paths_map_unordered_combine_squash(
    functions_names_from_path,
  );
  return f_names;
}
