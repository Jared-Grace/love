import { js_node_type_is_assert_json } from "./js_node_type_is_assert_json.mjs";
export function js_statement_expression_is_assert(node) {
  js_node_type_is_assert_json(node, "ExpressionStatement", {
    hint: "expected an expression-statement node here",
  });
}
