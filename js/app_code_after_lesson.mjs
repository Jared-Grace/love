import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { app_code_review_go } from "./app_code_review_go.mjs";
import { app_code_lesson_next } from "./app_code_lesson_next.mjs";
export async function app_code_after_lesson(context) {
  "after finishing a lesson: go to the review when this lesson is a checkpoint (5, 10, 15...), otherwise to the next lesson";
  let number = app_code_lesson_current_number(context);
  let has_review = app_code_review_due_is(number);
  if (has_review) {
    await app_code_review_go(context, number);
    return;
  }
  await app_code_lesson_next(context);
}
