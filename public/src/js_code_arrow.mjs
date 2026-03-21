import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
export function js_code_arrow() {
  let oc = js_code_wrap_parenthesis("");
  let b = js_code_wrap_braces("");
  const code = oc + "=>" + b;
  return code;
}
