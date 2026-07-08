import { sleep_seconds } from "../../../love/public/src/sleep_seconds.mjs";
import { app_replace_button_wide_next } from "../../../love/public/src/app_replace_button_wide_next.mjs";
import { app_shared_button_back_text } from "../../../love/public/src/app_shared_button_back_text.mjs";
import { app_code_lesson_quiz_wrong_background_color } from "../../../love/public/src/app_code_lesson_quiz_wrong_background_color.mjs";
import { at_least_1 } from "../../../love/public/src/at_least_1.mjs";
import { app_code_quiz_index_get } from "../../../love/public/src/app_code_quiz_index_get.mjs";
import { subtract_1 } from "../../../love/public/src/subtract_1.mjs";
import { app_code_quiz_index_transform } from "../../../love/public/src/app_code_quiz_index_transform.mjs";
import { app_code_answer_count_max } from "../../../love/public/src/app_code_answer_count_max.mjs";
import { app_code_lesson_above } from "../../../love/public/src/app_code_lesson_above.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_visibility_visible_multiple } from "../../../love/public/src/html_visibility_visible_multiple.mjs";
import { app_shared_button_screen_green_style_assign } from "../../../love/public/src/app_shared_button_screen_green_style_assign.mjs";
import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
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
import { list_sort_text_to } from "../../../love/public/src/list_sort_text_to.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_filter_remove } from "../../../love/public/src/list_filter_remove.mjs";
import { or } from "../../../love/public/src/or.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_pair_other } from "../../../love/public/src/list_pair_other.mjs";
import { app_code_example_answer_label } from "../../../love/public/src/app_code_example_answer_label.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_quiz(
  container,
  qa,
  parent,
  context,
  refresh,
  info,
  batch_get,
  quizzes,
) {
  let answer_count_override = property_get(info, "answer_count_override");
  let question_label = property_get(info, "question_label");
  let on_question = property_get(info, "on_question");
  let answer_on_button = property_get(info, "answer_on_button");
  let answer_label = property_get(info, "answer_label");
  let answer_property = property_get(info, "answer_property");
  let properties = ["question", "answer"];
  let question_property = list_pair_other(properties, answer_property);
  let quiz_answer = property_get(qa, answer_property);
  let quiz_question = property_get(qa, question_property);
  let a = app_code_lesson_above(
    container,
    question_label,
    quiz_question,
    on_question,
  );
  let a_container = property_get(a, "container");
  app_code_example_answer_label(a_container, answer_label);
  let on_success = html_div(parent);
  let success = app_replace_success_message(on_success);
  async function on_next() {
    let quiz_index = app_code_quiz_index_transform(context, quizzes, add_1);
    let li = list_index_last_is(quizzes, quiz_index);
    if (li) {
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
  app_replace_button_wide_next(parent, on_next);
  let quiz_index = app_code_quiz_index_get(context);
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
    let bb = app_replace_button_wide(parent, back_text, on_back);
  }
  let hides = [success];
  html_visibility_hidden_multiple(hides);
  let quiz_batch_items = batch_get();
  function filter(quiz_batch_item) {
    let question_batch = property_get(quiz_batch_item, question_property);
    let answer_batch = property_get(quiz_batch_item, answer_property);
    let eq_a = equal(answer_batch, quiz_answer);
    let eq_q = equal(question_batch, quiz_question);
    let ored = or(eq_a, eq_q);
    return ored;
  }
  list_filter_remove(quiz_batch_items, filter);
  let answers = list_map_property(quiz_batch_items, answer_property);
  let answers_unique = list_unique(answers);
  list_remove_if_exists(answers_unique, quiz_answer);
  let answer_count_max = app_code_answer_count_max();
  let nn2 = null_not_is(answer_count_override);
  if (nn2) {
    answer_count_max = answer_count_override;
  }
  let taken = list_shuffle_take(answers_unique, answer_count_max - 1);
  let choices = list_concat(taken, [quiz_answer]);
  list_sort_text_to(choices);
  let buttons = list_map(choices, each_button);
  let answered = false;
  function each_button(quiz_choice) {
    let b = app_replace_button_wide(a_container, quiz_choice, on_click);
    html_style_background_color_set(b, "#ececec");
    html_style_margin_top(b, "0.2em");
    async function on_click() {
      let eq2 = equal(quiz_choice, quiz_answer);
      if (eq2) {
        answered = true;
        app_shared_button_screen_green_style_assign(b);
        html_visibility_visible_multiple(hides);
        await sleep_seconds(0.5);
        refresh();
      } else {
        if (not(answered)) {
          let color_bg = app_code_lesson_quiz_wrong_background_color();
          html_style_background_color_set(b, color_bg);
          html_font_color_set(b, "rgb(255, 255, 255)");
        }
      }
    }
    let nn = null_not_is(answer_on_button);
    if (nn) {
      answer_on_button(b, quiz_choice);
    }
    return b;
  }
}
