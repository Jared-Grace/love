import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
export function functions_call_pairs_top(rows) {
  arguments_assert(arguments, 1);
  ("The twenty-five rows worth reading, best first.");
  ("Ranked by how many files the pair could actually be collapsed in, not by how many");
  ("hold it. The two differ badly and in the direction that wastes work: a pair whose");
  ("middle name is used again everywhere reads as a top row and folds nowhere, and");
  ("the only way to learn that used to be to write the atom, run the fold, get");
  ("nothing, and delete it again - which was paid twice before this column existed.");
  ("How many files hold it breaks the tie, so two pairs that fold equally often are");
  ("offered in the order of how much of the repo they are actually about.");
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
