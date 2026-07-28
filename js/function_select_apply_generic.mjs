import { function_transform_imports } from "./function_transform_imports.mjs";
import { function_callee_seam_assert } from "./function_callee_seam_assert.mjs";
import { js_select_apply } from "./js_select_apply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_import } from "./function_import.mjs";
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
  ("This half is only the outside: turning two names into two functions, and one");
  ("function name into a file to rewrite. The pairing itself lives in the pure");
  ("middle, where the corpus can check it.");
  await function_callee_seam_assert(select_fn_name);
  await function_callee_seam_assert(apply_fn_name);
  let select_fn = await function_import(select_fn_name);
  let apply_fn = await function_import(apply_fn_name);
  async function lambda(ast) {
    await js_select_apply(ast, select_fn, select_args, apply_fn, apply_args);
  }
  let output = await function_transform_imports(f_name, lambda);
  return output;
}
