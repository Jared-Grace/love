import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_bracket_open } from "./js_code_bracket_open.mjs";
export function json_starts() {
  let b = js_code_bracket_open();
  let v = js_code_brace_left();
  let list = [v, b];
  return list;
}
