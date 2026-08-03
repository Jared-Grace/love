import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { function_work_size } from "./function_work_size.mjs";
import { function_work_size_direct } from "./function_work_size_direct.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_oversize_nesting() {
  arguments_assert(arguments, 0);
  ("Every function standing over the ceiling, with how many lines of work it holds at every depth beside how many it holds at the top of its own body.");
  ("The reading that says how a long function is long, and so where to point the span extractor at it. Both numbers are lines of work; the second counts only the ones standing at the top of the body, so the difference between them is how much is folded inside loops, branches and closures.");
  ("Run on 2026-08-03 over all 130 entries: the smallest count of lines at the top of a body was two, and 53 entries held twenty or more. Nothing here is a body with nothing in it to address, which was the question - a second tool for lifting closures was going to be built until this said the extractor already reaches them, a closure written beside its use being a statement like any other.");
  let named = await functions_work_oversize_names();
  let rows = [];
  for (let name of named) {
    let size = await function_work_size(name);
    let direct = await function_work_size_direct(name);
    list_add(rows, {
      name,
      size,
      direct,
    });
  }
  return rows;
}
