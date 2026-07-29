import { fn_name } from "./fn_name.mjs";
import { text_combine } from "./text_combine.mjs";
import { node_run } from "./node_run.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_failed_names } from "./qa_gate_failed_names.mjs";
export async function qa_snapshot_shard_told(folder, index, count) {
  "Asks the frozen copy one share of its questions and brings back what it said";
  "The run is asked for from inside the copy, so every path it follows to find a function stays inside the copy";
  "A complaint arrives here as a thrown thing carrying everything that was printed, which is why it is caught rather than left to travel - a complaint is the answer being looked for, not a failure to get one";
  "The run is asked for as a list of words rather than as a line of text, so nothing carried in a word can turn into a second word - and because the program is spelled inside the runner rather than passed to it, asking this by name cannot become a way to run something else";
  let index_word = text_combine("", index);
  let count_word = text_combine("", count);
  let words = [
    "scripts/ai.mjs",
    fn_name("qa_gate_tree_shard_run"),
    index_word,
    count_word,
  ];
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
