import { js_functionize } from "./js_functionize.mjs";
import { marker_previous_index } from "./marker_previous_index.mjs";
import { js_marker_named_ast_arg } from "./js_marker_named_ast_arg.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { function_current_get } from "./function_current_get.mjs";
import { function_transform } from "./function_transform.mjs";
import { assert_message } from "./assert_message.mjs";
import { property_get } from "./property_get.mjs";
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
    let stack_2_from = property_get(a_from, "stack_2");
    let stack_2_to = property_get(a_to, "stack_2");
    assert_message(
      stack_2_from === stack_2_to,
      "The two markers were expected to live in the same block. Would you like to check that both sit in the same scope?",
    );
    await js_functionize(ast, f_name_new, stack_2_from, index_from, index_to);
  }
}
