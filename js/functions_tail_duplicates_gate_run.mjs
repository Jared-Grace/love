import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { functions_tail_duplicate_names } from "./functions_tail_duplicate_names.mjs";
import { functions_tail_duplicates_baseline_path } from "./functions_tail_duplicates_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_tail_duplicates_gate_run() {
  "QA gate: no new group of functions may end in the same run of work. Throws so the dispatcher seam exits nonzero.";
  "Its neighbour asks whether two whole functions are the same, which finds a twin";
  "and nothing else, and the repo has none doing real work. Duplication is not";
  "usually whole: the two example runners each ended in the same five lines, and";
  "the two of them were different functions by every other measure the repo had.";
  "A shared ending is the shape a missing helper leaves behind, because the ending";
  "is where a function hands what it made to something general.";
  "What makes this worth a gate rather than a report is what those five lines had";
  "already done: one runner learned to say where it stopped matching and the other";
  "did not, so the same gate reported less depending on which runner ran it. That";
  "is how a shared ending fails - not by being long, but by being improved on one";
  "side.";
  "Measured against what was already here. One group stood when this was written -";
  "the getter over a list and the getter over a text, which are two ideas that end";
  "alike - and a group that is really two ideas is a judgment, so the record is";
  "where that judgment is written down rather than argued again every run.";
  let named = await functions_tail_duplicate_names();
  let path = functions_tail_duplicates_baseline_path();
  let f_name = fn_name("functions_tail_duplicates_baseline_write");
  let hint = text_combine_multiple([
    "these functions now end in the same run of work, which is a helper waiting to be written - give the shared ending its own name and call it from each, or record the group with ",
    f_name,
    " if they are two ideas that merely finish alike",
  ]);
  let name_write = fn_name("functions_tail_duplicates_baseline_write");
  let r = await baseline_names_gate_generic(named, path, hint, name_write);
  return r;
}
