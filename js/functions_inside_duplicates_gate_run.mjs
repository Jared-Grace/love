import { functions_inside_duplicate_names } from "./functions_inside_duplicate_names.mjs";
import { functions_inside_duplicates_baseline_path } from "./functions_inside_duplicates_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_inside_duplicates_gate_run() {
  "QA gate: no new group of functions may share a run of work somewhere inside them. Throws so the dispatcher seam exits nonzero.";
  "Its two neighbours watch the ends - where a function gets hold of what it is about to work on, and where it hands the result away. Between those two ends is everything else, and nothing was watching it. On the day this was written the ends were both clean and the middle held sixty-five groups, which is what a blind spot looks like from the outside: not a small number of small findings, but the largest of the three reports arriving at a repo that believed it had already been read.";
  "The middle is also where a shared run hides longest, because a long function is exactly the one whose middle nobody rereads - and a long function is where a shared run is most likely to sit away from either end.";
  "Measured against what was already here, because a group that is really two ideas passing through the same few lines is a judgment, and the record is where that judgment is written down rather than argued again every run.";
  let named = await functions_inside_duplicate_names();
  let path = functions_inside_duplicates_baseline_path();
  let name_write = fn_name("functions_inside_duplicates_baseline_write");
  let hint = text_combine_multiple([
    "these functions now share a run of work somewhere inside them, which is a helper waiting to be written - give the shared run its own name and call it from each, or record the group with ",
    name_write,
    " if they are separate ideas that merely pass through the same few lines",
  ]);
  let r = await baseline_names_gate_generic(named, path, hint, name_write);
  return r;
}
