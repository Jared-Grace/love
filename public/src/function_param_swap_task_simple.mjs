import { function_new } from "./function_new.mjs";
import { function_param_swap } from "./function_param_swap.mjs";
import { todo } from "./todo.mjs";
import { error } from "./error.mjs";
export async function function_param_swap_task_simple() {
  await function_new(f_name2);
  await function_param_swap(f_name, param_name_a, param_name_b);
  todo();
}
