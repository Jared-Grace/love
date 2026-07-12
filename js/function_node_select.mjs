import { arguments_assert } from "./arguments_assert.mjs";
import { function_node_select_args } from "./function_node_select_args.mjs";
export async function function_node_select(select_fn_name) {
  arguments_assert(arguments, 1);
  let r = await function_node_select_args(select_fn_name, null);
  return r;
}
