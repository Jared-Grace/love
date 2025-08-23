import {folder_current_join_code} from "./folder_current_join_code.mjs";
import {function_name_to_base} from "./function_name_to_base.mjs";
export function function_name_to_path_import(import_) {
  let f_name_ext = function_name_to_base(import_);
  const from = folder_current_join_code(f_name_ext);
  return from;
}
