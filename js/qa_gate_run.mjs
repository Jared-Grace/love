import { qa_gate_failed_sections } from "./qa_gate_failed_sections.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_get } from "./list_get.mjs";
import { qa_gate_blame_print } from "./qa_gate_blame_print.mjs";
import { qa_tree_ensure } from "./qa_tree_ensure.mjs";
import { qa_snapshot_gate_told } from "./qa_snapshot_gate_told.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gates_machine } from "./qa_gates_machine.mjs";
import { qa_gates_told } from "./qa_gates_told.mjs";
import { list_concat } from "./list_concat.mjs";
import { greater_than } from "./greater_than.mjs";
import { qa_gates_read } from "./qa_gates_read.mjs";
export async function qa_gate_run() {
  "The repo-wide correctness gate (alias `q`), asking every gate there is";
  "It asks about the working folder as it stands, work nobody has committed included, which is what makes it the thing to run before committing";
  "A clean answer here is meant to mean the code is sound - so every question the files alone can answer is put to a frozen copy of the folder rather than to the folder itself. Asked of the living folder, neither answer could be checked: a complaint might be nothing but a neighbour saving a file, and a clean answer might be about a file broken a moment after it was read. Asked of a copy nobody can touch, both answers can be had again and come out the same";
  "The three questions about this machine and about where the folder sits are asked here, where the answer is, and their names are added to whatever the copy complained about so one complaint covers both halves";
  "The three questions about this machine are put while the copy is being asked its own, because neither waits on the other and the slowest of the three took as long as a third of the whole run while nothing else was happening. What each half prints still arrives whole and after the other, since the asking here holds back everything it would print until it is finished";
  let folder = await qa_tree_ensure();
  let machine = qa_gates_machine();
  async function copy_asked() {
    let asked = await qa_snapshot_gate_told(folder);
    return asked;
  }
  async function machine_asked() {
    let asked = await qa_gates_told(machine);
    return asked;
  }
  let halves = await invoke_multiple_unordered_async([
    copy_asked,
    machine_asked,
  ]);
  let told = list_get(halves, 0);
  let here = list_get(halves, 1);
  let printed = property_get(told, "printed");
  console.log(printed);
  ("Who last touched the things the copy complained about is asked out here rather than in there. The copy is made without the history on purpose, so the question has no answer inside it - and the answer it gives instead is an empty one, which reads exactly like nobody being at fault");
  ("Everything a gate printed is looked at, not only the sentence it threw. A gate that finds eight faults prints the eight and throws a count, so the sentence on its own names nobody and the answer comes back empty - which reads as nobody being at fault, the very thing this is here to stop");
  let sections = qa_gate_failed_sections(printed);
  let size = list_size(sections);
  let any = greater_than(size, 0);
  if (any) {
    let known = await functions_names();
    for (let section of sections) {
      let name = property_get(section, "name");
      let said = property_get(section, "said");
      console.log("\n=== who last touched what " + name + " named ===");
      await qa_gate_blame_print(said, known);
    }
  }
  let failed_copy = property_get(told, "failed");
  let failed_here = property_get(here, "failed");
  let failed = list_concat(failed_copy, failed_here);
  if (greater_than(failed.length, 0)) {
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
  console.log("\nall gates passed");
  ("How long each gate took is deliberately NOT returned here, and the reason is worth writing down because the obvious fix is wrong. The half asked of this machine has its timings in hand, but the half asked of the copy is several separate processes whose only channel back is the text they printed - so returning what is available would hand back three gates' numbers in a shape that reads like all of them. A number that looks complete and is not is worse than no number. Making it whole means giving the shares a way to answer in something other than printed text; until then the whole-run timings live in the printed block, and one gate at a time is asked for by name instead");
  let gates = qa_gates_read();
  let r = {
    gates: gates.length,
    failed: 0,
    frozen: folder,
  };
  return r;
}
