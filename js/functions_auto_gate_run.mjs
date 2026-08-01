import { functions_auto_refused } from "./functions_auto_refused.mjs";
import { functions_auto_baseline_path } from "./functions_auto_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_auto_gate_run() {
  "QA gate: the normalize pass must be able to carry every function in the repo through and leave it loadable. Throws so the dispatcher seam exits nonzero.";
  "This is the gate over the tool rather than over the code. Every other gate here asks whether what was written is right; this one asks whether the pass that rewrites what was written can be trusted to run, and the answer had never been asked of more than a handful of names at a time.";
  "The failure it exists for is a quiet one. A step of the pass writes into the tree and finishes cleanly, and the tree is only unreadable once it is written back out - so the pass reports success, the file it just rewrote no longer loads, and the next run blames the file for arriving broken. A step that fills in a missing value did exactly this to every loop that walks an object, and the way it came to light was a file being edited by hand rather than anything watching.";
  "Measured against what was already here, because a function the pass cannot handle may be a function that should be written differently rather than a bug in the pass, and that is a judgment worth writing down once instead of arguing every run.";
  let refused = await functions_auto_refused();
  let path = functions_auto_baseline_path();
  let name_write = fn_name("functions_auto_baseline_write");
  let hint = text_combine_multiple([
    "the normalize pass can no longer carry these through and leave them loadable, which is usually a step of the pass mishandling a shape rather than anything wrong with the function - fix the step, or record the name with ",
    name_write,
    " if this one really is meant to stay outside what the pass can do",
  ]);
  let r = await baseline_names_gate_generic(refused, path, hint, name_write);
  return r;
}
