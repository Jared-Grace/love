import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { text_empty_not_is_assert } from "../../../love/public/src/text_empty_not_is_assert.mjs";
import { data_function_current_restore } from "../../../love/public/src/data_function_current_restore.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { task_function_name_part } from "../../../love/public/src/task_function_name_part.mjs";
import { function_name_combine_multiple } from "../../../love/public/src/function_name_combine_multiple.mjs";
import { js_declaration_single_block_body } from "../../../love/public/src/js_declaration_single_block_body.mjs";
import { js_call_insert } from "../../../love/public/src/js_call_insert.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { todo } from "../../../love/public/src/todo.mjs";
export async function task_new(task_name) {
  assert_arguments(arguments, 1);
  text_empty_not_is_assert(task_name);
  let f_name = await function_current_get();
  let result2 = task_function_name_part();
  let v = await function_name_unalias(f_name);
  let unaliased = object_property_get(v, "unaliased");
  let f_name_task = function_name_combine_multiple([
    unaliased,
    result2,
    task_name,
  ]);
  await data_function_current_restore(lambda2);
  async function lambda2() {
    await function_new(f_name_task);
  }
  async function lambda(ast) {
    let body_block = js_declaration_single_block_body(ast);
    js_call_insert(todo.name, [], body_block, 0);
  }
  let result = await function_transform(f_name_task, lambda);
}
