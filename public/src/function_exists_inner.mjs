import { property_set } from "../../../love/public/src/property_set.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { true_is } from "../../../love/public/src/true_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { repos_paths_map_unordered_combine } from "../../../love/public/src/repos_paths_map_unordered_combine.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
export async function function_exists_inner(u) {
  let { f_path } = u;
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
    let exists2 = property_get(m, "exists");
    let ti2 = true_is(exists2);
    return ti2;
  }
  let filtered = list_filter(mapped, lambda2);
  let multiple = list_multiple_is(filtered);
  let exists = list_size_1(filtered);
  let result = object_merge(
    {
      exists,
      multiple,
    },
    u,
  );
  if (exists) {
    let only = list_single(filtered);
    let f_path2 = property_get(only, "f_path");
    property_set(result, "f_path", f_path2);
  }
  return result;
}
