import { js_visit_id_to_node_try } from "./js_visit_id_to_node_try.mjs";
import { null_not_is_assert_json } from "./null_not_is_assert_json.mjs";
export function js_visit_id_to_node(ast, id) {
  let node = js_visit_id_to_node_try(ast, id);
  null_not_is_assert_json(node, {
    hint: "a node with this id should exist in the ast — was the id taken from this same ast?",
    id,
  });
  return node;
}
