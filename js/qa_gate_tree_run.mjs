export async function qa_gate_tree_run() {
  "Asks only the gates the files alone can answer";
  "This is what runs inside a frozen copy, where the three that ask about the machine and about where the folder sits have no answer worth having";
  let gates = qa_gates_tree();
  let r = await qa_gates_run(gates);
  return r;
}
