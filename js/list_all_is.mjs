import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function list_all_is(list, lambda) {
  arguments_assert(arguments, 2);
  ("Whether every thing in the list answers yes to the same question.");
  ("An empty list answers yes, which is the only answer that lets a caller write the question as a rule rather than as a count - a rule with nothing to break it is not broken.");
  ("The neighbours that keep things or drop them by asking a question of each already exist; this is the same walk asked for a single answer instead of a shorter list, which is what a reading deciding one thing about the whole of something wants.");
  for (let thing of list) {
    let held = lambda(thing);
    if (not(held)) {
      return false;
    }
  }
  return true;
}
