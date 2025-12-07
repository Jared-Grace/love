import { function_param_move_generic } from "../../../love/public/src/function_param_move_generic.mjs";
import { list_move_first } from "../../../love/public/src/list_move_first.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_param_move_first(param_name) {
  marker("1");
  assert_arguments(arguments, 1);
  let fn = list_move_first;
  await function_param_move_generic(fn, param_name);
}
