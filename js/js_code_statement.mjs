import { js_code_semicolon } from "./js_code_semicolon.mjs";
import { text_combine } from "./text_combine.mjs";
export function js_code_statement(code) {
  let v = text_combine(code, js_code_semicolon());
  return v;
}
