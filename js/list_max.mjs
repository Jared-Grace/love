import { list_reduce } from "./list_reduce.mjs";
export function list_max(list) {
  function lambda(a, b) {
    let v = a > b ? a : b;
    return v;
  }
  let max = list_reduce(list, lambda, -Infinity);
  return max;
}
