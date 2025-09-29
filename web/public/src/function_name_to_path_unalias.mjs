import { function_name_to_path } from "./function_name_to_path.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_name_to_path_unalias(f_name) {
  let { unaliased } = await function_name_unalias(f_name);
  let f_path = function_name_to_path(unaliased);


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

  let v = {
    f_path,
    unaliased,
  };
  return v;
}
