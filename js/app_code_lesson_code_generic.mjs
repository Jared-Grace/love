import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { noop } from "./noop.mjs";
import { app_code_lesson_quizzes_unscramble } from "./app_code_lesson_quizzes_unscramble.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_lesson_code_generic(value, batch_get, name_id, above) {
  let example_answer_label = text_first_upper_to(
    text_combine(value, " of code: "),
  );
  let quiz_label = text_combine_multiple([
    "What is the ",
    value,
    " of this code? ",
  ]);
  let quiz_backwards_label_answer = text_combine_multiple([
    "What code produces this ",
    value,
    "? ",
  ]);
  let backwards_question_label = text_first_upper_to(text_combine(value, ": "));
  let example_question_label = app_code_label_code_question();
  let example_count = 1;
  let quiz_backwards_answer_count_override = null;
  let on_question = html_text_set_code_dark;
  let quizzes_get = app_code_lesson_quizzes_unscramble(
    batch_get,
    example_question_label,
    on_question,
    quiz_label,
    noop,
    backwards_question_label,
    app_code_style_normal_text,
    quiz_backwards_label_answer,
    on_question,
    quiz_backwards_answer_count_override,
  );
  let lesson = app_code_lesson_base(
    name_id,
    above,
    example_count,
    batch_get,
    on_question,
    example_answer_label,
    quizzes_get,
    example_question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
