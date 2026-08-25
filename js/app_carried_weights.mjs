import { functions_names_weights } from "./functions_names_weights.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reachable_carried } from "./functions_reachable_carried.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function app_carried_weights(a_main) {
  "$plain a_main";
  "Every function one app's bundle holds, heaviest source first.";
  "★ A CEILING SAYS A PAGE IS TOO BIG AND NAMES NOTHING TO CUT. The reader is left walking the imports by hand looking for something fat, and the thing actually costing the bytes is rarely the file anybody suspects. This turns the one number into a list somebody can act on.";
  "What a byte here is worth is the weigher's business and is written there. What belongs here is why it can be asked at all without a build: the alternative was reading the bundler's own accounting, which needs a build to have happened and answers only about the app already built. This answers about any entry point there is, in a second.";
  arguments_assert(arguments, 1);
  let mains = [a_main];
  let carried = await functions_reachable_carried(mains);
  list_empty_not_is_assert_json(carried, {
    a_main,
    hint: "this entry point reached nothing at all, so nothing was weighed - the name is the thing to look at, not the empty answer",
  });
  let sorted = await functions_names_weights(carried);
  return sorted;
}
