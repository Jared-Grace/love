import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { visit_unique_async } from "./visit_unique_async.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { list_adder_unique_async } from "./list_adder_unique_async.mjs";
export async function functions_reachable_generic(f_names, children_get) {
  "Everything a set of entry points can reach, following whichever edges the caller says count.";
  "★ THE TWO QUESTIONS WORTH ASKING DIFFER ONLY IN WHAT COUNTS AS AN EDGE, and everything else about them - starting from many names at once, walking every route rather than the shortest, saying each name once - is the same walk. Written out twice, the second copy is where the two answers quietly stop agreeing about anything except the thing they were meant to differ on.";
  "Every edge is walked rather than the shortest route, because a leaf can sit behind a turning on one path and out in the open on another, and the open one is usually the whole point of asking.";
  arguments_assert(arguments, 2);
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
