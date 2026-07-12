import { null_is_if } from "./null_is_if.mjs";
import { js_visit_id_try } from "./js_visit_id_try.mjs";
export function js_visit_id_or_node(ast, n) {
  let item_to_add = js_visit_id_try(ast, n);
  item_to_add = null_is_if(item_to_add, n);
  return item_to_add;
}
