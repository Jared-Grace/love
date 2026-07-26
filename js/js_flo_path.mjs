import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
export function js_flo_path(ast) {
  let f_name = js_flo_name(ast);
  let f_path = function_name_to_path_relative(f_name);
  return f_path;
}
