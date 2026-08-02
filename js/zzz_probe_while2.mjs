import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export function zzz_probe_while2(list) {
  "a throwaway asking whether a while header holding a call inside another call is still lifted out";
  let seen = [];
  while (less_than(seen.length, subtract(list.length, 1))) {
    list.pop();
    seen.push(seen.length);
  }
  return seen;
}
