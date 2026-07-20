import { arguments_assert } from "./arguments_assert.mjs";
import { list_take } from "./list_take.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { add } from "./add.mjs";
export function js_fold_body_splice(statements, start, k, replacement) {
  // Brick 4b: replace the matched block [start, start+k) in a statement list with the single fold
  // call statement — the block collapses to one call at the block's position. Statements before and
  // after are untouched (contiguous match, so nothing moves). Returns the new statement list.
  arguments_assert(arguments, 4);
  let before = list_take(statements, start);
  let after_index = add(start, k);
  let after = list_skip(statements, after_index);
  let middle = [replacement];
  let result = list_concat_multiple([before, middle, after]);
  return result;
}
