import { function_param_move_generic } from "./function_param_move_generic.mjs";
import { list_move_first } from "./list_move_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_param_move_first(f_name, param_name) {
  arguments_assert(arguments, 2);
  let fn = list_move_first;
  await function_param_move_generic(fn, param_name, f_name);
}
