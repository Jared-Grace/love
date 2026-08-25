import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reachable_carried } from "./functions_reachable_carried.mjs";
import { functions_reachable_unguarded } from "./functions_reachable_unguarded.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function app_carried_guarded(a_main) {
  "$plain a_main";
  "Everything one app's bundle holds that sits below an environment check - a shortlist of the places where a page's half and the build machine's half were written in one file.";
  "★ IT NAMES BOTH HALVES AND NOT THE NODE ONE. The walk it subtracts stops AT the check rather than travelling the page's branch through it, so a browser-only helper reached only from below one is in this answer too, and it is not weight to remove - it is exactly what the page runs. Read it as forty places to look rather than forty faults; the reader decides which side of each check the name is on.";
  "It is worth the reading anyway, because it is the whole of where a split can be made and it is short. A bundle of eight hundred functions gave forty here, and the two that mattered were both in it.";
  "The sister question that asks which carried names look like the build machine's work reads each file for an import only node has, and so it is blind to a function that was handed the node part rather than importing it - the socket fetch took the http module as a parameter and sat unnoticed in every page that fetched anything at all. Subtracting the two walks cannot be fooled that way, because it never looks inside a file.";
  "It asserts it looked at something before reporting what it found, because an empty answer here is indistinguishable from a walk that never started, and the second one reads as a clean bill of health.";
  arguments_assert(arguments, 1);
  let mains = [a_main];
  let carried = await functions_reachable_carried(mains);
  list_empty_not_is_assert_json(carried, {
    a_main,
    hint: "this entry point reached nothing at all, so nothing was examined - the name is the thing to look at, not the empty answer",
  });
  let runnable = await functions_reachable_unguarded(mains);
  let extra = list_difference(carried, runnable);
  let sorted = list_sort_text(extra);
  return sorted;
}
