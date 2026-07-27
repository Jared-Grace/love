import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add } from "./add.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_array_element_move_beside(
  elements,
  moving,
  neighbour,
  delta,
) {
  arguments_assert(arguments, 4);
  ("Moves an entry already in an ordered register to sit beside another entry");
  ("already there, on whichever side the step says. The two verbs next door put a");
  ("NEW entry beside one, which is why each of them has to be told how to build");
  ("what goes in — a written word for one, a name for the other. Nothing is built");
  ("here: the entry that leaves is the entry that arrives, so the same verb serves");
  ("a register of words and a register of names without knowing which it has.");
  ("Refusing a move onto itself is the whole reason this is a verb rather than two");
  ("lines at each call site. Taking an entry out and then asking where it goes");
  ("finds nothing when the answer was the entry itself, and the list helper answers");
  ("that with a number that reads as a place — so the entry silently lands at the");
  ("front, in a register whose order is its meaning.");
  let same = equal(moving, neighbour);
  let different = not(same);
  assert_json(different, {
    hint: "an entry cannot be moved to sit beside itself — would you like to name the entry it should end up next to?",
  });
  list_remove(elements, moving);
  ("The place is read AFTER the entry has left, so the number counts the list the");
  ("entry is about to join rather than the one it was still in.");
  let index = list_index_of(elements, neighbour);
  let index_at = add(index, delta);
  list_insert(elements, index_at, moving);
}
