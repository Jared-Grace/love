import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
export function functions_call_pairs_top(rows) {
  arguments_assert(arguments, 1);
  function lambda(a, b) {
    let difference = subtract(b.foldable, a.foldable);
    if (difference) {
      return difference;
    }
    let by_files = subtract(b.files, a.files);
    return by_files;
  }
  rows.sort(lambda);
  let top = rows.slice(0, 25);
  return top;
}
