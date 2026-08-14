import { arguments_assert } from "./arguments_assert.mjs";
export function qa_gate_counted_depth() {
  "How many gates deep the search for a count will follow one gate handing its whole answer to another.";
  "Three is what the longest chain in the repo actually is today - a gate, the shared way of running a ratchet, and the one that ratchet stands on - with one over for a chain somebody lengthens tomorrow. Following further costs a parse per step and would be reading generic machinery that has stopped being about gates at all.";
  "Running out is answered as uncounted rather than as counted, which asks somebody to look instead of promising them a reading that was never found.";
  arguments_assert(arguments, 0);
  let depth = 4;
  return depth;
}
