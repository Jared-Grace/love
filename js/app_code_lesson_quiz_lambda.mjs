import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_index_transform } from "./app_code_quiz_index_transform.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { app_code_hash_write } from "./app_code_hash_write.mjs";
export function app_code_lesson_quiz_lambda(context, quizzes, refresh) {
  arguments_assert(arguments, 3);
  app_code_quiz_index_transform(context, quizzes, subtract_1);
  refresh();
  app_code_hash_write(context);
}
