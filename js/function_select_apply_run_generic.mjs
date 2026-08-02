import { function_select_apply_pair } from "./function_select_apply_pair.mjs";
import { property_get } from "./property_get.mjs";
import { function_transform_imports } from "./function_transform_imports.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_select_apply_run_generic(
  f_name,
  select_fn_name,
  select_args,
  apply_fn_name,
  apply_args,
  run_fn,
) {
  arguments_assert(arguments, 6);
  ("The outside every selector-and-transform command shares: two names become two");
  ("functions, and one function name becomes a file to rewrite. The pairing itself");
  ("lives in the pure middle, where the corpus can check it.");
  ("What is left over is which pairing to run - one node or several - and that");
  ("arrives as the last argument, because the two runners take the same five");
  ("things in the same order and differ only in how many nodes they select.");
  ("Nothing is kept between commands. Several conversations edit this one");
  ("directory at the same time, so a selection left lying around between two");
  ("commands belongs to whoever wrote it last, and the second command cannot tell.");
  let pair = await function_select_apply_pair(select_fn_name, apply_fn_name);
  let select_fn = property_get(pair, "select_fn");
  let apply_fn = property_get(pair, "apply_fn");
  async function lambda(ast) {
    await run_fn(ast, select_fn, select_args, apply_fn, apply_args);
  }
  let output = await function_transform_imports(f_name, lambda);
  return output;
}
