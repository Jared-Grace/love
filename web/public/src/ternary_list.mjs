import { each_pair } from "../../../love/public/src/each_pair.mjs";
export function ternary_list(conditions, on_matches, on_else) {
  let previous = on_else;
  function lambda(m, c) {}
  each_pair(conditions, on_matches, lambda);
}
