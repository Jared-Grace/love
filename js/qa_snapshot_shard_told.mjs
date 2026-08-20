import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
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
  "How long this share took is answered along with what it said, and it is timed from out here rather than from inside. What is wanted is the wait a share puts the whole run through, which includes starting the process and reading back everything it printed, and neither of those can be seen from inside it";
  "It is timed on the complaining path too. A share that goes red is a share that was slow for some reason, and leaving its time out would drop exactly the shares somebody is trying to account for";
  "Whether the share managed to answer at all is said out loud alongside what it said, because two very different things arrive at the one catch below and until now they came back identical. One is a gate complaining, which is the answer being looked for. The other is this process stopping for a reason no gate ever mentioned - a neighbour part way through saving a file, a module that will not load, a machine with no room left - and there is then no complaint to read names out of, so the names come back empty and the share reads as red about nobody";
  "Read as a verdict, that shape is the worst thing the record can hold. It is written down under the commit, the commit then looks judged and is never judged again, and every later reader asking what is red is told nothing is. Saying here that nothing was answered is what lets the filing decline it, and the cost of declining is only that somebody asks again";
  let index_word = text_combine("", index);
  let count_word = text_combine("", count);
  let f_name = fn_name("qa_gate_tree_shard_run");
  let words = ["scripts/ai.mjs", f_name, index_word, count_word];
  let began = date_now_milliseconds();
  try {
    let said = await node_run(folder, words);
    let r = {
      green: true,
      failed: [],
      printed: said,
      share: index,
      milliseconds: date_milliseconds_since(began),
    };
    return r;
  } catch (complaint) {
    let printed = property_get(complaint, "message");
    let failed = qa_gate_failed_names(printed);
    let r2 = {
      green: false,
      failed,
      printed,
      share: index,
      milliseconds: date_milliseconds_since(began),
    };
    return r2;
  }
}
