import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { function_work_size } from "./function_work_size.mjs";
import { function_work_size_direct } from "./function_work_size_direct.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_oversize_nesting() {
  arguments_assert(arguments, 0);
  ("Every function standing over the ceiling, with how many lines of work it holds at every depth beside how many it holds at the top of its own body.");
  ("The reading that says which of them can be cut with what exists. A span extractor takes a run of lines out of the top of a body, so it can only reach the lines counted in the second number - a function holding eighty deep and four direct has nothing for it to take, whatever is inside.");
  ("Asked before building a second tool rather than after, because the second tool is the expensive one: lifting a closure out means every free name it reads becomes a parameter and every place it is passed as a value becomes a partial application. That is worth building for half the record and not worth it for five entries, and the difference is a measurement, not a guess.");
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
