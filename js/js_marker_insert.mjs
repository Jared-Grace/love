import { fn_name } from "./fn_name.mjs";
import { js_call_statement_insert } from "./js_call_statement_insert.mjs";
import { js_code_string } from "./js_code_string.mjs";
export async function js_marker_insert(name, list, index) {
  let code_string = await js_code_string(name);
  let f_name = fn_name("marker");
  let args_code = [code_string];
  js_call_statement_insert(f_name, args_code, list, index);
}
