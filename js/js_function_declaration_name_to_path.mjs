import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
export function js_function_declaration_name_to_path(fd) {
  let f_name = js_function_declaration_name(fd);
  let f_path = function_name_to_path_relative(f_name);
  return f_path;
}
