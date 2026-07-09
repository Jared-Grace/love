import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
import { js_operator_dot } from "../../../love/public/src/js_operator_dot.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function js_code_dot(left, right) {
  let code = js_code_wrap_parenthesis(
    text_combine_multiple([left, js_operator_dot(), right]),
  );
  return code;
}
