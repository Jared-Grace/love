import { arguments_assert } from "./arguments_assert.mjs";
import { list_ensure } from "./list_ensure.mjs";
export async function js_select_apply(
  ast,
  select_fn,
  select_args,
  apply_fn,
  apply_args,
) {
  arguments_assert(arguments, 5);
  ("The whole seam in one place: a selector answers where, a transform says what,");
  ("and a list of selected nodes joins them. Any selector pairs with any transform,");
  ("so the two halves multiply instead of needing a name per combination.");
  ("Everything here is a tree in memory. Which file it came from and how the two");
  ("halves were named is somebody else's problem, which is what lets the corpus");
  ("check this part without touching the repo.");
  let selected = await select_fn(ast, ...select_args);
  let selects = list_ensure(selected);
  await apply_fn(ast, selects, ...apply_args);
}
