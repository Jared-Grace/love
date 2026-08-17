import { js_calls_to_each_lambda } from "./js_calls_to_each_lambda.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_calls_to_each(ast) {
  "multiple calls line after line can be changed into each";
  async function lambda(v) {
    let r = await js_calls_to_each_lambda(v, ast);
    return r;
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
}
