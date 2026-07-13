import { js_node_type_is_assert_json } from "./js_node_type_is_assert_json.mjs";
export function js_statement_if_is_assert(statement_if) {
  js_node_type_is_assert_json(statement_if, "IfStatement", {
    hint: "expected an if-statement node here",
  });
}
