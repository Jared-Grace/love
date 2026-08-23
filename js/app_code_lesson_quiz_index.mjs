import { each } from "./each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_code_quiz_correction } from "./app_code_quiz_correction.mjs";
import { identity } from "./identity.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { app_code_lesson_above } from "./app_code_lesson_above.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { app_code_label_text_set } from "./app_code_label_text_set.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_feedback_slot_style } from "./app_code_feedback_slot_style.mjs";
import { app_code_feedback_cell } from "./app_code_feedback_cell.mjs";
import { app_code_content_cap } from "./app_code_content_cap.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_code_quiz_index_get } from "./app_code_quiz_index_get.mjs";
export function app_code_lesson_quiz_index(
  info,
  qa,
  container_blue_light,
  question_label,
  parent,
  context,
) {
  arguments_assert(arguments, 6);
  let on_question = property_get(info, "on_question");
  let answer_label = property_get(info, "answer_label");
  let on_answer = property_get(info, "on_answer");
  let correction_render = property_get_or(
    info,
    "correction",
    app_code_quiz_correction,
  );
  let answer_property = property_get(info, "answer_property");
  ("a batch line spells one pair, and a quiz that asks about something worked out from that pair rather than about the pair itself remaps every line it draws. Its wrong answers are already drawn through this remap; the line it moves on to after a right answer is drawn the same way, or the quiz would open its next question showing the pair as the batch spells it - the very thing it does not ask about. Every other quiz shows the pair as it stands, and identity leaves it alone");
  let qa_for = property_get_or(info, "qa_for", identity);
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let a = app_code_lesson_above(
    container_blue_light,
    question_label,
    quiz_question,
    on_question,
  );
  let a_container = property_get(a, "container");
  let container_question = property_get(a, "container_question");
  let answer_label_div = app_code_example_answer_label(
    a_container,
    answer_label,
  );
  function answer_label_set(said) {
    "let a quiz say something new over its answers, for the quizzes whose question is worked out in steps and whose asking changes as the steps go";
    app_code_label_text_set(answer_label_div, said);
  }
  let answers_div = html_div(a_container);
  let parent_container = html_div(parent);
  ("one feedback slot holds the success message and the correction overlapped in a single grid cell, so it is always as tall as the taller of the two and nothing shifts when Show me the answer swaps one for the other");
  let feedback_slot = html_div(parent_container);
  app_code_feedback_slot_style(feedback_slot);
  let container_correction = html_div(feedback_slot);
  let container_success_message = html_div(feedback_slot);
  each(
    [container_correction, container_success_message],
    app_code_feedback_cell,
  );
  app_code_content_cap(container_success_message);
  app_shared_success_message(container_success_message);
  let quiz_index = app_code_quiz_index_get(context);
  let r = {
    on_question,
    answer_label,
    on_answer,
    correction_render,
    answer_property,
    qa_for,
    quiz_question,
    container_question,
    answer_label_set,
    answers_div,
    parent_container,
    container_correction,
    container_success_message,
    quiz_index,
  };
  return r;
}
