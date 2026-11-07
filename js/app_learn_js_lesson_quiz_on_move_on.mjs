import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_learn_js_after_lesson } from "./app_learn_js_after_lesson.mjs";
export async function app_learn_js_lesson_quiz_on_move_on(context) {
  arguments_assert(arguments, 1);
  ("go to the review (at a checkpoint) or the next lesson");
  app_code_quiz_index_reset(context);
  await app_learn_js_after_lesson(context);
}
