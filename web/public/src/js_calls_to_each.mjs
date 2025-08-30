import { js_visit_type } from "./js_visit_type.mjs";
export function js_calls_to_each(ast) {
  "multiple calls line after line can be changed into each";
  let call_name = null;
  function lambda(v) {
    let node = v;
  }
  js_visit_type(ast, "ExpressionStatement", lambda);
}
