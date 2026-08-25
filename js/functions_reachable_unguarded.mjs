import { functions_reachable_generic } from "./functions_reachable_generic.mjs";
import { function_browser_guarded_is } from "./function_browser_guarded_is.mjs";
import { function_imports } from "./function_imports.mjs";
export async function functions_reachable_unguarded(f_names) {
  "Everything these entry points can reach in a browser. The walk stops at any function that";
  "asks which environment it is in, because that question is where the browser turns aside -";
  "whatever sits below it on the other branch is in the import graph but not on any road a";
  "page travels. The plain dependency closure cannot tell those two apart, and reports the";
  "unreachable half as if a page ran it.";
  "Every edge is walked, not the shortest route, because a leaf can sit behind a guard on one";
  "path and out in the open on another - and the open one is the whole point of asking.";
  async function children_get(f_name) {
    let guarded = await function_browser_guarded_is(f_name);
    if (guarded) {
      let none = [];
      return none;
    }
    let imports = await function_imports(f_name);
    return imports;
  }
  let reachable = await functions_reachable_generic(f_names, children_get);
  return reachable;
}
