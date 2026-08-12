import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
export function qa_gate_cost_typical(known) {
  "What one gate costs when nobody has timed that gate - the average of the times there are, or a single unit when there are none";
  "A weight of nought is not a small weight, it is the absence of one, and it breaks the dealing rather than skewing it: every share stays at nought, no share is ever lighter than the first, and all of them land together on the first. Every gate would still be asked, so nothing would go wrong and nothing would say anything - the run would simply be undivided again, which is the thing the dealing exists to stop. So when nothing has been timed, every gate weighs the same one unit, and dealing the heaviest first onto the lightest becomes dealing them round in turn, which is exactly what the dealing replaced and the right thing to fall back to";
  arguments_assert(arguments, 1);
  let typical = 1;
  if (greater_than(known.length, 0)) {
    let added = 0;
    for (let ms of known) {
      added += ms;
    }
    let mean = divide(added, known.length);
    if (greater_than(mean, 0)) {
      typical = mean;
    }
  }
  return typical;
}
