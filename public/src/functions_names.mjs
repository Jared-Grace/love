import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { functions_names_from_path } from "../../../love/public/src/functions_names_from_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { log } from "./log.mjs";
export async function functions_names() {
  marker("1");
  let squashed = await repos_paths_map_unordered_combine_squash(mapper);
  return squashed;
  async function mapper(joined) {log({joined})
    let f_names = await functions_names_from_path(joined);log({f_names})
    return f_names;
  }
}
