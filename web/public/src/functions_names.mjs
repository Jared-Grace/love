import { list_squash } from "./list_squash.mjs";
import { repos_paths_map_unordered_combine } from "./repos_paths_map_unordered_combine.mjs";
import { functions_names_from_path } from "./functions_names_from_path.mjs";
import { marker } from "./marker.mjs";
import { functions_path } from "./functions_path.mjs";
export async function functions_names() {
  marker("1");
  let path = functions_path();
  let result = await repos_paths_map_unordered_combine(path, mapper);
  let squashed = list_squash(result);
  return squashed;
  function mapper(joined) {
    let f_names = functions_names_from_path(joined);
    return f_names;
  }
}
