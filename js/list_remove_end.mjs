import { math_max } from "./math_max.mjs";
import { subtract } from "./subtract.mjs";
export function list_remove_end(list, count) {
  let removed = list.slice(-count);
  list.length = math_max(0, subtract(list.length, count));
  return removed;
}
