import { arguments_assert } from "./arguments_assert.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_learn_js_love_joy_peace_orders() {
  arguments_assert(arguments, 0);
  ("the six orders of love, joy and peace, shuffled: a set of questions for a lesson about the words of a string, each a different order");
  ('2026-11-22, at the human\'s asking: only these three short words, so a line such as let s = "love, joy, peace"; fits on a phone without wrapping. Not picked: three or four of all nine fruits of the Spirit, which wrapped with self-control or faithfulness');
  let orders = list_permutations(["love", "joy", "peace"]);
  let shuffled = list_shuffle_take(orders, 6);
  return shuffled;
}
