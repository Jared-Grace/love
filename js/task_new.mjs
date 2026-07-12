import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_not_is_assert } from "./text_empty_not_is_assert.mjs";
import { data_function_current_restore } from "./data_function_current_restore.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { task_function_name_part } from "./task_function_name_part.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_call_statement_insert } from "./js_call_statement_insert.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_new_open } from "./function_new_open.mjs";
import { function_current_get } from "./function_current_get.mjs";
import { todo } from "./todo.mjs";
export async function task_new(task_name) {
  arguments_assert(arguments, 1);
  text_empty_not_is_assert(task_name);
  let f_name = await function_current_get();
  let result2 = task_function_name_part();
  let v = await function_name_unalias(f_name);
  let unaliased = property_get(v, "unaliased");
  let f_name_task = function_name_combine_multiple([
    unaliased,
    result2,
    task_name,
  ]);
  await data_function_current_restore(lambda2);
  async function lambda2() {
    await function_new_open(f_name_task);
  }
  async function lambda(ast) {
    let body_block = js_flo_body(ast);
    js_call_statement_insert(todo.name, [], body_block, 0);
  }
  let result = await function_transform(f_name_task, lambda);
}
