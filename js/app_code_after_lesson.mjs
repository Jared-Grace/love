import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_review } from "./app_code_review.mjs";
import { app_code_lesson_next } from "./app_code_lesson_next.mjs";
export async function app_code_after_lesson(context) {
  "after finishing a lesson: go to the review when this lesson is a checkpoint (5, 10, 15...), otherwise to the next lesson";
  let number = app_code_lesson_current_number(context);
  let scope = app_code_review_scope(number);
  let has_review = null_not_is(scope);
  if (has_review) {
    storage_local_set_context(context, "review_number", number);
    await app_shared_screen_set(context, app_code_review);
    return;
  }
  await app_code_lesson_next(context);
}
