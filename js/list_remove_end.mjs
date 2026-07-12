import { subtract } from "./subtract.mjs";
export function list_remove_end(list, count) {
  let removed = list.slice(-count);
  list.length = Math.max(0, subtract(list.length, count));
  return removed;
}
