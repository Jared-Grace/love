import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_node_select_args } from "../../../love/public/src/function_node_select_args.mjs";
export async function function_node_select(select_fn_name) {
  arguments_assert(arguments, 1);
  let r5 = await function_node_select_args(select_fn_name, null);
  return r5;
}
