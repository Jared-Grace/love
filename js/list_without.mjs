import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function list_without(list, item) {
  function lambda(other) {
    let b = equal(other, item);
    let eq = not(b);
    return eq;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
