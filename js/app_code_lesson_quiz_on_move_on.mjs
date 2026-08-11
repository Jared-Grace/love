import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_code_after_lesson } from "./app_code_after_lesson.mjs";
export async function app_code_lesson_quiz_on_move_on(context) {
  arguments_assert(arguments, 1);
  ("go to the review (at a checkpoint) or the next lesson");
  app_code_quiz_index_reset(context);
  await app_code_after_lesson(context);
}
