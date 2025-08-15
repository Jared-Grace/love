import { object_merge } from "./object_merge.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_exists(f_name) {
  let u = await function_name_to_path_unalias(f_name);
  let { f_path } = u;
  const exists = await file_exists(f_path);
  let v = {
    exists,
  };
  let to2 = object_merge(to, from);
  return v;
}
