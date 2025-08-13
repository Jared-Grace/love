import { function_current_set } from "./function_current_set.mjs";
import { task_function_name_part } from "./task_function_name_part.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { js_call_insert } from "./js_call_insert.mjs";
import { error } from "./error.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_new } from "./function_new.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { todo } from "./todo.mjs";
export async function task_new(task_name) {
  let f_name = await data_function_current_get();
  let result2 = task_function_name_part();
  let f_name_task = function_name_combine_multiple([
    f_name,
    result2,
    task_name,
  ]);
  let f_name_current = await data_function_current_get();
  await function_new(f_name_task);
  await function_current_set(f_name_current);
  async function lambda(ast) {
    let body_block = js_declaration_single_block_blody(ast);
    js_call_insert(todo.name, [], body_block, 0);
  }
  let result = await function_transform(f_name_task, lambda);
}
