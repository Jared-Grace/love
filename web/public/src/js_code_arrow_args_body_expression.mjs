import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function js_code_arrow_args_body_expression(args, expression) {
  let oc = js_code_wrap_parenthesis(args);
  const code = text_combine_multiple([oc, "=>", expression]);
  return code;
}
