import { arguments_assert } from "./arguments_assert.mjs";
import { function_imports } from "./function_imports.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function function_imports_reached(f_name) {
  "$plain f_name";
  "Every function one function can reach by importing, however many files away, read off the source rather than by running anything.";
  arguments_assert(arguments, 1);
  ("The starting function is not in the answer unless it can reach itself. What a caller wants to know is what it DEPENDS ON, and a function reaching itself is exactly the interesting case rather than a trivially true one - so seeding the answer with it would make a cycle indistinguishable from an ordinary member.");
  ("Imports and not calls, because an import is unconditional. A call may sit down a branch that is never taken, so a reached call says what a function COULD do; a reached import says what has to be loaded for it to run at all, which is the closed question.");
  ("A cycle is walked safely rather than guarded against, because a name is written down before its own imports are asked for. So functions importing each other settle instead of spinning, which matters here more than anywhere: this is what a caller asks in order to FIND such a cycle.");
  let reached = [];
  let frontier = [f_name];
  for (let name of frontier) {
    let imports = await function_imports(name);
    for (let one of imports) {
      let known = list_includes(reached, one);
      if (known) {
        continue;
      }
      list_add(reached, one);
      list_add(frontier, one);
    }
  }
  return reached;
}
