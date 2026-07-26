import { node_run } from "./node_run.mjs";
import { qa_gate_tree_run } from "./qa_gate_tree_run.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_failed_names } from "./qa_gate_failed_names.mjs";
export async function qa_snapshot_gate_told(folder) {
  "Asks the frozen copy its questions and brings back what it said";
  "The run is asked for from inside the copy, so every path it follows to find a function stays inside the copy";
  "A complaint arrives here as a thrown thing carrying everything that was printed, which is why it is caught rather than left to travel - a complaint is the answer being looked for, not a failure to get one";
  "Everything printed comes back alongside the names, because the names alone say which gates to look at and the reader wants to know why - and what was printed inside the copy is not printed out here on its own";
  "The run is asked for as a list of words rather than as a line of text, so nothing carried in a word can turn into a second word - and because the program is spelled inside the runner rather than passed to it, asking this by name cannot become a way to run something else";
  let words = ["scripts/ai.mjs", qa_gate_tree_run.name];
  try {
    let said = await node_run(folder, words);
    let r = {
      green: true,
      failed: [],
      printed: said,
    };
    return r;
  } catch (complaint) {
    let printed = property_get(complaint, "message");
    let failed = qa_gate_failed_names(printed);
    let r2 = {
      green: false,
      failed,
      printed,
    };
    return r2;
  }
}
