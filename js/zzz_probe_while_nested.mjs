import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export function zzz_probe_while_nested(list) {
  "a throwaway asking whether a while header holding a call inside another call is hoisted the same way a for header is";
  let seen = [];
  let b = subtract(list.length, 1);
  while (less_than(seen.length, b)) {
    list.pop();
    seen.push(seen.length);
  }
  return seen;
}
