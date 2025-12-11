import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
export function js_code_statement(code) {
  let v = code + js_code_semicolon();
  return v;
}
