import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { js_function_declaration_name } from "../../../love/public/src/js_function_declaration_name.mjs";
export function js_declaration_name_to_path(fd) {
  let f_name = js_function_declaration_name(fd);
  let f_path = function_name_to_path(f_name);
  return f_path;
}
