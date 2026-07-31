import { memory_folder } from "./memory_folder.mjs";
import { memory_index_name } from "./memory_index_name.mjs";
import { path_join } from "./path_join.mjs";
export function memory_index_path() {
  "where the memory index sits on disk, which is the memory folder and the index name joined";
  let folder = memory_folder();
  let name = memory_index_name();
  let path = path_join([folder, name]);
  return path;
}
