import { function_name_unalias } from "./function_name_unalias.mjs";
import { function_current_set } from "./function_current_set.mjs";
import { task_function_name_part } from "./task_function_name_part.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
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
  let f_name_current = await data_function_current_get();
  await lambda2();
  await function_current_set(f_name_current);
  async function lambda2() {
    await function_new(f_name_task);
  }
  async function lambda(ast) {
    let body_block = js_declaration_single_block_blody(ast);
    js_call_insert(todo.name, [], body_block, 0);
  }
  let result = await function_transform(f_name_task, lambda);
}
