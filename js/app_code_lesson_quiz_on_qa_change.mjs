import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { not } from "./not.mjs";
import { app_code_button_skip_lesson } from "./app_code_button_skip_lesson.mjs";
import { greater_than_equal_1 } from "./greater_than_equal_1.mjs";
import { app_code_lesson_quiz_lambda } from "./app_code_lesson_quiz_lambda.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
export function app_code_lesson_quiz_on_qa_change(
  r3,
  value,
  qli,
  context,
  parent_container,
  quiz_index,
  quizzes,
  refresh,
  container_success_message,
  on_qa_change,
) {
  arguments_assert(arguments, 10);
  let correction_render = property_get(r3, "correction_render");
  let on_answer = property_get(r3, "on_answer");
  let on_question = property_get(r3, "on_question");
  let quiz_question = property_get(r3, "quiz_question");
  let answer_property = property_get(r3, "answer_property");
  let qa_for = property_get(r3, "qa_for");
  let answers_div = property_get(r3, "answers_div");
  let answer_label_set = property_get(r3, "answer_label_set");
  let container_question = property_get(r3, "container_question");
  let reveal_button = property_get(r3, "reveal_button");
  html_style_margin_top(reveal_button, value);
  if (not(qli)) {
    app_code_button_skip_lesson(context, parent_container);
  }
  if (greater_than_equal_1(quiz_index)) {
    let on_back = function lambda() {
      let r2 = app_code_lesson_quiz_lambda(context, quizzes, refresh);
      return r2;
    };
    let left = app_shared_button_back_text();
    let back_text = text_combine(left, " to the previous quiz");
    ("give the go-back button the same top gap as the other action buttons so the quiz button stack is evenly spaced");
    let back_button = app_shared_button_wide(
      parent_container,
      back_text,
      on_back,
    );
    let value3 = app_shared_spaced_gap();
    html_style_margin_top(back_button, value3);
  }
  html_visibility_hidden(container_success_message);
  on_qa_change();
  return {
    correction_render,
    on_answer,
    on_question,
    quiz_question,
    answer_property,
    qa_for,
    answers_div,
    answer_label_set,
    container_question,
  };
}
