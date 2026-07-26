import { function_dependencies_single } from "./function_dependencies_single.mjs";
import { list_includes } from "./list_includes.mjs";
export async function function_cycle_would_create_is(f_name, helper_name) {
  "Whether rewriting something inside one function into a call to another would close a ring. The helper already reaches back to the function being edited, so the new call joins the two ends and nothing that enters ever leaves.";
  "A function named as its own helper is the same question with the shortest ring there is, and the answer comes back true without a case of its own - a function is always among the things it reaches.";
  "This is what a transform asks before it writes, where the fault is still cheap. It is the other half of the check that walks the finished repo, and neither replaces the other: this one stops a rewrite from making a ring, and that one still catches a ring somebody typed by hand.";
  "Reaching is read from what a file brings in, which says more than what it calls - a helper can bring something in and call it only down one branch. So the answer errs toward refusing, which is the direction a transform should err in, and a refusal is worth saying out loud rather than swallowing.";
  let reachable = await function_dependencies_single(helper_name);
  let cycle = list_includes(reachable, f_name);
  return cycle;
}
