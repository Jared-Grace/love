import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_sizes } from "./functions_work_sizes.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
export async function functions_work_largest(count) {
  arguments_assert(arguments, 1);
  ("The biggest functions in the repo by lines of work, as many as asked for.");
  ("What to read before choosing what to collapse. A function at the top of this list is not wrong for being long, but it is where a shared run is most likely to be hiding, and it is the one the ceiling is set by.");
  let ranked = await functions_work_sizes();
  let largest = list_slice_count(ranked, 0, count);
  return largest;
}
