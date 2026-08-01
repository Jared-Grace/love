import { greater_than } from "./greater_than.mjs";
import { list_reduce } from "./list_reduce.mjs";
export function list_max(list) {
  function lambda(a, b) {
    let v = greater_than(a, b) ? a : b;
    return v;
  }
  let max = list_reduce(list, lambda, -Infinity);
  return max;
}
