import { permission_reachable_gate_run } from "./permission_reachable_gate_run.mjs";
import { daemons_gate_run } from "./daemons_gate_run.mjs";
import { guard_gate_run } from "./guard_gate_run.mjs";
export function qa_gates_machine() {
  "The gates whose answer is about this machine and this folder rather than about the code";
  "One asks the operating system whether the background services are alive, which no copy of the files can answer";
  "The other two put commands to the real hook and read its answer, and the hook builds this project's scratch folder name out of where the project sits - so a rule naming that folder is rightly not honoured from anywhere else, and both were measured failing on a frozen copy for exactly that reason and no other";
  "Naming them is what lets a verdict be kept against a commit: everything else is a question the files alone answer, so the same commit gives the same answer tomorrow, while these three can change without a single line changing";
  let gates = [daemons_gate_run, guard_gate_run, permission_reachable_gate_run];
  return gates;
}
