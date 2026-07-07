import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_style_normal_text } from "../../../love/public/src/app_code_style_normal_text.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_base_quizzes_forwards_backwards } from "../../../love/public/src/app_code_lesson_base_quizzes_forwards_backwards.mjs";
import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
import { app_code_quiz_backwards_label_answer_validity } from "../../../love/public/src/app_code_quiz_backwards_label_answer_validity.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
export function app_code_lesson_validity_base(
  quiz_label1,
  batch,
  id,
  name,
  above,
  example_label1,
) {
  const example_label = app_code_label_code_example();
  const quiz_label = example_label;
  let question_label = app_code_label_code_question();
  let example_count = 2;
  let quiz_backwards_label_answer =
    app_code_quiz_backwards_label_answer_validity();
  let on_quiz_answer_button_backwards = null;
  let quiz_backwards_answer_count_override = null;
  let on_question_forwards = html_text_set_code_dark;
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_label,
    noop,
    on_question_forwards,
    question_label,
    batch,
    quiz_backwards_label_answer,
    on_question_forwards,
    2,
    "Identifier validity: ",
    app_code_style_normal_text,
  );
  let lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch,
    on_question_forwards,
    example_label,
    quizzes,
    question_label,
  );
  return lesson;
}
