import { path_join } from "../../../love/public/src/path_join.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
export function function_name_folder_to_path(f_name, folder) {
  let base = function_name_to_base(f_name);
  let second = [folder, base];
  let joined = path_join(second);
  return joined;
}
