import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_quiz_index_transform } from "./app_learn_js_quiz_index_transform.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { app_learn_js_hash_write } from "./app_learn_js_hash_write.mjs";
export function app_learn_js_lesson_quiz_lambda(context, quizzes, refresh) {
  arguments_assert(arguments, 3);
  app_learn_js_quiz_index_transform(context, quizzes, subtract_1);
  refresh();
  app_learn_js_hash_write(context);
}
