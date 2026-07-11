import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_visit_declarations_nodes } from "../../../love/public/src/js_visit_declarations_nodes.mjs";
import { js_keyword_const } from "../../../love/public/src/js_keyword_const.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
export function js_const_to_let(ast) {
  function lambda(node) {
    js_const_to_let_node(node);
  }
  js_visit_declarations_nodes(ast, lambda);
  return;
}
function js_const_to_let_node(node) {
  function lambda_kind(kind) {
    let is_const = equal(kind, js_keyword_const());
    if (is_const) {
      return js_keyword_let();
    }
    return kind;
  }
  property_transform(node, "kind", lambda_kind);
}

