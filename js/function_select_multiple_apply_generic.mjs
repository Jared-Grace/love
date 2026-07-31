import { function_transform_imports } from "./function_transform_imports.mjs";
import { function_callee_seam_assert } from "./function_callee_seam_assert.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_import } from "./function_import.mjs";
import { js_select_multiple_apply } from "./js_select_multiple_apply.mjs";
export async function function_select_multiple_apply_generic(
  f_name,
  select_fn_name,
  select_args_multiple,
  apply_fn_name,
  apply_args,
) {
  arguments_assert(arguments, 5);
  ("The outside of the many-node pairing: two names become two functions, and one");
  ("function name becomes a file to rewrite. The pairing itself lives in the pure");
  ("middle, where the corpus can check it.");
  let pair = await function_select_apply_pair(select_fn_name, apply_fn_name);
  let select_fn = property_get(pair, "select_fn");
  let apply_fn = property_get(pair, "apply_fn");
  async function lambda(ast) {
    await js_select_multiple_apply(
      ast,
      select_fn,
      select_args_multiple,
      apply_fn,
      apply_args,
    );
  }
  let output = await function_transform_imports(f_name, lambda);
  return output;
}
