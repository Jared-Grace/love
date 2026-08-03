import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { function_work_size } from "./function_work_size.mjs";
import { function_work_size_direct } from "./function_work_size_direct.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_oversize_nesting() {
  arguments_assert(arguments, 0);
  ("Every function standing over the ceiling, with how many lines of work it holds at every depth beside how many it holds at the top of its own body.");
  ("The reading that says how a long function is long, and so where to point the span extractor at it. Both numbers are lines of work; the second counts only the ones standing at the top of the body, so the difference between them is how much is folded inside loops, branches and closures.");
  ("Run on 2026-08-03 over all 130 entries: the smallest count of lines at the top of a body was two, and 53 entries held twenty or more.");
  ("A wide gap between the two numbers was first read as meaning the span extractor would reach the size anyway, a closure written beside its use being a statement like any other. That was wrong, and the same day proved it: cutting a span around a closure hands the closure to a new function whole, so the size moves and the record stays the same length. Which of the three shapes a gap is takes a further reading - ",
    fn_name("function_nested_sizes"),
    " names each closure in a function and sizes it - and each shape has a command of its own.");
  ("To go straight to the work rather than to a reading, ask ",
    fn_name("functions_lift_candidates"),
    ": it walks this same list and hands back, for each entry that holds one, the biggest closure the lift would actually take. Of the 130 entries here, 71 hold one.");
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
