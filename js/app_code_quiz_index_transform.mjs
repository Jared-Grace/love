import { app_code_quiz_index_transform_get } from "./app_code_quiz_index_transform_get.mjs";
import { app_code_quiz_index_set } from "./app_code_quiz_index_set.mjs";
export function app_code_quiz_index_transform(context, quizzes, transform) {
  let index_new = app_code_quiz_index_transform_get(
    context,
    quizzes,
    transform,
  );
  app_code_quiz_index_set(context, index_new);
  return index_new;
}
