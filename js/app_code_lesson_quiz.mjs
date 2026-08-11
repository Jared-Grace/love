import { app_code_lesson_quiz_show_correction } from "./app_code_lesson_quiz_show_correction.mjs";
import { app_code_lesson_quiz_on_move_on } from "./app_code_lesson_quiz_on_move_on.mjs";
import { app_code_lesson_quiz_render_correction } from "./app_code_lesson_quiz_render_correction.mjs";
import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { app_code_content_cap } from "./app_code_content_cap.mjs";
import { app_code_feedback_slot_style } from "./app_code_feedback_slot_style.mjs";
import { app_code_feedback_cell } from "./app_code_feedback_cell.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { app_code_hash_write } from "./app_code_hash_write.mjs";
import { app_code_advance_or_no_more } from "./app_code_advance_or_no_more.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_current_last_is } from "./app_code_lesson_current_last_is.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { app_code_quiz_correction } from "./app_code_quiz_correction.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button_wide_next } from "./app_shared_button_wide_next.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { app_code_quiz_index_get } from "./app_code_quiz_index_get.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { app_code_quiz_index_transform } from "./app_code_quiz_index_transform.mjs";
import { add_1 } from "./add_1.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { greater_than_equal_1 } from "./greater_than_equal_1.mjs";
import { app_code_lesson_above } from "./app_code_lesson_above.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_light_bulb } from "./emoji_light_bulb.mjs";
import { app_code_button_skip_lesson } from "./app_code_button_skip_lesson.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
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
  let correction_render = property_get_or(
    info,
    "correction",
    app_code_quiz_correction,
  );
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
  ("one feedback slot holds the success message and the correction overlapped in a single grid cell, so it is always as tall as the taller of the two and nothing shifts when Show me the answer swaps one for the other");
  let feedback_slot = html_div(parent_container);
  app_code_feedback_slot_style(feedback_slot);
  let container_correction = html_div(feedback_slot);
  let container_success_message = html_div(feedback_slot);
  app_code_feedback_cell(container_correction);
  app_code_feedback_cell(container_success_message);
  app_code_content_cap(container_success_message);
  app_shared_success_message(container_success_message);
  let quiz_index = app_code_quiz_index_get(context);
  let qli = list_index_last_is(quizzes, quiz_index);
  let number = app_code_lesson_current_number(context);
  let has_review = app_code_review_due_is(number);
  let lcli = app_code_lesson_current_last_is(context);
  let no_more = lcli && not(has_review);
  async function on_next() {
    "Next moves to the next quiz KIND (forwards, backwards, unscramble...); on the last kind it goes to the next lesson, same as Skip";
    if (qli) {
      await app_code_lesson_quiz_on_move_on(context);
    } else {
      app_code_quiz_index_transform(context, quizzes, add_1);
      refresh();
      ("the Next/Back buttons redraw only the quiz area (a local refresh), which does not run the app-level after_refresh, so mirror the new quiz position into the url here - otherwise a browser reload re-seeds the OLD quiz index from a stale hash and drops back to the first quiz");
      app_code_hash_write(context);
    }
  }
  let last_lesson_end = qli && no_more;
  function render_next(next_parent) {
    "the Next button with the standard top gap; shown only while there is still somewhere to go";
    let next_button = app_shared_button_wide_next(next_parent, on_next);
    let value = app_shared_spaced_gap();
    html_style_margin_top(next_button, value);
  }
  let has_next_step = not(last_lesson_end);
  app_code_advance_or_no_more(parent_container, has_next_step, render_next);
  function on_reveal() {
    "for a learner who is stuck: reveal the correction (the code and its output) so they can see the answer, then continue with Next; wrong attempts alone no longer reveal it";
    html_visibility_hidden(container_success_message);
    app_code_lesson_quiz_show_correction(container_correction);
  }
  let left2 = emoji_light_bulb();
  let reveal_button = app_shared_button_wide_text_combine(
    parent_container,
    left2,
    " Show me the answer",
    on_reveal,
  );
  let value2 = app_shared_spaced_gap();
  html_style_margin_top(reveal_button, value2);
  if (not(qli)) {
    app_code_button_skip_lesson(context, parent_container);
  }
  if (greater_than_equal_1(quiz_index)) {
    let on_back = function lambda() {
      app_code_quiz_index_transform(context, quizzes, subtract_1);
      refresh();
      app_code_hash_write(context);
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
  function on_qa_change() {
    quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
    html_clear(container_question);
    on_question(container_question, quiz_question);
    html_clear(answers_div);
    app_code_lesson_quiz_render_correction(
      container_correction,
      correction_render,
      qa,
    );
    on_answer(answers_div, info, qa, on_success, on_wrong, batch_get);
  }
  function on_wrong() {
    "a wrong attempt no longer reveals the answer - the learner narrows down (MC) or keeps building (unscramble); only the 'Show me the answer' button reveals the correction";
    html_visibility_hidden(container_success_message);
  }
  async function on_success() {
    "on any correct answer, flash success then auto-advance to the NEXT QUESTION of the SAME kind (the player loops through as many questions as they want; Next changes the kind, Skip leaves)";
    html_clear(container_success_message);
    app_shared_success_message(container_success_message);
    html_visibility_visible(container_success_message);
    await sleep_success_color();
    qa = next_get();
    on_qa_change();
  }
}
