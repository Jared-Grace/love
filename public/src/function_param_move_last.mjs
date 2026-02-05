import { function_param_move_generic } from "../../../love/public/src/function_param_move_generic.mjs";
import { list_move_last } from "../../../love/public/src/list_move_last.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_param_move_last(f_name, param_name) {
  assert_arguments(arguments, 2);
  let fn = list_move_last;
  await function_param_move_generic(fn, param_name, f_name);
}
