import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
export function js_code_arrow_args_body(args, body) {
  let b = js_code_wrap_braces(body);
  let oc = js_code_wrap_parenthesis(args);
  const code = oc + "=>" + b;
  return code;
}
