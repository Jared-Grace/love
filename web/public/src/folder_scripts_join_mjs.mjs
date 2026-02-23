import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { folder_scripts_join } from "../../../love/public/src/folder_scripts_join.mjs";
export function folder_scripts_join_mjs(path2) {
  let path = folder_scripts_join(path2);
  let f_name_ext = function_name_to_base(path);
  return f_name_ext;
}
