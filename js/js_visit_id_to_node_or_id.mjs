import { null_is_if } from "./null_is_if.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_id_to_node_try } from "./js_visit_id_to_node_try.mjs";
export function js_visit_id_to_node_or_id(ast, id) {
  arguments_assert(arguments, 2);
  let node = js_visit_id_to_node_try(ast, id);
  node = null_is_if(node, id);
  return node;
}
