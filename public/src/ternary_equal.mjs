import { ternary } from "../../../love/public/src/ternary.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function ternary_equal(item, from, to) {
  let eq = equal(item, from);
  let result = ternary(eq, item, to);
  return result;
}
