import { log } from "./log.mjs";
import { equal } from "./equal.mjs";
export function equal_by(a, b, lambda$item) {
  const left = lambda$item(a);
  const right = lambda$item(b);
  log(message);
  let eq = equal(left, right);
  return eq;
}
