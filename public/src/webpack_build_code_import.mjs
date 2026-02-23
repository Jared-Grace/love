import { js_code_import_single } from "../../../love/public/src/js_code_import_single.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { folder_previous_2_join } from "../../../love/public/src/folder_previous_2_join.mjs";
export function webpack_build_code_import(main_path, f_name) {
  let joined = folder_previous_2_join(main_path);
  let code_string = js_code_string(joined);
  let i = js_code_import_single(f_name, code_string);
  return i;
}
