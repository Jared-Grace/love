import { greater_than_equal } from "./greater_than_equal.mjs";
export function at_least_1(n) {
  let r = greater_than_equal(n, 1);
  return r;
}
