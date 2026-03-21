import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
export function js_code_arrow() {
  const args = "";
  const body = "";
  let oc = js_code_wrap_parenthesis(args);
  let b = js_code_wrap_braces(body);
  const code = oc + "=>" + b;
  return code;
}
