import { list_map } from "../../../love/public/src/list_map.mjs";
import { repos_paths_names_map_unordered } from "../../../love/public/src/repos_paths_names_map_unordered.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export async function repos_paths_names_map_unordered_combine(path, mapper) {
  marker("1");
  let result = await repos_paths_names_map_unordered(each_folder);
  async function each_folder(name, r_path) {
    let joined = path_join([r_path, path]);
    let mapped = mapper(joined);
    let v = {
      mapped,
      name,
    };log({v})
    return v;
  }
  return result;
}
