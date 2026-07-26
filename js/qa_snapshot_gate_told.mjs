import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { qa_gate_tree_run } from "./qa_gate_tree_run.mjs";
import { command_line_folder } from "./command_line_folder.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_failed_names } from "./qa_gate_failed_names.mjs";
export async function qa_snapshot_gate_told(folder) {
  "Asks the frozen copy its questions and brings back what it said";
  "The run is asked for from inside the copy, so every path it follows to find a function stays inside the copy";
  "A complaint arrives here as a thrown thing carrying everything that was printed, which is why it is caught rather than left to travel - a complaint is the answer being looked for, not a failure to get one";
  "Everything printed comes back alongside the names, because the names alone say which gates to look at and the reader wants to know why - and what was printed inside the copy is not printed out here on its own";
  let command = text_combine_multiple([
    "node scripts/ai.mjs ",
    qa_gate_tree_run.name,
  ]);
  try {
    let ran = await command_line_folder(command, folder);
    let said = property_get(ran, "stdout");
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
