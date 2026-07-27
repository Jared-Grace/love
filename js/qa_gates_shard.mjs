import { list_filter_index } from "./list_filter_index.mjs";
import { mod } from "./mod.mjs";
import { equal } from "./equal.mjs";
export function qa_gates_shard(gates, index, count) {
  "The share of the gates belonging to one of several runs asked side by side";
  "Every count-th gate is taken rather than one solid block, because the slow gates sit near each other in the list and a block would hand one run most of them while the others finished early";
  function lambda(gate, position) {
    let mine = mod(position, count);
    let b = equal(mine, index);
    return b;
  }
  let kept = list_filter_index(gates, lambda);
  return kept;
}
