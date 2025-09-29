import { object_property_set } from "./object_property_set.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { true_is } from "./true_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { repos_paths_map_unordered_combine } from "./repos_paths_map_unordered_combine.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_name_to_path_unalias(f_name) {
  let { unaliased } = await function_name_unalias(f_name);
  let f_path = function_name_to_path(unaliased);
  let v = {
    f_path,
    unaliased,
  };
  return v;
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
  let exists = list_size_1(filtered);
  let result = {
    exists,
    multiple,
  };
  if (exists) {
    let only = list_single(filtered);
    let f_path2 = object_property_get(only, "f_path");
    object_property_set(result, "f_path", f_path2);
  }
  return result;
}
