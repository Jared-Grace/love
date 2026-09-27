import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_review_go } from "./app_code_review_go.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_code_lesson_go } from "./app_code_lesson_go.mjs";
export async function app_code_course_unfinished_go(context, way) {
  "Go to the unfinished lesson or review one search found: a lesson is started at its first quiz, the same move finishing a lesson makes, and a review is opened the way its row on the home list opens it.";
  arguments_assert(arguments, 2);
  let kind = property_get(way, "kind");
  let to_review = equal(kind, "review");
  if (to_review) {
    let number = property_get(way, "number");
    await app_code_review_go(context, number);
    return;
  }
  let lesson = property_get(way, "lesson");
  app_code_quiz_index_reset(context);
  await app_code_lesson_go(lesson, context);
}
