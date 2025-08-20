import { js_marker_named_ast_arg } from "./js_marker_named_ast_arg.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker_arg } from "./function_transform_marker_arg.mjs";
import { js_marker_named_ast } from "./js_marker_named_ast.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { list_single } from "./list_single.mjs";
import { js_marker_named } from "./js_marker_named.mjs";
import { data_marker_current_get } from "./data_marker_current_get.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { js_type } from "./js_type.mjs";
import { error } from "./error.mjs";
import { list_is } from "./list_is.mjs";
import { marker } from "./marker.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { function_transform } from "./function_transform.mjs";
import { object_merge } from "./object_merge.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_filter } from "./list_filter.mjs";
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
