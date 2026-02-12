import { js_code_brace_right } from "../../../love/public/src/js_code_brace_right.mjs";
import { js_code_bracket_close } from "../../../love/public/src/js_code_bracket_close.mjs";
export function json_ends() {
  let b = js_code_bracket_close();
  let v2 = js_code_brace_right();
  let list = [v2, b];
  return list;
}
