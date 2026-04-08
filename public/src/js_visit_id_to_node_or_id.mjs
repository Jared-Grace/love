import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { js_visit_id_to_node_try } from "../../../love/public/src/js_visit_id_to_node_try.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
export function js_visit_id_to_node_or_id(ast, id) {
  arguments_assert(arguments, 2);
  let node = js_visit_id_to_node_try(ast, id);
  if (null_is(node)) {
    node = id;
  }
  return node;
}
