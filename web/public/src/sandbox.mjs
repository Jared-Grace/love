import { repos_paths_map_unordered_combine_squash_functions } from "../../../karate_code/public/src/repos_paths_map_unordered_combine_squash_functions.mjs";
import { identity } from "./identity.mjs";
export async function sandbox() {
  let f_names =
    await repos_paths_map_unordered_combine_squash_functions(identity);
  return f_names;$L$f_names
}
