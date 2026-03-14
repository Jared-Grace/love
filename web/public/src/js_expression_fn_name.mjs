import { js_expression_dot } from "../../../love/public/src/js_expression_dot.mjs";
export function js_expression_fn_name(f_name) {
  const right = "name";
  let expression = js_expression_dot(f_name, right);
  return expression;
}
