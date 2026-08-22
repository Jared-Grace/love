import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
export function list_subsequence_is(inner, outer) {
  "Whether the first list runs right through the second in order: every one of its items met in the second, each one after the one before it, with anything at all allowed to stand in between.";
  "IT IS WHAT TELLS AN ADDITION APART FROM A REWRITE. Two readings of the same list of statements, before an edit and after it, are the same length only by accident - what says the edit only put something in is that everything that was there before is still there, still in that order. Comparing the two lengths says nothing, and comparing them item by item says everything after the insertion differs.";
  "ANYTHING MAY STAND BETWEEN TWO MATCHED ITEMS, and nothing may stand between them out of order. That is the whole of the rule, and it is why one walk of the outer list answers it: the inner list is only ever waiting for its next item, and an item that never comes cannot be made to come by looking again.";
  arguments_assert(arguments, 2);
  let index = 0;
  let wanted = list_size(inner);
  for (let item of outer) {
    let done = equal(index, wanted);
    if (done) {
      break;
    }
    let next = list_get(inner, index);
    let same = equal(item, next);
    if (same) {
      index = index + 1;
    }
  }
  let all_met = equal(index, wanted);
  return all_met;
}
