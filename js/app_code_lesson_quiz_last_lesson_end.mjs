import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_on_next } from "./app_code_lesson_quiz_on_next.mjs";
export function app_code_lesson_quiz_last_lesson_end(
  r4,
  context,
  quizzes,
  refresh,
) {
  arguments_assert(arguments, 4);
  let no_more = property_get(r4, "no_more");
  let quiz_index = property_get(r4, "quiz_index");
  let container_success_message = property_get(r4, "container_success_message");
  let container_correction = property_get(r4, "container_correction");
  let parent_container = property_get(r4, "parent_container");
  let answers_div = property_get(r4, "answers_div");
  let answer_label_set = property_get(r4, "answer_label_set");
  let container_question = property_get(r4, "container_question");
  let quiz_question = property_get(r4, "quiz_question");
  let qa_for = property_get(r4, "qa_for");
  let answer_property = property_get(r4, "answer_property");
  let correction_render = property_get(r4, "correction_render");
  let on_answer = property_get(r4, "on_answer");
  let answer_label = property_get(r4, "answer_label");
  let on_question = property_get(r4, "on_question");
  let qli = property_get(r4, "qli");
  async function on_next() {
    let r = await app_code_lesson_quiz_on_next(qli, context, quizzes, refresh);
    return r;
  }
  let last_lesson_end = qli && no_more;
  let r2 = {
    quiz_index,
    container_success_message,
    container_correction,
    parent_container,
    answers_div,
    answer_label_set,
    container_question,
    quiz_question,
    qa_for,
    answer_property,
    correction_render,
    on_answer,
    answer_label,
    on_question,
    qli,
    on_next,
    last_lesson_end,
  };
  return r2;
}
