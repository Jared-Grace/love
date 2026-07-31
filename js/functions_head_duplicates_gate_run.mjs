import { functions_head_duplicate_names } from "./functions_head_duplicate_names.mjs";
import { functions_head_duplicates_baseline_path } from "./functions_head_duplicates_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_head_duplicates_gate_run() {
  "QA gate: no new group of functions may begin with the same run of work. Throws so the dispatcher seam exits nonzero.";
  "The gate over endings watches where a function hands its result away. This one watches the other end, where it gets hold of what it is about to work on - and that end drifts differently. Two bible screens opened with the same five lines clearing the page and building the reading column, and each carried its own copy of the warning about which element may be padded. The copies had already stopped saying the same thing: one named why the context root survives navigation and the other only said not to touch it.";
  "That is the shape of the failure worth a gate. A shared opening is a warning written twice, and the second copy is the one nobody updates.";
  "Measured against what was already here, because a group that is really two ideas beginning alike is a judgment, and the record is where that judgment is written down rather than argued again every run.";
  let named = await functions_head_duplicate_names();
  let path = functions_head_duplicates_baseline_path();
  let name_write = fn_name("functions_head_duplicates_baseline_write");
  let hint = text_combine_multiple([
    "these functions now begin with the same run of work, which is a helper waiting to be written - give the shared opening its own name and call it from each, or record the group with ",
    name_write,
    " if they are two ideas that merely start alike",
  ]);
  let r = await baseline_names_gate_generic(named, path, hint, name_write);
  return r;
}
