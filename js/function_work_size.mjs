import { arguments_assert } from "./arguments_assert.mjs";
import { function_work_statements } from "./function_work_statements.mjs";
import { list_size } from "./list_size.mjs";
export async function function_work_size(f_name) {
  arguments_assert(arguments, 1);
  ("How many lines of work the named function holds, counted at every depth.");
  ("This is the one number a function can be too big by. Bytes would count a long name against a function that reads perfectly, and top-level statements would let a function hide twenty lines inside one loop; a count of the work at every depth is what a reader actually has to hold in their head.");
  let deep = await function_work_statements(f_name);
  let size = list_size(deep);
  return size;
}
