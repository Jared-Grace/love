import { app_code_style_normal_text } from "../../../love/public/src/app_code_style_normal_text.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_lesson_base_quizzes_forwards_backwards } from "../../../love/public/src/app_code_lesson_base_quizzes_forwards_backwards.mjs";
export function app_code_lesson_base_with_quizzes(
  name,
  id,
  above,
  batch_get,
  example_label,
  quiz_label,
  example_count,
  question_label,
  on_quiz_answer_button_forwards,
  on_question,
  quiz_backwards_label_answer,
  on_quiz_answer_button_backwards,
  quiz_backwards_answer_count_override,
) {
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_label,
    on_quiz_answer_button_forwards,
    on_question,
    question_label,
    batch_get,
    quiz_backwards_label_answer,
    on_quiz_answer_button_backwards,
    quiz_backwards_answer_count_override,
    null,
    html_text_set,
  );
  let lesson = null;
  let question_label2 = error();
  lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch_get,
    on_question,
    example_label,
    quizzes,
    question_label2,
    app_code_style_normal_text,
  );
  return lesson;
}
