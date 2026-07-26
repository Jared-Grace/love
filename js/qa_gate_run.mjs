import { qa_gates_read } from "./qa_gates_read.mjs";
import { qa_gates_run } from "./qa_gates_run.mjs";
export async function qa_gate_run() {
  "The repo-wide correctness gate (alias `q`), asking every gate there is";
  "It asks about the working folder as it stands, work nobody has committed included, which is what makes it the thing to run before committing";
  "A clean answer here is meant to mean the code is sound - so every question the files alone can answer is put to a frozen copy of the folder rather than to the folder itself. Asked of the living folder, neither answer could be checked: a complaint might be nothing but a neighbour saving a file, and a clean answer might be about a file broken a moment after it was read. Asked of a copy nobody can touch, both answers can be had again and come out the same";
  "The three questions about this machine and about where the folder sits are asked here, where the answer is, and their names are added to whatever the copy complained about so one complaint covers both halves";
  let folder = await qa_tree_ensure();
  let told = await qa_snapshot_gate_told(folder);
  let printed = property_get(told, "printed");
  console.log(printed);
  let machine = qa_gates_machine();
  let here = await qa_gates_told(machine);
  let failed_copy = property_get(told, "failed");
  let failed_here = property_get(here, "failed");
  let failed = list_combine(failed_copy, failed_here);
  if (greater_than(failed.length, 0)) {
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
  console.log("\nall gates passed");
  let gates = qa_gates_read();
  let r = {
    gates: gates.length,
    failed: 0,
    frozen: folder,
  };
  return r;
}
