import { arguments_assert } from "./arguments_assert.mjs";
import { function_copy_generic } from "./function_copy_generic.mjs";
import { function_copy_result_open } from "./function_copy_result_open.mjs";
export async function function_copy_generic_open(plugin_fn, args_comma) {
  arguments_assert(arguments, 2);
  let r = await function_copy_generic(plugin_fn, args_comma);
  let name = await function_copy_result_open(r);
  return name;
}
