import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_token_order_batch } from "./app_code_token_order_batch.mjs";
import { app_code_quiz_tokens_order } from "./app_code_quiz_tokens_order.mjs";
import { app_code_lesson_quiz_question_none } from "./app_code_lesson_quiz_question_none.mjs";
import { app_code_tokens_choose_label } from "./app_code_tokens_choose_label.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_tokens_order_div } from "./app_code_tokens_order_div.mjs";
export function app_code_lesson_token_order_generic(
  name_id,
  above,
  example_choose,
  quiz_choose,
) {
  arguments_assert(arguments, 4);
  ("a lesson whose tokens are chosen in order with nothing shown to follow, on the one-if programs The order of the tokens uses: one worked example chosen through by example_choose, then quizzes chosen through by quiz_choose, so the lessons after The order of the tokens differ only in their opening and in how the choosing is drawn");
  let batch = app_code_batch_question_answer_fns(
    app_code_token_order_batch,
    app_code_quiz_tokens_order,
  );
  let forwards = {
    question_label: "",
    on_question: app_code_lesson_quiz_question_none,
    answer_label: app_code_tokens_choose_label,
    answer_on_button: html_text_set_code_dark_lines,
    answer_count_override: null,
  };
  let quizzes_get = app_code_lesson_quizzes_generic({
    lines: false,
    forwards,
    backwards: forwards,
    backwards_code: false,
    backwards_include: false,
    forwards_include: false,
    batch_get: batch,
    forwards_code: true,
    unscramble_label: app_code_tokens_choose_label,
    unscramble_on_answer: quiz_choose,
    builds_more: [],
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    1,
    batch,
    example_choose,
    null,
    quizzes_get,
    app_code_tokens_choose_label,
    app_code_tokens_order_div,
  );
  return lesson;
}
