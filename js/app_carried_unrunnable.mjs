import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reachable_carried } from "./functions_reachable_carried.mjs";
import { functions_reachable_unguarded } from "./functions_reachable_unguarded.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function app_carried_unrunnable(a_main) {
  "$plain a_main";
  "Everything one app's bundle holds that no road through the page can ever arrive at.";
  "★ THIS IS THE SUBTRACTION OF THE TWO WALKS AND NEEDS NO GUESS ABOUT WHAT NODE LOOKS LIKE. One walk turns aside at every environment check and answers what runs; the other turns aside at nothing and answers what ships. What is in the second and not the first is downloaded in order never to execute, whatever it happens to be made of.";
  "The sister question that asks which of these names look like the build machine's work reads each file for an import only node has, and so it is blind to a function that was handed the node part rather than importing it - the socket fetch took the http module as a parameter and sat unnoticed in every page that fetched anything at all. Subtracting the two walks cannot be fooled that way, because it never looks inside a file.";
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
