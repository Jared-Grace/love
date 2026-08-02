import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_locals_unread_baseline_path } from "./functions_locals_unread_baseline_path.mjs";
import { functions_locals_unread_names } from "./functions_locals_unread_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_locals_unread_gate_run() {
  "QA gate: no new name may be bound and never read. Throws so the dispatcher seam exits nonzero.";
  "Its neighbour watches the same thing one step out, at the seam: a parameter nothing reads makes every call site look as though handing that value over does something. This watches inside, where the same untruth is written by the function about itself - a step is run, its answer is given a name, and the name is never asked for.";
  "The one that prompted it dropped a whole publish. A deploy bound what the sending answered to a name nothing read, so the function handed back the answer of the step before it, and thirteen refused deploys in one afternoon each looked from the outside exactly like a clean one.";
  "The repair already existed and nothing was calling it. A transform that turns a binding nobody reads back into the plain step it was written from has been in this repo the whole time, reachable only by somebody who already knew which function needed it - which is precisely what could not be known without this sweep.";
  "Measured against what was already here, because most of these are honest. Building a page names each piece as it is made and lets the making do the work, and a step kept only for what it does along the way is fine. Two hundred and thirty five names stood on the day this was written, and arguing each one again every run is what stops a gate being kept.";
  let names = await functions_locals_unread_names();
  let path = functions_locals_unread_baseline_path();
  let name_write = fn_name("functions_locals_unread_baseline_write");
  let hint = text_combine_multiple([
    "these names are bound and never read - read the answer back into the code where it was meant to go, or take the binding off and leave the step doing what it does, or record it with ",
    name_write,
    " if the binding is only there to name a step as it passes",
  ]);
  let r = await baseline_names_gate_generic(names, path, hint, name_write);
  return r;
}
