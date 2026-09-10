import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_batch_avoid_question(items, avoid_question, next_get) {
  arguments_assert(arguments, 3);
  ("The batch about to be drawn, with any line in it that repeats one the learner has already been shown worked out swapped for the next line the bank has.");
  ("A LESSON THAT SHOWS A LINE SOLVED AND THEN ASKS FOR THAT LINE HAS ASKED NOTHING. The telling above a lesson's card builds its own line and the card below draws from the bank, and the two are built independently - so the clash is possible on every screen and invisible to both halves of it.");
  ("SWAPPED RATHER THAN SHUFFLED, because the batch on these screens is one line long and a list of one cannot be rotated. The sibling that rotates a repeat to the back is for a batch with somewhere to move it to; here the only other line available is the next one the bank has, so that is what is asked for.");
  ("ONE SWAP AND NO MORE. A bank whose lines alternate hands back a different line the very next pull, so one is enough for the case this exists for; a bank with one line in it would be asked forever by a loop, and a learner shown the same line twice is a duller screen, not a broken one.");
  ("NOTHING TO AVOID IS THE ORDINARY CASE - most lessons hand back no line, and every one of those is handed straight back untouched.");
  let none = null_is(avoid_question);
  if (none) {
    return items;
  }
  function item_kept(item) {
    let repeats = property_equals(item, "question", avoid_question);
    if (repeats) {
      let fresh = next_get();
      return fresh;
    }
    return item;
  }
  let kept = list_map(items, item_kept);
  return kept;
}
