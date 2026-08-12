import { storage_rules_gate_run } from "./storage_rules_gate_run.mjs";
import { cors_gate_run } from "./cors_gate_run.mjs";
import { functions_lift_captured_locals_gate_run } from "./functions_lift_captured_locals_gate_run.mjs";
import { memory_index_size_gate_run } from "./memory_index_size_gate_run.mjs";
import { memory_symbol_gate_run } from "./memory_symbol_gate_run.mjs";
import { memory_fn_reference_gate_run } from "./memory_fn_reference_gate_run.mjs";
import { memory_fn_reference_tokens_gate_run } from "./memory_fn_reference_tokens_gate_run.mjs";
import { memory_link_gate_run } from "./memory_link_gate_run.mjs";
import { memory_link_verdict_gate_run } from "./memory_link_verdict_gate_run.mjs";
import { memory_frontmatter_gate_run } from "./memory_frontmatter_gate_run.mjs";
import { memory_integrity_gate_run } from "./memory_integrity_gate_run.mjs";
import { memory_pointer_gate_run } from "./memory_pointer_gate_run.mjs";
import { memory_hook_gate_run } from "./memory_hook_gate_run.mjs";
import { permission_reachable_gate_run } from "./permission_reachable_gate_run.mjs";
import { daemons_gate_run } from "./daemons_gate_run.mjs";
import { guard_gate_run } from "./guard_gate_run.mjs";
export function qa_gates_machine() {
  "The gates whose answer is about this machine and this folder rather than about the code";
  "One asks the operating system whether the background services are alive, which no copy of the files can answer";
  "Two put commands to the real hook and read its answer, and the hook builds this project's scratch folder name out of where the project sits - so a rule naming that folder is rightly not honoured from anywhere else, and both were measured failing on a frozen copy for exactly that reason and no other";
  "One asks the history rather than the disk - which moves were made and what each one dropped - and the frozen copy is made without the history on purpose, so that gate could never pass in there. It failed on every single run with git saying the folder was not a repository, was believed, and sent the whole run into asking the red ones again; a permanent red reads exactly like a real one, and the cost of it was a phase of the run rather than a wrong answer";
  "The rest read the notes we keep, and those live somewhere else on this machine entirely - the path to them is worked out from a folder outside this repo, so a copy of the repo does not contain them and cannot";
  "Naming them is what lets a verdict be kept against a commit: everything else is a question the files alone answer, so the same commit gives the same answer tomorrow, while these can change without a single line changing";
  "The notes were in the other list until now, which was a lie in the one direction that matters. Being in that list meant being asked inside the frozen copy, and being asked there meant the answer was kept against a commit of this repo - but the folder they actually read was the living one outside, so a verdict earned when the notes were sound could be handed back long after they had stopped being, and handed back as though the files had been looked at. A wrongly red gate wastes a few minutes; a wrongly green one is believed";
  "Being asked out here instead means the answer is never kept, which is the honest shape: it is not a fact about any commit of this repo, so no commit should be able to vouch for it. The whole-folder gate asks both halves, so nothing has stopped being checked - only stopped being remembered";
  "Two of them ask a machine that is not this one at all - the file store, over the network - and they belong here for the same reason as the rest: no copy of these files holds the answer, and the answer can change while not a line of them does. Both compare something kept here against what the store is really doing, which is the one fault every gate that reads code will call sound, correctly, while a page stays empty";
  let gates = [
    cors_gate_run,
    storage_rules_gate_run,
    daemons_gate_run,
    guard_gate_run,
    permission_reachable_gate_run,
    functions_lift_captured_locals_gate_run,
    memory_hook_gate_run,
    memory_pointer_gate_run,
    memory_integrity_gate_run,
    memory_frontmatter_gate_run,
    memory_link_verdict_gate_run,
    memory_link_gate_run,
    memory_fn_reference_tokens_gate_run,
    memory_fn_reference_gate_run,
    memory_symbol_gate_run,
    memory_index_size_gate_run,
  ];
  return gates;
}
