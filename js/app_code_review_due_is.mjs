import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_review_due_is(number) {
  arguments_assert(arguments, 1);
  ("Whether a review comes after this lesson.");
  ("Every place that asks reaches for how far back the review would look and then");
  ("only checks that there is one at all - the home page deciding whether to draw a");
  ("review card, the skip button, the end of a lesson. How far back it looks is");
  ("wanted in exactly one place, the load itself, so everywhere else the number in");
  ("between is asked for and thrown away.");
  let scope = app_code_review_scope(number);
  let due = null_not_is(scope);
  return due;
}
