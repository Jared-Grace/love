import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { app_learn_js_array_pair_sized } from "./app_learn_js_array_pair_sized.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
export function app_learn_js_array_pairs_overlap() {
  arguments_assert(arguments, 0);
  ("six inputs [a, b] for the lessons that ask one array whether it holds the items of another: a and b each three different numbers from 1 to 9, sharing one or two, so a has items b does not, b has items a does not, and some items are in both. Every wrong program of In both, In a, not in b and In either then writes out something other than the answer, with no input tried again.");
  ("2026-11-25, at the human's asking: three items each rather than four or five, so the step-by-step quiz has short loops to walk - In either walks two of them. The step quiz is made from the same inputs as every other quiz of the lesson, so all of them got shorter. Not picked: a separate, shorter input only for the step quiz, which the lesson maker has no slot for.");
  let shapes = [
    [3, 3, 1],
    [3, 3, 2],
    [3, 3, 1],
    [3, 3, 2],
    [3, 3, 1],
    [3, 3, 2],
  ];
  let pairs = list_map(shapes, app_learn_js_array_pair_sized);
  let shuffled = list_shuffle_take(pairs, 6);
  return shuffled;
}
