import { error } from "./error.mjs";
import { function_new_open } from "./function_new_open.mjs";
import { function_param_swap } from "./function_param_swap.mjs";
import { todo } from "./todo.mjs";
import { text_combine } from "./text_combine.mjs";
export async function function_param_swap_task_simple() {
  text_combine("todo a simple test case of ", function_param_swap.name);
  let f_name = function_param_swap_task_simple;
  await function_new_open(f_name2);
  let f_name3 = error();
  await function_param_swap(f_name3, param_name_a, param_name_b);
  todo();
}
