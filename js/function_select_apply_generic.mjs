import { function_select_apply_run_generic } from "./function_select_apply_run_generic.mjs";
import { js_select_apply } from "./js_select_apply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_select_apply_generic(
  f_name,
  select_fn_name,
  select_args,
  apply_fn_name,
  apply_args,
) {
  arguments_assert(arguments, 5);
  ("Finding the node and changing it in one call, with nowhere to keep a selection");
  ("in between. Several conversations edit this one directory at the same time, so");
  ("a selection left lying around between two commands belongs to whoever wrote it");
  ("last, and the second command cannot tell.");
  ("The outside is shared with the many-node twin and lives there. This one names");
  ("the runner that selects a single node.");
  let output = await function_select_apply_run_generic(
    f_name,
    select_fn_name,
    select_args,
    apply_fn_name,
    apply_args,
    js_select_apply,
  );
  return output;
}
