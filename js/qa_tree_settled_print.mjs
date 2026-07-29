import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function qa_tree_settled_print(moved, unsettled) {
  arguments_assert(arguments, 2);
  ("Says what had to be taken across again for the frozen copy to hold whole files,");
  ("and what was still moving after that.");
  ("Nothing is said when nothing moved, which is the ordinary case and the one");
  ("worth keeping quiet. Saying so every time would put a line nobody needs above");
  ("every run, and a line nobody reads is a line that hides the one they should.");
  ("A file still moving at the end is not made into a complaint. It may well be");
  ("whole - it was taken across in a moment and only its clock says it moved since");
  ("- so failing here would trade a rare false complaint for a frequent one. It is");
  ("named instead, so that a gate going red on that very file has its explanation");
  ("standing directly above it.");
  let moved_size = list_size(moved);
  let quiet = equal(moved_size, 0);
  if (quiet) {
    return;
  }
  console.log(
    "\n=== " +
      moved_size +
      " file(s) were being written while the copy was taken, and were taken across again ===",
  );
  for (let p of moved) {
    console.log("  recopied  " + p);
  }
  let unsettled_size = list_size(unsettled);
  let settled = equal(unsettled_size, 0);
  if (settled) {
    return;
  }
  console.log(
    "STILL MOVING  " +
      unsettled_size +
      " file(s) were written again during the repair, so a complaint naming one of these may be about the copy rather than about the code",
  );
  for (let p of unsettled) {
    console.log("  moving  " + p);
  }
}
