import { js_code_bracket_close } from "../../../love/public/src/js_code_bracket_close.mjs";
import { js_code_brace_left } from "../../../love/public/src/js_code_brace_left.mjs";
export function json_ends() {
  let b = js_code_bracket_close();
  let v2 = js_code_brace_left();
  let list = [v2, b];
  return list;
}
