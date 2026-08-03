import { qa_gates_named } from "./qa_gates_named.mjs";
import { list_single } from "./list_single.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
export async function qa_gate_named_result(name) {
  "Runs the one gate answering to the name given and reports how it went, as a record rather than as a throw";
  "The verdict a gate reaches is already worked out by its neighbour, which takes the gate itself. A name is what a command line has, so this is the step from one to the other - and it is the only step missing between asking a gate a question from a terminal and getting an answer that cannot be misread.";
  "Reading a gate off the dispatcher seam is where the misreading happens. A red gate throws, which prints a complaint and a stack, and the complaint is long enough that the reach for a pipe is automatic - at which point the exit code belongs to the pipe rather than to the gate and is zero whatever happened. Measured 2026-08-03: a run of the fold gate came back reported as finished cleanly while its output held a thrown complaint about a hand-written body. What comes back here is short, so nothing has to be trimmed away.";
  "An empty complaint is the whole of green. There is no separate answer to read, because a gate that had nothing to say is a gate that passed.";
  "Whatever a name is spelled as, nothing outside the gate list can be reached through it - the picking is done from the gates there are, and an unknown name is refused by name.";
  let gates = qa_gates_named([name]);
  let gate = list_single(gates);
  let result = await qa_gate_result(gate);
  return result;
}
