import { js_code_import_single } from "../../../love/public/src/js_code_import_single.mjs";
import { folder_current_join_code } from "../../../love/public/src/folder_current_join_code.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { folder_src } from "../../../love/public/src/folder_src.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
export function function_code_import(name_prefixed) {
  let f_name_ext = function_name_to_base(name_prefixed);
  let src = folder_src();
  let previous = folder_previous();
  const from_paths = [previous, src, f_name_ext];
  let f_path = path_join(from_paths);
  const from = folder_current_join_code(f_path);
  let code = js_code_import_single(name_prefixed, from);
  return code;
}
