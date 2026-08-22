import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { qa_gates_named } from "./qa_gates_named.mjs";
import { qa_gates_unordered_ms } from "./qa_gates_unordered_ms.mjs";
import { qa_gates_ordered_ms } from "./qa_gates_ordered_ms.mjs";
export async function qa_gates_named_unordered_gain(names) {
  arguments_assert(arguments, 1);
  ("What starting a set of gates all at once buys over finishing each before the next, measured back to back on this machine in this minute.");
  ("The question is worth asking because the whole-repo run divides its gates into shares, one process each, and then inside each share starts every one of that share's gates at once. Dividing across processes is real work on real processors. Starting many at once inside one of them is not, unless the gates spend their time waiting on the disk rather than on the processor - and if they do not, the all-at-once ask buys nothing while costing every usable per-gate number, since a gate's clock then measures the crowd it was standing in.");
  ("It is asked three times and not twice, all at once and then one at a time and then all at once again. Two numbers cannot tell a difference between the two ways apart from a difference between the first pass and the second, and the first pass is the one that warms every cache. If the two all-at-once numbers agree, the warming is not the story and the middle number can be read; if they do not, nothing here can be read at all and it says so by showing all three rather than by averaging them into one.");
  ("Reading it does not need the gates to be green. The gate runner underneath reports a red gate rather than throwing, so a set that all complains is timed just as a set that all passes - and this is meant to be usable on the repo as it actually is, which is a repo somebody is always part way through changing.");
  ("The machine is shared, so a neighbour starting something heavy between two of the passes will move a number. That is why the three passes are run one immediately after another and why the answer is handed back as three numbers rather than as a verdict: the shape to look for is two matching outer numbers, and a reader who cannot see one should ask again rather than believe the middle one.");
  let wanted = text_split_comma(names);
  let gates = qa_gates_named(wanted);
  let at_once_first = await qa_gates_unordered_ms(gates);
  let one_at_a_time = await qa_gates_ordered_ms(gates);
  let at_once_again = await qa_gates_unordered_ms(gates);
  let r = {
    gates: gates.length,
    at_once_first,
    one_at_a_time,
    at_once_again,
  };
  return r;
}
