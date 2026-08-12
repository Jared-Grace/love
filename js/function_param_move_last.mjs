import { function_param_move_generic } from "./function_param_move_generic.mjs";
import { list_move_last } from "./list_move_last.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_param_move_last(f_name, param_name) {
  "Moves one of a function's parameters to the end of its list, and every call along with it, so an argument that matters least is read last.";
  arguments_assert(arguments, 2);
  let fn = list_move_last;
  await function_param_move_generic(fn, param_name, f_name);
}
