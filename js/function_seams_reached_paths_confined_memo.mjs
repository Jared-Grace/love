import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert_json } from "./function_exists_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { function_imports_beyond_infrastructure_memo } from "./function_imports_beyond_infrastructure_memo.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
export async function function_seams_reached_paths_confined_memo(
  f_name,
  seams,
  confined,
  remembered,
) {
  "For each of the named seams this function can reach without passing through one of the confined functions, one chain of calls showing how it gets there.";
  "A confined function is one that reaches a seam but has already fenced what reaches it, so the walk treats it as a dead end rather than going through. That is not the same as dropping chains that happen to pass through it afterwards: the walk keeps one chain per seam, the first route it arrived by, so dropping that chain would hide every other route to the same seam. Stopping the walk at the fence leaves the other routes to be found.";
  "The plain walk is this with nothing confined, and is written that way, so both answer from the same visit and cannot disagree about an edge.";
  arguments_assert(arguments, 4);
  await function_exists_assert_json(f_name, {
    hint: "the function should exist to ask how it reaches what it reaches",
  });
  let paths = {};
  function lambda(v) {
    let node = property_get(v, "node");
    let seam = list_includes(seams, node);
    if (not(seam)) {
      return;
    }
    let known = property_exists(paths, node);
    if (known) {
      return;
    }
    let stack = property_get(v, "stack");
    property_set(paths, node, stack);
  }
  async function children_get(name) {
    let fenced = list_includes(confined, name);
    if (fenced) {
      let r = [];
      return r;
    }
    let kept = await function_imports_beyond_infrastructure_memo(
      name,
      remembered,
    );
    return kept;
  }
  await visit_unique_async(f_name, children_get, lambda);
  return paths;
}
