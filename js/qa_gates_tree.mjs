import { qa_gates_read } from "./qa_gates_read.mjs";
import { qa_gates_machine } from "./qa_gates_machine.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function qa_gates_tree() {
  "Every gate that asks a question the files alone can answer";
  "Same files, same answer - which is what makes a verdict worth keeping against a commit instead of being asked again by each of us";
  let gates = qa_gates_read();
  let machine = qa_gates_machine();
  function lambda(gate) {
    let elsewhere = list_includes_not(machine, gate);
    return elsewhere;
  }
  let kept = list_filter(gates, lambda);
  return kept;
}
