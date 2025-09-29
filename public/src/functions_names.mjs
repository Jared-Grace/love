import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_names() {
  marker("1");
  let squashed = await repos_paths_map_unordered_combine_squash(mapper);
  return squashed;
  function mapper(joined) {
    let f_names = functions_names_from_path(joined);
    return f_names;
  }
}
