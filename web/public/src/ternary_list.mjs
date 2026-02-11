import { ternary } from "../../../love/public/src/ternary.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
export function ternary_list(conditions, on_matches, on_else) {
  let previous = on_else;
  function lambda(m, c) {
    let result_b = ternary(m, c, previous);
  }
  each_pair(conditions, on_matches, lambda);
}
