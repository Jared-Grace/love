import { integer_from_base_try } from "./integer_from_base_try.mjs";
import { qa_gates_tree } from "./qa_gates_tree.mjs";
import { qa_gates_shard } from "./qa_gates_shard.mjs";
import { qa_gates_timed_solo_generic } from "./qa_gates_timed_solo_generic.mjs";
export async function qa_gate_tree_shard_timed_solo(index_given, count_given) {
  "Asks one share of the gates one at a time rather than all at once, and says how long each took.";
  "Set beside the same share asked the ordinary way, this tells whether gates asked together repeat work that gates asked in turn would reuse. It has to be started with the frozen copy as its folder, or it measures the folder everybody is editing.";
  let index = integer_from_base_try(index_given, 10);
  let count = integer_from_base_try(count_given, 10);
  let gates = qa_gates_tree();
  let mine = await qa_gates_shard(gates, index, count);
  let report = await qa_gates_timed_solo_generic(mine);
  return report;
}
