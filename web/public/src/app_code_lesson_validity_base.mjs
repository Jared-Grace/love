import { app_code_lesson_quizzes } from "../../../love/public/src/app_code_lesson_quizzes.mjs";
import { app_code_label_code_example } from "../../../love/public/src/app_code_label_code_example.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_style_normal_text } from "../../../love/public/src/app_code_style_normal_text.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_quiz_backwards_label_answer_validity } from "../../../love/public/src/app_code_quiz_backwards_label_answer_validity.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
export function app_code_lesson_validity_base(
  batch,
  id,
  name,
  above,
  backwards_question_label,
  on_question_forwards,
) {
  const example_label = app_code_label_code_example();
  const quiz_label = example_label;
  let question_label = app_code_label_code_question();
  let example_count = 2;
  let quiz_backwards_label_answer =
    app_code_quiz_backwards_label_answer_validity();
  const quizzes = app_code_lesson_quizzes(
    batch,
    question_label,
    on_question_forwards,
    quiz_label,
    noop,
    backwards_question_label,
    app_code_style_normal_text,
    quiz_backwards_label_answer,
    on_question_forwards,
    2,
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
    app_code_style_normal_text,
  );
  return lesson;
}
