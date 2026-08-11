import { functions_prose_sequence_names } from "./functions_prose_sequence_names.mjs";
import { functions_prose_sequence_baseline_path } from "./functions_prose_sequence_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_prose_sequence_gate_run() {
  "QA gate: what offends now must be what the baseline already held.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  let offenders = await functions_prose_sequence_names();
  let path = functions_prose_sequence_baseline_path();
  let name_write = fn_name("functions_prose_sequence_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "these functions explain themselves in a shape the reader that gathers explanations cannot see, so nothing they say can be found by meaning - write each explanation as its own sentence standing alone",
    name_write,
  );
  return r;
}
