import { js_code_braces_empty } from "./js_code_braces_empty.mjs";
import { js_code_parenthesis_open_close } from "./js_code_parenthesis_open_close.mjs";
export function js_code_arrow() {
  let oc = js_code_parenthesis_open_close();
  const code = oc + "=>" + js_code_braces_empty();
  return code;
}
