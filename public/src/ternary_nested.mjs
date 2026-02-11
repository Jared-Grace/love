import { ternary } from "../../../love/public/src/ternary.mjs";
export function ternary_nested(condition_a, on_a, condition_b, on_b, on_false) {
  let result = ternary(condition_a, on_a, null);
  return result;
}
