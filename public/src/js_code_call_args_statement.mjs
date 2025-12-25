import { marker } from "../../../love/public/src/marker.mjs";
import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
import { js_code_statement } from "../../../love/public/src/js_code_statement.mjs";
export function js_code_call_args_statement(f_name) {
  marker("1");
  let code = js_code_call(f_name);
  let result = js_code_statement(code);
  return result;
}
