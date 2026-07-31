import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { permission_settings_local_unwatched } from "./permission_settings_local_unwatched.mjs";
import { permission_settings_local_baseline_path } from "./permission_settings_local_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function permission_settings_local_gate_run() {
  "QA gate: the per-machine settings file grants nothing new that the shared, generated, gated list has never been told about";
  ("The guard reads both files, so a rule written in the local one is a standing approval exactly as real as a granted rule - and every check the repo has reads the shared file alone. ",
    fn_name("permission_settings_allow_assert"),
    " says outright that it does not read this one. So the whole apparatus of a generated list, a refusal check that runs before a rule can be written, and a ratchet over the grants that fail it, governs one of the two files the decision is actually made from.");
  ("Forty-four rules were sitting here when this was written, twenty-one of them naming a dispatcher function, three naming the promote and deploy commands, and one of those a function whose arguments the safety check says can become a command line. None of them were wrong to want; all of them were invisible.");
  ("Measured against what was already here rather than against zero, because these were written by a human on purpose and stopping the work to empty the file would be the wrong trade. What must not happen is a forty-fifth arriving unseen.");
  ("Throws so the dispatcher seam exits nonzero");
  let unwatched = await permission_settings_local_unwatched();
  let path = permission_settings_local_baseline_path();
  let hint = text_combine_multiple([
    "these per-machine allow rules are not in the record, so a standing approval was written where nothing watches it - move it to the watched list by naming the function to ",
    fn_name("permission_grant_add"),
    ", take it out of the local file, or record it on purpose",
  ]);
  let r = await baseline_names_gate_generic(
    unwatched,
    path,
    hint,
    fn_name("permission_settings_local_baseline_write"),
  );
  return r;
}
