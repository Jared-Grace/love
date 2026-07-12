import { each_pair_reverse } from "./each_pair_reverse.mjs";
import { ternary } from "./ternary.mjs";
export function ternary_list(conditions, on_matches, on_else) {
  let result = on_else;
  function lambda(c, m) {
    result = ternary(c, m, result);
  }
  each_pair_reverse(conditions, on_matches, lambda);
  return result;
}
