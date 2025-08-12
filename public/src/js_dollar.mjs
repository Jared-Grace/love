import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_dollar(ast) {
  js_visit_type(ast, "ExpressionStatement", (v) => {
    let { node } = v;
    if (js_identifier_is(node)) {
      let { name } = node;
    }
  });
}
