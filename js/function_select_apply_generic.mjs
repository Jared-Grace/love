import { arguments_assert } from "./arguments_assert.mjs";
import { function_import } from "./function_import.mjs";
import { list_ensure } from "./list_ensure.mjs";
import { function_transform } from "./function_transform.mjs";
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
  ("The two halves stay separate pieces: a selector answers where, a transform says");
  ("what, and any selector pairs with any transform. Fusing them into one named");
  ("edit per pair would need a new name for every combination.");
  let select_fn = await function_import(select_fn_name);
  let apply_fn = await function_import(apply_fn_name);
  async function lambda(ast) {
    let selected = await select_fn(ast, ...select_args);
    let selects = list_ensure(selected);
    await apply_fn(ast, selects, ...apply_args);
  }
  let output = await function_transform(f_name, lambda);
  return output;
}
