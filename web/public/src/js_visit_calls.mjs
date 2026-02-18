import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_visit_calls(ast, lambda_inner) {
  js_visit_type(ast, "CallExpression", lambda_inner);
}
