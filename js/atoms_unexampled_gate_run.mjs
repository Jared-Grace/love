import { atoms_unexampled } from "./atoms_unexampled.mjs";
import { atoms_unexampled_baseline_path } from "./atoms_unexampled_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { atoms_unexampled_baseline_write } from "./atoms_unexampled_baseline_write.mjs";
export async function atoms_unexampled_gate_run() {
  "QA gate: an atom the instructions tell a Claude to reach for is demonstrated by an example";
  "A row in one of the vocabulary tables is a promise made to everyone working here at once, and until now nothing checked it. Sixteen of the fifty-six atoms named there had never been run by anything, so a Claude following the instructions was as likely to meet a unit nobody had exercised as one the corpus proves every run.";
  "Measured against the baseline rather than against zero, because one of the promises cannot be kept: a verb that publishes a new file into the repo has no hermetic before and after, so it can be documented and never exampled. The baseline is where that lives, and it can only shrink - a name it does not list fails, and a name it lists that is now exampled fails too, so writing an example is always followed by rewriting the file smaller.";
  let unexampled = await atoms_unexampled();
  let path = atoms_unexampled_baseline_path();
  let r = await baseline_names_gate_generic(
    unexampled,
    path,
    "these atoms are documented in the vocabulary tables and no example runs them - write one for each, or take the row out",
    atoms_unexampled_baseline_write.name,
  );
  return r;
}
