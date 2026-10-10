import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_token_order_codes_generic } from "./app_code_lesson_token_order_codes_generic.mjs";
import { app_code_token_order_batch } from "./app_code_token_order_batch.mjs";
export function app_code_lesson_token_order_generic(
  name_id,
  above,
  example_choose,
  quiz_choose,
) {
  arguments_assert(arguments, 4);
  ("a lesson whose tokens are chosen in order with nothing shown to follow, on the one-if programs The order of the tokens uses: one worked example chosen through by example_choose, then quizzes chosen through by quiz_choose");
  let lesson = app_code_lesson_token_order_codes_generic(
    name_id,
    above,
    example_choose,
    quiz_choose,
    app_code_token_order_batch,
  );
  return lesson;
}
