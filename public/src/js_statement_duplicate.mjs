import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { js_visit_id_to_node } from "../../../love/public/src/js_visit_id_to_node.mjs";
export async function js_statement_duplicate(id) {
  let f_name_current = await function_current_get();
  async function lambda(ast) {
    let node = js_visit_id_to_node(ast, id);
    let v = js_node_to_visitor(ast, node);
    let stack = property_get(v, "stack");
    let r = js_block_find(stack);
    let item = property_get(r, "item");
    let index = property_get(r, "index");
    let body = property_get(r, "body");
    let copy = json_copy(item);
    list_insert(body, index, copy);
  }
  let output = await function_transform_result(f_name_current, lambda);
}
