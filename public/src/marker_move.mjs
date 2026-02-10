import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_marker_named_ast_arg } from "../../../love/public/src/js_marker_named_ast_arg.mjs";
import { marker_next_index } from "../../../love/public/src/marker_next_index.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export async function marker_move(m_name_from, m_name_to) {
  let f_name = await function_current_get();
  await function_transform(f_name, lambda_marker);
  async function lambda_marker(ast) {
    let a_from = js_marker_named_ast_arg(ast, m_name_from);
    let v = marker_next_get(a_from);
    let next = property_get(v, "next");
    let stack2_from = property_get(a_from, "stack2");
    list_remove(stack2_from, next);
    let a_to = js_marker_named_ast_arg(ast, m_name_to);
    let v2 = marker_next_index(a_to);
    let stack2_to = property_get(v2, "stack2");
    let index = property_get(v2, "index");
    list_insert(stack2_to, index, next);
  }
}
