import { repos_paths_names_map_unordered_combine } from "../../../love/public/src/repos_paths_names_map_unordered_combine.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { true_is } from "../../../love/public/src/true_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { repos_paths_map_unordered_combine } from "../../../love/public/src/repos_paths_map_unordered_combine.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { log } from "./log.mjs";
export async function function_name_to_path_search(unaliased) {
  let f_path = function_name_to_path(unaliased);
  async function lambda(joined) {
    let exists = await file_exists(joined);
    let v = {
      exists,
      f_path: joined,
    };log({v})
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
  let result2 = await repos_paths_names_map_unordered_combine(path, mapper); 
}
