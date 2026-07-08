import { log } from "../../../love/public/src/log.mjs";
import { sleep_success_color } from "../../../love/public/src/sleep_success_color.mjs";
import { app_code_container_light_blue_text } from "../../../love/public/src/app_code_container_light_blue_text.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { app_code_lesson_current_last_is } from "../../../love/public/src/app_code_lesson_current_last_is.mjs";
import { app_code_lesson_quiz_qa_question } from "../../../love/public/src/app_code_lesson_quiz_qa_question.mjs";
import { html_visibility_hidden } from "../../../love/public/src/html_visibility_hidden.mjs";
import { html_visibility_visible } from "../../../love/public/src/html_visibility_visible.mjs";
import { app_shared_button_next_text } from "../../../love/public/src/app_shared_button_next_text.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { app_replace_button_wide_next } from "../../../love/public/src/app_replace_button_wide_next.mjs";
import { app_shared_button_back_text } from "../../../love/public/src/app_shared_button_back_text.mjs";
import { at_least_1 } from "../../../love/public/src/at_least_1.mjs";
import { app_code_quiz_index_get } from "../../../love/public/src/app_code_quiz_index_get.mjs";
import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { app_code_quiz_index_transform } from "../../../love/public/src/app_code_quiz_index_transform.mjs";
import { app_code_lesson_above } from "../../../love/public/src/app_code_lesson_above.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { html_visibility_hidden_multiple } from "../../../love/public/src/html_visibility_hidden_multiple.mjs";
import { app_code_examples } from "../../../love/public/src/app_code_examples.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
import { app_code_lesson_first_id } from "../../../love/public/src/app_code_lesson_first_id.mjs";
import { list_property_next_value } from "../../../love/public/src/list_property_next_value.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { app_code_quiz_index_reset } from "../../../love/public/src/app_code_quiz_index_reset.mjs";
import { list_index_last_is } from "../../../love/public/src/list_index_last_is.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { app_replace_success_message } from "../../../love/public/src/app_replace_success_message.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_example_answer_label } from "../../../love/public/src/app_code_example_answer_label.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
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
  let on_answer = property_get(info, "on_answer");
  let question_label = property_get(info, "question_label");
  let on_question = property_get(info, "on_question");
  let answer_label = property_get(info, "answer_label");
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
  let container_success_message = html_div(parent_container);
  let quiz_new_message = app_code_container_light_blue(parent_container);
  html_div_text(quiz_new_message, "Above is a new quiz, if you want");
  let lcli = app_code_lesson_current_last_is(context);
  if (not(lcli)) {
    let nt = app_shared_button_next_text();
    html_div_text(quiz_new_message, 'Otherwise, choose: "' + nt + '"');
  }
  let success = app_replace_success_message(container_success_message);
  let quiz_index = app_code_quiz_index_get(context);
  let qli = list_index_last_is(quizzes, quiz_index);
  async function on_next() {
    app_code_quiz_index_transform(context, quizzes, add_1);
    log(app_code_lesson_quiz.name, {
      quizzes,
    });
    if (qli) {
      ("next lesson");
      app_code_quiz_index_reset(context);
      function lesson_id_transform(value) {
        let lessons = app_code_lessons();
        let value_next = list_property_next_value(lessons, "id", value);
        return value_next;
      }
      let value_initial = app_code_lesson_first_id();
      storage_local_transform_context(
        context,
        "lesson_id",
        value_initial,
        lesson_id_transform,
      );
      await app_shared_screen_set(context, app_code_examples);
    } else {
      refresh();
    }
  }
  if (lcli && qli) {
    app_code_container_light_blue_text(
      parent_container,
      "Next: There are no more lessons available at this time",
    );
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
    let back_text = app_shared_button_back_text() + " to the previous quiz";
    let bb = app_replace_button_wide(parent_container, back_text, on_back);
  }
  let hides = [success, quiz_new_message];
  html_visibility_hidden_multiple(hides);
  on_qa_change();
  function on_qa_change() {
    quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
    html_clear(container_question);
    on_question(container_question, quiz_question);
    html_clear(answers_div);
    on_answer(answers_div, info, qa, on_success, on_wrong, batch_get);
  }
  function on_wrong() {
    html_visibility_hidden(container_success_message);
  }
  async function on_success() {
    html_clear(container_success_message);
    app_replace_success_message(container_success_message);
    html_visibility_hidden(quiz_new_message);
    html_visibility_visible(container_success_message);
    await sleep_success_color();
    qa = next_get();
    on_qa_change();
    html_visibility_visible(quiz_new_message);
  }
}
