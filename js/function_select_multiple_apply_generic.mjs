import { function_select_apply_run_generic } from "./function_select_apply_run_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_select_multiple_apply } from "./js_select_multiple_apply.mjs";
export async function function_select_multiple_apply_generic(
  f_name,
  select_fn_name,
  select_args_multiple,
  apply_fn_name,
  apply_args,
) {
  arguments_assert(arguments, 5);
  ("The outside is shared with the single-node twin and lives there. This one names");
  ("the runner that selects one node per argument.");
  let output = await function_select_apply_run_generic(
    f_name,
    select_fn_name,
    select_args_multiple,
    apply_fn_name,
    apply_args,
    js_select_multiple_apply,
  );
  return output;
}
