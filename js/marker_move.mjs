import { property_get } from "./property_get.mjs";
import { js_marker_named_ast_arg } from "./js_marker_named_ast_arg.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_current_get } from "./function_current_get.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove } from "./list_remove.mjs";
export async function marker_move(m_name_from, m_name_to) {
  let f_name = await function_current_get();
  await function_transform(f_name, lambda_marker);
  async function lambda_marker(ast) {
    let a_from = js_marker_named_ast_arg(ast, m_name_from);
    let v = marker_next_get(a_from);
    let next = property_get(v, "next");
    let stack_2_from = property_get(a_from, "stack_2");
    list_remove(stack_2_from, next);
    let a_to = js_marker_named_ast_arg(ast, m_name_to);
    let v2 = marker_next_index(a_to);
    let stack_2_to = property_get(v2, "stack_2");
    let index = property_get(v2, "index");
    list_insert(stack_2_to, index, next);
  }
}
