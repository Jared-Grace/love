import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_parse_declaration_js_unparse } from "../../../love/public/src/function_parse_declaration_js_unparse.mjs";
export async function function_current_declaration_code() {
  let f_name_current = await function_current_get();
  let v = await function_parse_declaration_js_unparse(f_name_current);
  return v;
}
