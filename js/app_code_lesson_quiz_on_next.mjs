import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_on_move_on } from "./app_code_lesson_quiz_on_move_on.mjs";
import { app_code_quiz_index_transform } from "./app_code_quiz_index_transform.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_hash_write } from "./app_code_hash_write.mjs";
export async function app_code_lesson_quiz_on_next(
  qli,
  context,
  quizzes,
  refresh,
) {
  arguments_assert(arguments, 4);
  ("Next moves to the next quiz KIND (forwards, backwards, unscramble...); on the last kind it goes to the next lesson, same as Skip");
  if (qli) {
    await app_code_lesson_quiz_on_move_on(context);
  } else {
    app_code_quiz_index_transform(context, quizzes, add_1);
    refresh();
    ("the Next/Back buttons redraw only the quiz area (a local refresh), which does not run the app-level after_refresh, so mirror the new quiz position into the url here - otherwise a browser reload re-seeds the OLD quiz index from a stale hash and drops back to the first quiz");
    app_code_hash_write(context);
  }
}
