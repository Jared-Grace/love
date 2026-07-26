import { daemons_gate_run } from "./daemons_gate_run.mjs";
import { guard_gate_run } from "./guard_gate_run.mjs";
export function qa_gates_machine() {
  "The gates whose answer is about this machine and this folder rather than about the code";
  "One asks the operating system whether the background services are alive, which no copy of the files can answer";
  "The other feeds commands to the real hook and expects the ones writing into this project's own scratch folder to be waved through - and that folder's name is built from where the project sits, so the same commands are rightly not waved through anywhere else";
  "Naming them is what lets a verdict be kept against a commit: everything else is a question the files alone answer, so the same commit gives the same answer tomorrow, while these two can change without a single line changing";
  let gates = [daemons_gate_run, guard_gate_run];
  return gates;
}
