import { arguments_assert } from "./arguments_assert.mjs";
export function object_property_values_named(value, property_name) {
  "Every value held under one property name, however deeply it sits inside an object or a list.";
  "A reading sent back by somebody else's service is a deep tree whose shape is theirs to change, so reaching a value by spelling out the whole path is a promise that breaks quietly. Asking for the name alone survives the path moving.";
  arguments_assert(arguments, 2);
  let found = [];
  let pending = [value];
  while (pending.length > 0) {
    let held = pending.pop();
    if (held === null) {
      continue;
    }
    if (typeof held !== "object") {
      continue;
    }
    if (Array.isArray(held)) {
      for (let item of held) {
        pending.push(item);
      }
      continue;
    }
    for (let name of Object.keys(held)) {
      let inner = held[name];
      if (name === property_name) {
        found.push(inner);
      }
      pending.push(inner);
    }
  }
  return found;
}
