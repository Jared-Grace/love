import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_style_normal_text } from "../../../love/public/src/app_code_style_normal_text.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_quizzes_unscramble } from "../../../love/public/src/app_code_lesson_quizzes_unscramble.mjs";
import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
export function app_code_lesson_code(batch, name_id, above) {
  let example_label = "Value of code: ";
  let quiz_label = "What is the value of this code? ";
  let quiz_backwards_label_answer = "What code produces this value? ";
  const backwards_question_label = "Value: ";
  let question_label = app_code_label_code_question();
  let example_count = 1;
  let quiz_backwards_answer_count_override = null;
  let on_question_forwards = html_text_set_code_dark;
  const quizzes = app_code_lesson_quizzes_unscramble(
    batch,
    question_label,
    on_question_forwards,
    quiz_label,
    noop,
    backwards_question_label,
    app_code_style_normal_text,
    quiz_backwards_label_answer,
    on_question_forwards,
    quiz_backwards_answer_count_override,
  );
  let lesson = app_code_lesson_base(
    name_id,
    above,
    example_count,
    batch,
    on_question_forwards,
    example_label,
    quizzes,
    question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
