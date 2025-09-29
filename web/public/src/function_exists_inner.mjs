import { list_single } from "./list_single.mjs";
import { true_is } from "./true_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
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
    let v = {
      exists,
      f_path: joined,
    };
    return v;
  }
  let mapped = await repos_paths_map_unordered_combine(f_path, lambda);
  function lambda2(m) {
    let exists2 = object_property_get(m, "exists");
    let ti2 = true_is(exists2);
    return ti2;
  }
  let filtered = list_filter(mapped, lambda2);
  let multiple = list_multiple_is(filtered);
  exists = list_size_1(filtered);
  let only = list_single(list);
  to = {
    exists,
  };
  e = object_merge(to, u);
  return e;
}
