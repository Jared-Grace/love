import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { folder_current_join } from "../../../love/public/src/folder_current_join.mjs";
export function folder_current_join_code(f_name_ext) {
  let value_string = folder_current_join(f_name_ext);
  const from = js_code_string(value_string);
  return from;
}
