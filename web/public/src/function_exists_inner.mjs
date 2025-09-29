import { list_last } from "./list_last.mjs";
import { repos_paths_map_unordered_combine } from "./repos_paths_map_unordered_combine.mjs";
import { object_merge } from "./object_merge.mjs";
import { file_exists } from "./file_exists.mjs";
export async function function_exists_inner(u) {
  let { f_path } = u;
  const exists = await file_exists(f_path);
  let to = {
    exists,
  };
  let e = object_merge(to, u);
  return e;
  let result = await repos_paths_map_unordered_combine(f_path, file_exists);
  let last = list_last(list);
}
