import { html_style_background_color_black } from "../../../love/public/src/html_style_background_color_black.mjs";
import { html_style_padding_y_0 } from "../../../love/public/src/html_style_padding_y_0.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { app_code_symbols_separated_on_question } from "../../../love/public/src/app_code_symbols_separated_on_question.mjs";
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
  const quiz_label = "How many symbols are there? ";
  let symbols_to_answer = text_size_text_to;
  let question_label = app_code_label_symbols();
  let batch_get = app_code_batch_question_answer_fns(
    batch_symbols,
    symbols_to_answer,
  );
  let example_count = 1;
  let quiz_backwards_label_answer = null;
  let on_quiz_answer_button_backwards = function lambda(parent, text) {
    html_clear(parent);
    html_style_assign(parent, {
      "justify-content": "center",
    });
    html_style_padding_y_0(parent);
    html_style_background_color_black(parent_new);
    let r = app_code_symbols_separated_on_question(parent, text);
  };
  let quiz_backwards_answer_count_override = null;
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_label,
    noop,
    on_question,
    question_label,
    batch_get,
    quiz_backwards_label_answer,
    on_quiz_answer_button_backwards,
    quiz_backwards_answer_count_override,
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
  );
  return lesson;
}
