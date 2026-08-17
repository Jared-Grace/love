import { app_code_lesson_quiz_on_question } from "./app_code_lesson_quiz_on_question.mjs";
import { app_code_lesson_quiz_answer_label } from "./app_code_lesson_quiz_answer_label.mjs";
import { app_code_lesson_quiz_lambda } from "./app_code_lesson_quiz_lambda.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_progress_quiz_correct_record } from "./app_code_progress_quiz_correct_record.mjs";
import { app_code_lesson_quiz_show_correction } from "./app_code_lesson_quiz_show_correction.mjs";
import { app_code_lesson_quiz_render_correction } from "./app_code_lesson_quiz_render_correction.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { app_code_advance_or_no_more } from "./app_code_advance_or_no_more.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { greater_than_equal_1 } from "./greater_than_equal_1.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { property_get } from "./property_get.mjs";
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
  let r = app_code_lesson_quiz_answer_label(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
    refresh,
  );
  let r4 = app_code_lesson_quiz_on_question(r);
  let on_question = property_get(r4, "on_question");
  let on_answer = property_get(r4, "on_answer");
  let correction_render = property_get(r4, "correction_render");
  let answer_property = property_get(r4, "answer_property");
  let qa_for = property_get(r4, "qa_for");
  let quiz_question = property_get(r4, "quiz_question");
  let container_question = property_get(r4, "container_question");
  let answer_label_set = property_get(r4, "answer_label_set");
  let answers_div = property_get(r4, "answers_div");
  let parent_container = property_get(r4, "parent_container");
  let container_correction = property_get(r4, "container_correction");
  let container_success_message = property_get(r4, "container_success_message");
  let quiz_index = property_get(r4, "quiz_index");
  let render_next = property_get(r4, "render_next");
  let has_next_step = property_get(r4, "has_next_step");
  let r3 = property_get(r4, "r3");
  let answer_label = property_get(r4, "answer_label");
  let qli = property_get(r3, "qli");
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
  let value = app_shared_spaced_gap();
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
  function on_qa_change() {
    quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
    html_clear(container_question);
    on_question(container_question, quiz_question);
    html_clear(answers_div);
    ("the label is put back to what the lesson wrote before every question, because a quiz that changed it while working the last one out would otherwise open the next one still asking the question it finished on");
    answer_label_set(answer_label);
    app_code_lesson_quiz_render_correction(
      container_correction,
      correction_render,
      qa,
    );
    on_answer(
      answers_div,
      info,
      qa,
      on_success,
      on_wrong,
      batch_get,
      answer_label_set,
    );
  }
  function on_wrong() {
    "a wrong attempt no longer reveals the answer - the learner narrows down (MC) or keeps building (unscramble); only the 'Show me the answer' button reveals the correction";
    html_visibility_hidden(container_success_message);
  }
  async function on_success() {
    "on any correct answer, flash success then auto-advance to the NEXT QUESTION of the SAME kind (the player loops through as many questions as they want; Next changes the kind, Skip leaves)";
    "the correct answer is written down here, at the one place that knows both which quiz of the lesson this is and how many the lesson has - the list screen shows a lesson as finished once every one of them has been answered right at least once";
    let quizzes_total = list_size(quizzes);
    app_code_progress_quiz_correct_record(context, quiz_index, quizzes_total);
    html_clear(container_success_message);
    app_shared_success_message(container_success_message);
    html_visibility_visible(container_success_message);
    await sleep_success_color();
    let item = next_get();
    qa = qa_for(item);
    on_qa_change();
  }
}
