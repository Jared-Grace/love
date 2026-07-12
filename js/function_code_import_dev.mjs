import { js_code_import_single } from "./js_code_import_single.mjs";
import { folder_current_join_code } from "./folder_current_join_code.mjs";
import { path_join } from "./path_join.mjs";
import { folder_previous } from "./folder_previous.mjs";
import { folder_src } from "./folder_src.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
export function function_code_import_dev(name_prefixed) {
  let f_name_ext = function_name_to_base(name_prefixed);
  let src = folder_src();
  let previous = folder_previous();
  let from_paths = [previous, src, f_name_ext];
  let f_path = path_join(from_paths);
  let from = folder_current_join_code(f_path);
  let code = js_code_import_single(name_prefixed, from);
  return code;
}
