import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
export function qa_gate_cost_typical(known) {
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
