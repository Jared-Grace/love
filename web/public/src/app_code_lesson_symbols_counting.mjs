import { app_code_style_normal_text } from "../../../love/public/src/app_code_style_normal_text.mjs";
import { app_code_lesson_symbols_counting_quiz_backwards_on_button } from "../../../love/public/src/app_code_lesson_symbols_counting_quiz_backwards_on_button.mjs";
import { text_size_text_to } from "../../../love/public/src/text_size_text_to.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_lesson_base_quizzes_forwards_backwards } from "../../../love/public/src/app_code_lesson_base_quizzes_forwards_backwards.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { app_code_label_symbols } from "../../../love/public/src/app_code_label_symbols.mjs";
export function app_code_lesson_symbols_counting(
  name,
  id,
  above,
  batch_symbols,
  on_question,
) {
  const example_label = "Number of symbols: ";
  const label_answer_forwards = "How many symbols are there? ";
  let symbols_to_answer = text_size_text_to;
  let question_label = app_code_label_symbols();
  let batch_get = app_code_batch_question_answer_fns(
    batch_symbols,
    symbols_to_answer,
  );
  let example_count = 1;
  let quiz_backwards_label_answer = "What symbols produce this count? ";
  let on_quiz_answer_button_backwards =
    app_code_lesson_symbols_counting_quiz_backwards_on_button(on_question);
  let quiz_backwards_answer_count_override = null;
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_backwards_answer_count_override,
    label_answer_forwards,
    noop,
    on_question,
    question_label,
    batch_get,
    quiz_backwards_label_answer,
    on_quiz_answer_button_backwards,
    "Count: ",
    app_code_style_normal_text,
  );
  let lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch_get,
    on_question,
    example_label,
    quizzes,
    question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
