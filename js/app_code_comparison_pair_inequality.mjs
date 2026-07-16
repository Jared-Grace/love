import { app_code_comparison_pair_equality } from "./app_code_comparison_pair_equality.mjs";
import { not } from "./not.mjs";
export function app_code_comparison_pair_inequality() {
  "left/right operands for a NOT-EQUAL (!==) lesson: a !== b is true exactly when a === b is false, so reuse the equality pair with the wanted truth flipped";
  let equality = app_code_comparison_pair_equality();
  function pair(want_true) {
    let want_equal = not(want_true);
    let coordinates = equality(want_equal);
    return coordinates;
  }
  return pair;
}
