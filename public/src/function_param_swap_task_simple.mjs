import { error } from "../../../love/public/src/error.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
import { function_param_swap } from "../../../love/public/src/function_param_swap.mjs";
import { todo } from "../../../love/public/src/todo.mjs";
export async function function_param_swap_task_simple() {
  "todo a simple test case of " + function_param_swap.name;
  let f_name = function_param_swap_task_simple;
  await function_new(f_name2);
  let f_name3 = error();
  await function_param_swap(f_name3, param_name_a, param_name_b);
  todo();
}
