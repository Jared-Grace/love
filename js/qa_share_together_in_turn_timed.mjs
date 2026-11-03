import { arguments_assert } from "./arguments_assert.mjs";
import { qa_tree_ensure } from "./qa_tree_ensure.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { node_run_lines_whole } from "./node_run_lines_whole.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_share_together_in_turn_timed(index, count) {
  arguments_assert(arguments, 2);
  ("Asks the same share of the gates both ways at the same moment, all at once and one at a time, and says how long each way took.");
  ("Both start together on the same frozen copy, so whatever else the machine is doing falls on both. If asked in turn comes out far cheaper, gates asked together are repeating work that gates asked in turn reuse.");
  ("A share with a red gate ends by complaining, and that is a finished run here rather than a failed one, so the complaint is noted and the time still counts.");
  let folder = await qa_tree_ensure();
  async function timed(name) {
    let started = date_now_milliseconds();
    let complained = false;
    try {
      await node_run_lines_whole(folder, [
        "scripts/ai.mjs",
        name,
        index,
        count,
      ]);
    } catch (e) {
      complained = true;
    }
    let milliseconds = date_milliseconds_since(started);
    let r = {
      name,
      milliseconds,
      complained,
    };
    return r;
  }
  let together = timed(fn_name("qa_gate_tree_shard_run"));
  let in_turn = timed(fn_name("qa_gate_tree_shard_timed_solo"));
  let both = await Promise.all([together, in_turn]);
  return both;
}
