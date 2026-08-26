import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reachable_carried } from "./functions_reachable_carried.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function app_carried_names(a_main, hint) {
  "$plain a_main";
  "$plain hint";
  "Every function one app's entry point carries into its bundle, refusing to answer at all when the walk reached nothing.";
  "Three readings of a bundle open on these same lines - what it weighs, what one name alone holds up, and where its two halves are split by an environment check - because each of them has to hold the names before it can ask anything about them. The walk takes a list of entry points and each of these readings has exactly one, so each was also writing the list of one out for itself.";
  "An empty answer is indistinguishable from a walk that never started, and the second one reads as a clean bill of health. So the emptiness is refused here, once, rather than being remembered separately by every reading it would fool.";
  "The sentence the refusal carries is the caller's own, because what was not done to the names differs - one reading was going to weigh them and another to examine them - and only the caller knows which.";
  arguments_assert(arguments, 2);
  let mains = [a_main];
  let carried = await functions_reachable_carried(mains);
  list_empty_not_is_assert_json(carried, {
    a_main,
    hint,
  });
  return carried;
}
