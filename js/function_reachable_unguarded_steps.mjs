import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_browser_guarded_is } from "./function_browser_guarded_is.mjs";
import { function_imports } from "./function_imports.mjs";
import { property_get } from "./property_get.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
export async function function_reachable_unguarded_steps(f_name, target) {
  arguments_assert(arguments, 2);
  ("One road a browser can travel from this entry point to the function named, or nothing if it cannot get there");
  ("The walk turns aside at any function that asks which environment it is in, exactly as the reachability question itself does, so a road offered here is one a page really travels rather than one that merely exists in the imports");
  ("Which functions can be reached was already answerable; by what route was not, and the answer was being worked out by hand every time somebody read the complaint - once, here, wrongly. The walk was carrying the route the whole time and throwing it away, because the visitor hands each function the run of names that led to it");
  ("One road and not every road. Any road is enough to prove a page gets there, and the first one found is the one kept - so this says a screen can break and how, not how many ways it could");
  let steps = null;
  async function children_get(visited_f_name) {
    let guarded = await function_browser_guarded_is(visited_f_name);
    if (guarded) {
      let none = [];
      return none;
    }
    let imports = await function_imports(visited_f_name);
    return imports;
  }
  function lambda(v) {
    let found = property_equals(v, "node", target);
    if (found) {
      let walked = property_get(v, "stack");
      steps = walked;
    }
  }
  await visit_unique_async(f_name, children_get, lambda);
  return steps;
}
