import { greater_than } from "./greater_than.mjs";
export function positive_is(i) {
  let p = greater_than(i, 0);
  return p;
}
