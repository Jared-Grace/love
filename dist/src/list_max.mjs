import { reduce } from "../../../love/public/src/reduce.mjs";
export function list_max(list) {
  function lambda(a, b) {
    let v = a > b ? a : b;
    return v;
  }
  const max = list.reduce(lambda, -Infinity);
  return max;
}
