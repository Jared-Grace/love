import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_lcli } from "./app_code_lesson_quiz_lcli.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_next_none_is } from "./app_code_lesson_next_none_is.mjs";
export function app_code_lesson_quiz_no_more(
  info,
  qa,
  container_blue_light,
  question_label,
  parent,
  context,
  quizzes,
) {
  arguments_assert(arguments, 7);
  let r4 = app_code_lesson_quiz_lcli(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
  );
  let qli = property_get(r4, "qli");
  let on_question = property_get(r4, "on_question");
  let answer_label = property_get(r4, "answer_label");
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
  ("being on the last lesson with no review after it is no longer the whole of having nowhere to go: a learner who skipped ahead still has unfinished lessons above this one, and the shared question carries round the top of the list to find them. It is the same question the skip button at the foot of a lesson asks, asked in the one place, so the note saying the course is done and the button offering the way on can never both appear");
  let no_more = app_code_lesson_next_none_is(context);
  let r = {
    qli,
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
    no_more,
  };
  return r;
}
