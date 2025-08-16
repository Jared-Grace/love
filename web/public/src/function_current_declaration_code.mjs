import { data_function_current_get } from "./data_function_current_get.mjs";
import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
export async function function_current_declaration_code(f_name) {
  let f_name_current = await data_function_current_get();
  let v = await function_parse_declaration_js_unparse(f_name);
  return v;
}
