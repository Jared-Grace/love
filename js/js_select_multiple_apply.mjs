import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function js_select_multiple_apply(
  ast,
  select_fn,
  select_args_multiple,
  apply_fn,
  apply_args,
) {
  arguments_assert(arguments, 5);
  ("Runs one selector once per argument and hands the transform everything it");
  ("found. Some edits need two nodes rather than one — pulling the statements");
  ("between a first and a last out into their own function is the reason the list");
  ("of selected nodes was a list to begin with.");
  ("The picks accumulate inside a single command. Gathering them across commands");
  ("needs somewhere to keep a half-finished selection, and anything kept between");
  ("commands here belongs to whichever conversation wrote it last.");
  async function lambda(select_arg) {
    let selected = await select_fn(ast, select_arg);
    return selected;
  }
  let selects = await list_map_async(select_args_multiple, lambda);
  await apply_fn(ast, selects, ...apply_args);
}
