import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
export function qa_gate_cost_typical(known) {
  "What one gate costs when nobody has timed that gate - the average of the times there are, or a single unit when there are none";
  "A single unit rather than nought, because nought is not a small weight but the absence of one. Every share would stay at nought, none would ever be lighter than the first, and the whole run would land on the first share - undivided again, which is the thing the dealing exists to stop. Weighing them all the same instead turns dealing-heaviest-onto-lightest into dealing them round in turn, which is the right thing to fall back to.";
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
