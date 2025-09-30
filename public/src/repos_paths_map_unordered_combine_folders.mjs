import { list_map } from "../../../love/public/src/list_map.mjs";
import { repos_paths_names_map_unordered } from "../../../love/public/src/repos_paths_names_map_unordered.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export async function repos_paths_map_unordered_combine_folders(path, mapper) {
  marker("1");
  mapper = identity;
  let result = await repos_paths_names_map_unordered(each_folder);
  async function each_folder(name, path) {
    let joined = path_join([path, path]);
    let f_names = mapper(joined);
    let mapped = list_map(list, function lambda(item) {});
    return f_names;
  }
  return result;
}
