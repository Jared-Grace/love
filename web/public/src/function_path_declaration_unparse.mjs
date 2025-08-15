import {function_parse_declaration_js_unparse} from "./function_parse_declaration_js_unparse.mjs";
import {function_path_to_name} from "./function_path_to_name.mjs";
export async function function_path_declaration_unparse(f_path, output) {
  let f_name = function_path_to_name(f_path);
  output = await function_parse_declaration_js_unparse(f_name);
  return output;
}
