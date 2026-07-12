import { ternary } from "./ternary.mjs";
import { equal } from "./equal.mjs";
export function change_if_equal(item, from, to) {
  let eq = equal(item, from);
  let result = ternary(eq, to, item);
  return result;
}
