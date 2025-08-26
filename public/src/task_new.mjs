import { data_function_current_restore } from "./data_function_current_restore.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { task_function_name_part } from "./task_function_name_part.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { js_call_insert } from "./js_call_insert.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_new } from "./function_new.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { todo } from "./todo.mjs";
export async function task_new(task_name) {
  let f_name = await data_function_current_get();
  let result2 = task_function_name_part();
  let { unaliased } = await function_name_unalias(f_name);
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
