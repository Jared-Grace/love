import { arguments_assert } from "./arguments_assert.mjs";
import { function_run_shape_generic } from "./function_run_shape_generic.mjs";
import { list_take_last } from "./list_take_last.mjs";
export async function function_tail_shape(f_name, size) {
  arguments_assert(arguments, 2);
  ("What the named function does in its last few working statements, with its own name, its private names and its prose taken away.");
  let shape = await function_run_shape_generic(f_name, size, list_take_last);
  return shape;
}
