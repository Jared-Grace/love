import { app_code_lesson_quizzes } from "./app_code_lesson_quizzes.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { noop } from "./noop.mjs";
import { app_code_quiz_backwards_label_answer_validity } from "./app_code_quiz_backwards_label_answer_validity.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
export function app_code_lesson_validity_base(
  batch_get,
  name_id,
  above,
  backwards_question_label,
  on_question,
  example_answer_label,
  backwards_answer_on_button,
) {
  let quiz_label = example_answer_label;
  let example_question_label = app_code_label_code_question();
  let example_count = 2;
  let quiz_backwards_label_answer =
    app_code_quiz_backwards_label_answer_validity();
  let quizzes_get = app_code_lesson_quizzes(
    batch_get,
    example_question_label,
    on_question,
    quiz_label,
    noop,
    backwards_question_label,
    app_code_style_normal_text,
    quiz_backwards_label_answer,
    on_question,
    2,
  );
  let lesson = app_code_lesson_base(
    name_id,
    above,
    example_count,
    batch_get,
    on_question,
    backwards_question_label,
    quizzes_get,
    example_question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
