import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { js_declaration_single_name } from "../../../love/public/src/js_declaration_single_name.mjs";
export function js_declaration_single_path(ast) {
  let name2 = js_declaration_single_name(ast);
  let f_path = function_name_to_path(f_name);
  return f_path;
}
