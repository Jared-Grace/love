import { js_marker_named_ast_arg } from "./js_marker_named_ast_arg.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { marker } from "./marker.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove } from "./list_remove.mjs";
export async function marker_move(m_name_from, m_name_to) {
  marker("1");
  let f_name = await data_function_current_get();
  await function_transform(f_name, lambda_marker);
  async function lambda_marker(ast) {
    let a_from = js_marker_named_ast_arg(ast, m_name_from);
    let { next } = marker_next_get(a_from);
    let { stack2: stack2_from } = a_from;
    list_remove(stack2_from, next);
    let a_to = js_marker_named_ast_arg(ast, m_name_to);
    let { index, stack2: stack2_to } = marker_next_index(a_to);
    list_insert(stack2_to, index, next);
  }
}
