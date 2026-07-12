import { js_code_string } from "./js_code_string.mjs";
import { newline_windows } from "./newline_windows.mjs";
export function newline_windows_code() {
  let n = newline_windows();
  let code_string = js_code_string(n);
  return code_string;
}
