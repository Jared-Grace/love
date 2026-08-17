import { list_add_multiple } from "./list_add_multiple.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
export async function functions_nested_lift_all_generic(
  pass_fn,
  candidates_fn,
) {
  arguments_assert(arguments, 2);
  ("Walks the handed-in pass again and again until a whole walk moves nothing, committing each move under its own command as it lands, and asks the handed-in list once more at the end.");
  ("The list was already a list of commands and still had to be run by hand, once per row, which is the shape this repo calls a missing command. Running it by hand also breaks the record of what happened: a run of seventy moves has no single command to name, so it would have to be filed under the bare word, and seventy behaviour-preserving moves would arrive looking like seventy hand edits.");
  ("One walk is not enough, and that is a fact about the list rather than a fault in it. The list names only the biggest piece inside each function, because moving that one changes what the second biggest is - so a function holding three pieces gives up one per walk. Measured on the first run: sixty-seven moved, and two lessons still held a piece their neighbour had already had lifted out of it.");
  ("What ends it is a walk that moves nothing, not a list that empties. The list never empties: a function whose piece cannot be given a name is stepped over every walk and stays on it, so waiting for it to empty would walk for ever.");
  ("It asks the list once more at the end. The answer is the proof: the rows left are the functions still standing over the ceiling, and they are left because they hold a straight run of work rather than a closure, so they want the other cut.");
  ("The pass and the list are handed in together because they pair up, and a mismatched pair would end early: a walk of the wide pass judged by the narrow list would report rows left that it never had a way to reach.");
  await ai_git_noted();
  let lifted = [];
  let skipped = [];
  let dry = false;
  while (not(dry)) {
    let pass = await pass_fn();
    let pass_lifted = property_get(pass, "lifted");
    let pass_skipped = property_get(pass, "skipped");
    list_add_multiple(lifted, pass_lifted);
    skipped = pass_skipped;
    let moved = list_size(pass_lifted);
    dry = equal(moved, 0);
  }
  let left = await candidates_fn();
  let remaining = list_size(left);
  let r = {
    lifted,
    skipped,
    remaining,
  };
  return r;
}
