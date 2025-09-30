import { marker } from "../../../love/public/src/marker.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { repos_paths_map_unordered } from "../../../love/public/src/repos_paths_map_unordered.mjs";
export async function repos_paths_map_unordered_combine_folders(path, mapper) {
  marker("1");
  let result = await repos_paths_map_unordered(each_folder);
  async function each_folder(folder) {
    let joined = path_join([folder, path]);
    let f_names = mapper(joined);
    return f_names;
  }
  return result;
}
