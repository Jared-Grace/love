import { list_size_1 } from "./list_size_1.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { true_is } from "./true_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { repos_paths_map_unordered_combine } from "./repos_paths_map_unordered_combine.mjs";
import { object_merge } from "./object_merge.mjs";
import { file_exists } from "./file_exists.mjs";
export async function function_exists_inner(u) {
  let { f_path } = u;
  let exists = await file_exists(f_path);
  let to = {
    exists,
  };
  let e = object_merge(to, u);
  return e;
  async function lambda(joined) {
    let exists = await file_exists(joined);
    return {
      exists,
      f_path,
    };
  }
  let bools = await repos_paths_map_unordered_combine(f_path, lambda);
  let filtered = list_filter(bools, true_is);
  let multiple = list_multiple_is(filtered);
  exists = list_size_1(filtered);
  to = {
    exists,
  };
  e = object_merge(to, u);
  return e;
}
