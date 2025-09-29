import { list_squash } from "./list_squash.mjs";
import { path_join } from "./path_join.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
import { functions_names_from_path } from "./functions_names_from_path.mjs";
import { marker } from "./marker.mjs";
import { functions_path } from "./functions_path.mjs";
export async function functions_names() {
  marker("1");
  let path = functions_path();
  let result = await repos_paths_map_unordered(each_folder);
  async function each_folder(folder) {
    let joined = path_join([folder, path]);
    let f_names = functions_names_from_path(joined);
    return f_names;
  }
  let squashed = list_squash(result);
  return squashed;
}
