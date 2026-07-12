import { mod } from "./mod.mjs";
export function integer_evenness(n) {
  "returns 0 for even and 1 for odd";
  let m = 2;
  let e = mod(n, m);
  return e;
}
