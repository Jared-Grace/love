import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { object_values } from "./object_values.mjs";
export function object_freeze_deep(value) {
  "Makes a value and everything reachable inside it refuse every change, and hands back the same value.";
  "For something held and handed to many readers in turn: a reader that changes what it was given would otherwise change it for every reader after, and for whatever later writes the held copy out. Frozen, that reader throws at the line doing it, in a module, rather than passing the change on in silence.";
  "Walked with a list rather than by calling itself, because a deep record would otherwise run out of stack.";
  let pending = [value];
  while (greater_than(pending.length, 0)) {
    let item = pending.pop();
    if (
      equal(item, null) ||
      not_equal(typeof item, "object") ||
      Object.isFrozen(item)
    ) {
      continue;
    }
    Object.freeze(item);
    for (let inner of object_values(item)) {
      pending.push(inner);
    }
  }
  return value;
}
