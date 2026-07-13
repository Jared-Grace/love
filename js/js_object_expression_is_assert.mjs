import { js_node_type_is_assert_json } from "./js_node_type_is_assert_json.mjs";
export function js_object_expression_is_assert(e) {
  js_node_type_is_assert_json(e, "ObjectExpression", {
    hint: "expected an object-expression node here",
  });
}
