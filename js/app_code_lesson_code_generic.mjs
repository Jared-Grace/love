import { null_is } from "./null_is.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { noop } from "./noop.mjs";
import { app_code_lesson_quizzes_unscramble } from "./app_code_lesson_quizzes_unscramble.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_lesson_code_generic(params) {
  let value = property_get(params, "value");
  let batch_get = property_get(params, "batch_get");
  let name_id = property_get(params, "name_id");
  let above = property_get(params, "above");
  let quiz_backwards_answer_count_override = property_get(
    params,
    "quiz_backwards_answer_count_override",
  );
  let forwards_answer_count_override = property_get(
    params,
    "forwards_answer_count_override",
  );
  let s = text_combine(value, " of code: ");
  let example_answer_label = text_first_upper_to(s);
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
  let s2 = text_combine(value, ": ");
  let backwards_question_label = text_first_upper_to(s2);
  let example_question_label = app_code_label_code_question();
  let example_count = property_get(params, "example_count");
  let on_question = html_text_set_code_dark;
  let decoys = property_get_or(params, "decoys", null);
  ("a lesson may override the forwards quiz labels (the question shown and the answer prompt); absent, they fall back to the generic Code: / What is the value of this code? wording");
  let forwards_question_label_override = property_get_or(
    params,
    "forwards_question_label",
    null,
  );
  let forwards_answer_label_override = property_get_or(
    params,
    "forwards_answer_label",
    null,
  );
  let forwards_question_label = example_question_label;
  if (null_is(forwards_question_label_override)) {
    forwards_question_label = example_question_label;
  } else {
    forwards_question_label = forwards_question_label_override;
  }
  let forwards_answer_label = quiz_label;
  if (null_is(forwards_answer_label_override)) {
    forwards_answer_label = quiz_label;
  } else {
    forwards_answer_label = forwards_answer_label_override;
  }
  let forwards = {
    question_label: forwards_question_label,
    on_question,
    answer_label: forwards_answer_label,
    answer_on_button: noop,
    answer_count_override: forwards_answer_count_override,
    decoys,
  };
  let backwards = {
    question_label: backwards_question_label,
    on_question: app_code_style_normal_text,
    answer_label: quiz_backwards_label_answer,
    answer_on_button: on_question,
    answer_count_override: quiz_backwards_answer_count_override,
  };
  let quizzes_get = app_code_lesson_quizzes_unscramble({
    batch_get,
    forwards,
    backwards,
  });
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
