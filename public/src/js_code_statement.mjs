import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function js_code_statement(code) {
  let v = text_combine(code, js_code_semicolon());
  return v;
}
