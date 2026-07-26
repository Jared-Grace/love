import { qa_gates_read } from "./qa_gates_read.mjs";
import { qa_gates_run } from "./qa_gates_run.mjs";
export async function qa_gate_run() {
  "The repo-wide correctness gate (alias `q`), asking every gate there is";
  "It reads the working tree as it stands, edits nobody has committed included, which is what makes it the thing to run before committing";
  let gates = qa_gates_read();
  let r = await qa_gates_run(gates);
  return r;
}
