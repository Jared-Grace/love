import { js_functionize } from "../../../love/public/src/js_functionize.mjs";
import { marker_previous_index } from "../../../love/public/src/marker_previous_index.mjs";
import { js_marker_named_ast_arg } from "../../../love/public/src/js_marker_named_ast_arg.mjs";
import { marker_next_index } from "../../../love/public/src/marker_next_index.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function marker_functionize(m_name_from, m_name_to, f_name_new) {
  let f_name = await function_current_get();
  await function_transform(f_name, lambda_marker);
  async function lambda_marker(ast) {
    let a_from = js_marker_named_ast_arg(ast, m_name_from);
    let v2 = marker_next_index(a_from);
    let index_from = property_get(v2, "index");
    let a_to = js_marker_named_ast_arg(ast, m_name_to);
    let v3 = marker_previous_index(a_to);
    let index_to = property_get(v3, "index");
    let stack2_from = property_get(a_from, "stack2");
    let stack2_to = property_get(a_to, "stack2");
    assert(stack2_from === stack2_to);
    await js_functionize(ast, f_name_new, stack2_from, index_from, index_to);
  }
}
