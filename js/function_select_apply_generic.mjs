import { function_select_apply_pair } from "./function_select_apply_pair.mjs";
import { property_get } from "./property_get.mjs";
import { function_transform_imports } from "./function_transform_imports.mjs";
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
  ("This half is only the outside: turning two names into two functions, and one");
  ("function name into a file to rewrite. The pairing itself lives in the pure");
  ("middle, where the corpus can check it.");
  let pair = await function_select_apply_pair(select_fn_name, apply_fn_name);
  let select_fn = property_get(pair, "select_fn");
  let apply_fn = property_get(pair, "apply_fn");
  async function lambda(ast) {
    await js_select_apply(ast, select_fn, select_args, apply_fn, apply_args);
  }
  let output = await function_transform_imports(f_name, lambda);
  return output;
}
