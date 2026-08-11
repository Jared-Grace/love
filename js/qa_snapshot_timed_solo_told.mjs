import { fn_name } from "./fn_name.mjs";
import { node_run } from "./node_run.mjs";
import { qa_tree_ensure } from "./qa_tree_ensure.mjs";
export async function qa_snapshot_timed_solo_told() {
  "Freezes the folder, times every gate inside the copy one at a time, and brings back what it said.";
  "This is the one to run when the question is which gate to make faster. Its sibling times the folder as it stands, which is a different repo to read: the copy lives in memory, nobody may write to it, and so a name's file is found once instead of once per asking. The gap that opens between the two is not the same size for every gate, so a ranking taken here and a ranking taken there can disagree about the order and not only about the numbers.";
  "The timing is asked for from inside the copy rather than fetched out of it, so every path it follows to find a function stays inside the copy.";
  "The run is asked for as a list of words rather than as a line of text, so nothing carried in a word can turn into a second word - and because the program is spelled inside the runner rather than passed to it, asking this by name cannot become a way to run something else.";
  "Nothing is caught here. A gate that complains is caught by the timing itself and written down as a gate that took that long and said that - so anything that reaches this far is the run failing rather than a gate failing, and it should be seen.";
  let folder = await qa_tree_ensure();
  let f_name = fn_name("qa_gate_tree_timed_solo");
  let words = ["scripts/ai.mjs", f_name];
  let said = await node_run(folder, words);
  console.log(said);
  let r = {
    folder,
    said,
  };
  return r;
}
