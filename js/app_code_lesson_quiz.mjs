import { sleep_success_color } from "./sleep_success_color.mjs";
import { app_code_no_more_lessons } from "./app_code_no_more_lessons.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_current_last_is } from "./app_code_lesson_current_last_is.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { app_shared_button_next_text } from "./app_shared_button_next_text.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_quiz_correction } from "./app_code_quiz_correction.mjs";
import { emoji_point_up } from "./emoji_point_up.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_replace_button_wide_next } from "./app_replace_button_wide_next.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { at_least_1 } from "./at_least_1.mjs";
import { app_code_quiz_index_get } from "./app_code_quiz_index_get.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { app_code_quiz_index_transform } from "./app_code_quiz_index_transform.mjs";
import { app_code_lesson_above } from "./app_code_lesson_above.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { html_visibility_hidden_multiple } from "./html_visibility_hidden_multiple.mjs";
import { app_code_after_lesson } from "./app_code_after_lesson.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { add_1 } from "./add_1.mjs";
import { app_replace_success_message } from "./app_replace_success_message.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_quiz(
  container_blue_light,
  qa,
  parent,
  context,
  refresh,
  info,
  batch_get,
  quizzes,
  next_get,
) {
  let question_label = property_get(info, "question_label");
  let on_question = property_get(info, "on_question");
  let answer_label = property_get(info, "answer_label");
  let on_answer = property_get(info, "on_answer");
  let answer_property = property_get(info, "answer_property");
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let a = app_code_lesson_above(
    container_blue_light,
    question_label,
    quiz_question,
    on_question,
  );
  let a_container = property_get(a, "container");
  let container_question = property_get(a, "container_question");
  app_code_example_answer_label(a_container, answer_label);
  let answers_div = html_div(a_container);
  let parent_container = html_div(parent);
  let container_correction = html_div(parent_container);
  let container_success_message = html_div(parent_container);
  let success = app_replace_success_message(container_success_message);
  let quiz_index = app_code_quiz_index_get(context);
  let qli = list_index_last_is(quizzes, quiz_index);
  async function on_next() {
    app_code_quiz_index_transform(context, quizzes, add_1);
    if (qli) {
      app_code_quiz_index_reset(context);
      await app_code_after_lesson(context);
    } else {
      refresh();
    }
  }
  let number = app_code_lesson_current_number(context);
  let review_scope = app_code_review_scope(number);
  let has_review = null_not_is(review_scope);
  let after_none = lcli && not(has_review);
  let show_none = after_none && qli;
  if (show_none) {
    app_code_no_more_lessons(parent_container);
  } else {
    app_replace_button_wide_next(parent_container, on_next);
  }
  if (at_least_1(quiz_index)) {
    let on_back = function lambda() {
      let quiz_index = app_code_quiz_index_transform(
        context,
        quizzes,
        subtract_1,
      );
      refresh();
    };
    let left = app_shared_button_back_text();
    let back_text = text_combine(left, " to the previous quiz");
    let bb = app_replace_button_wide(parent_container, back_text, on_back);
  }
  let hides = [success];
  html_visibility_hidden_multiple(hides);
  on_qa_change();
  function on_qa_change() {
    quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
    html_clear(container_question);
    on_question(container_question, quiz_question);
    html_clear(answers_div);
    hide_correction();
    on_answer(answers_div, info, qa, on_success, on_wrong, batch_get);
  }
  function hide_correction() {
    html_clear(container_correction);
  }
  function show_correction() {
    html_clear(container_correction);
    app_code_quiz_correction(container_correction, qa);
  }
  function on_wrong() {
    html_visibility_hidden(container_success_message);
    show_correction();
  }
  function on_success() {
    "on a correct answer, show the success message and STOP — the choices are locked and the correction (if any) stays visible, so the learner ponders and advances with Next at their own pace, not auto-advanced";
    html_clear(container_success_message);
    app_replace_success_message(container_success_message);
    html_visibility_visible(container_success_message);
  }
}
