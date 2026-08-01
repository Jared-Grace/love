import { equal_not } from "./equal_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_without(list, item) {
  function lambda(other) {
    let eq = equal_not(other, item);
    return eq;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
