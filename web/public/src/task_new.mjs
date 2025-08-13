import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { js_call_insert } from "./js_call_insert.mjs";
import { error } from "./error.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_new } from "./function_new.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function task_new(task_name) {
  let f_name = await data_function_current_get();
  let f_name_task = function_name_combine(f_name, task_name);
  await function_new(f_name_task);
  let result = await function_transform(f_name, async function lambda(ast) {
    let body_block = js_declaration_single_block_blody(ast);
    js_call_insert(error.name, ["todo"], list, index);
  });
}
