import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { divide } from "./divide.mjs";
export function qa_gate_cost_typical(known, ms) {
  arguments_assert(arguments, 2);
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
  let r = {
    typical,
    ms,
  };
  return r;
}
