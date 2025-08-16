import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
export async function function_current_declaration_code(f_name) {
  return await function_parse_declaration_js_unparse(f_name);
}
