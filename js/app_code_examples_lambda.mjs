import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_previous_set } from "./app_code_lesson_previous_set.mjs";
import { app_code_lesson_current } from "./app_code_lesson_current.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { app_code_quiz_index_set } from "./app_code_quiz_index_set.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_quiz } from "./app_code_quiz.mjs";
export async function app_code_examples_lambda(context) {
  arguments_assert(arguments, 1);
  app_code_lesson_previous_set(context);
  let lesson_previous = app_code_lesson_current(context);
  let batch = property_get(lesson_previous, "batch");
  let list = batch();
  let quizzes = list_first_property(list, "quizzes");
  let index_last = list_index_last(quizzes);
  app_code_quiz_index_set(context, index_last);
  await app_shared_screen_set(context, app_code_quiz);
}
