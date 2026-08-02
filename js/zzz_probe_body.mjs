import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { greater_than } from "./greater_than.mjs";
export function zzz_probe_body(list) {
  "a throwaway asking whether a nested call inside a loop body is still lifted out";
  let seen = [];
  for (let one of list) {
    let b = math_min(one, 9);
    let m = math_max(0, b);
    seen.push(m);
  }
  while (greater_than(seen.length, 9)) {
    seen.pop();
  }
  return seen;
}
