import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_milestone_next_or_null } from "./app_code_review_milestone_next_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_review_next_word(context) {
  "What the way on from this checkpoint leads to, said as the word its buttons end on: the milestone standing under the same lesson where there is one, and the lesson after otherwise - the same question the way on itself asks, so a button can never promise one and go to the other.";
  arguments_assert(arguments, 1);
  let milestone_next = app_code_review_milestone_next_or_null(context);
  if (null_not_is(milestone_next)) {
    let r = "milestone";
    return r;
  }
  let r2 = "lesson";
  return r2;
}
