import { function_browser_guarded_is } from "./function_browser_guarded_is.mjs";
import { function_imports } from "./function_imports.mjs";
import { property_get } from "./property_get.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
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
  async function lambda2(la) {
    async function lambda3(item) {
      function lambda(v) {
        let node = property_get(v, "node");
        la(node);
      }
      await visit_unique_async(item, children_get, lambda);
    }
    await each_unordered_async(f_names, lambda3);
  }
  let reachable = await list_adder_unique_async(lambda2);
  return reachable;
}
