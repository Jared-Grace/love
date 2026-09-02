import { arguments_assert } from "./arguments_assert.mjs";
import { functions_gate_walk_escapes_names } from "./functions_gate_walk_escapes_names.mjs";
import { functions_gate_walk_escapes_baseline_path } from "./functions_gate_walk_escapes_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function functions_gate_walk_escapes_gate_run() {
  "Gate: no gate newly waits on a call uncaught inside a loop it is gathering in.";
  "Nothing goes red when this happens, and that is what makes it worth a gate of its own. The walk still runs, the gate still throws, and what it throws is the callee's complaint about one item - so it reads as a gate doing its job on the one thing wrong, while every item after that one went unasked. The prose beside such a walk almost always promises the opposite, because the promise is what the loop was written to keep.";
  "It is a gate this reading is asked about and never an ordinary function, though the same shape stands in two hundred and twenty seven of those. A sweep that stops at a file it cannot read is right to; a gate that stops at an item that refuses names nobody, and a gate naming nobody holds every app in the repo out of a deployment. The cost is what makes the rule, so the rule is drawn where the cost is.";
  "Measured against what the repo already carried rather than against zero, because the four standing here want four different repairs and one of them may turn out to be right as it is. The record only shrinks, so a gate taught to catch can never quietly go back.";
  arguments_assert(arguments, 0);
  let offenders = await functions_gate_walk_escapes_names();
  let path = functions_gate_walk_escapes_baseline_path();
  let name_write = fn_name("functions_gate_walk_escapes_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "these gates wait on a call uncaught inside a loop they are gathering in, so the first item that refuses ends the walk and the gate throws the callee's complaint instead of its own list of offenders - hand the call to a catcher and collect the refusal as an offender beside the item it came from",
    name_write,
  );
  return r;
}
