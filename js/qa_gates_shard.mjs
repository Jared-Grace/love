import { qa_gate_timings_read } from "./qa_gate_timings_read.mjs";
import { qa_gates_dealt } from "./qa_gates_dealt.mjs";
import { list_get } from "./list_get.mjs";
export async function qa_gates_shard(gates, index, count) {
  "The share of the gates belonging to one of several runs asked side by side";
  "It used to take every count-th gate, which is even in the number of gates and not in the work. What a gate costs has nothing to do with where it sits in the list, and the wait is the slowest share - so one share carried seven times the work of another and most of them finished early and waited";
  "Now the shares are made by how long each gate was last measured to take, and this only picks its own out of them. Which gates end up together is therefore the same question for every run, answered the same way from the same file, so no run has to be told what any other run took";
  let costs = await qa_gate_timings_read();
  let shares = qa_gates_dealt(gates, costs, count);
  let mine = list_get(shares, index);
  return mine;
}
