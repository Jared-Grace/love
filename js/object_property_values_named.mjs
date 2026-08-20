import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function object_property_values_named(value, property_name) {
  "Every value held under one property name, however deeply it sits inside an object or a list.";
  "A reading sent back by somebody else's service is a deep tree whose shape is theirs to change, so reaching a value by spelling out the whole path is a promise that breaks quietly. Asking for the name alone survives the path moving.";
  arguments_assert(arguments, 2);
  let found = [];
  let pending = [value];
  while (greater_than(pending.length, 0)) {
    let held = pending.pop();
    if (equal(held, null)) {
      continue;
    }
    if (not_equal(typeof held, "object")) {
      continue;
    }
    if (Array.isArray(held)) {
      for (let item of held) {
        pending.push(item);
      }
      continue;
    }
    for (let name of object_property_names(held)) {
      let inner = held[name];
      if (equal(name, property_name)) {
        found.push(inner);
      }
      pending.push(inner);
    }
  }
  return found;
}
