import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
export function js_code_arrow_args_body_expression(args, b) {
  let oc = js_code_wrap_parenthesis(args);
  const code = oc + "=>" + b;
  return code;
}
