import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_names() {
  marker("1");
  let f_names = await repos_paths_map_unordered_combine_squash(mapper);
  async function mapper(joined) {
    let f_names = await functions_names_from_path(joined);
    return f_names;
  }
  return f_names;
  if (browser_is()) {
  }
}
