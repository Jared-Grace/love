import { js_code_text } from "../../../love/public/src/js_code_text.mjs";
import { newline_windows } from "../../../love/public/src/newline_windows.mjs";
export function newline_windows_code() {
  let n = newline_windows();
  let code_string = js_code_text(n);
  return code_string;
}
