import { property_from } from "../../../love/public/src/property_from.mjs";
import { repos_paths_names_map_unordered_combine } from "../../../love/public/src/repos_paths_names_map_unordered_combine.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { true_is } from "../../../love/public/src/true_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
export async function function_name_to_path_search(f_name) {
  let f_path = function_name_to_path(f_name);
  async function lambda(joined) {
    let exists = await file_exists(joined);
    let v = {
      exists,
      f_path: joined,
    };
    return v;
  }
  let mapped = await repos_paths_names_map_unordered_combine(f_path, lambda);
  function lambda2(m) {
    let mapped = object_property_get(m, "mapped");
    let exists2 = object_property_get(mapped, "exists");
    let ti2 = true_is(exists2);
    return ti2;
  }
  let filtered = list_filter(mapped, lambda2);
  let multiple = list_multiple_is(filtered);
  let exists = list_size_1(filtered);
  let search = {
    f_name,
    exists,
    multiple,
  };
  if (exists) {
    let only = list_single(filtered);
    let mapped = object_property_get(only, "mapped");
    property_from(search, "f_path", mapped);
    property_from(search, "repo_name", only);
  }
  return search;
}
