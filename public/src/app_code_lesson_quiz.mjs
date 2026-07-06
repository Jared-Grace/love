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
import { app_code_next } from "../../../love/public/src/app_code_next.mjs";
import { app_code_examples } from "../../../love/public/src/app_code_examples.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
import { app_code_lesson_first_id } from "../../../love/public/src/app_code_lesson_first_id.mjs";
import { list_property_next_value } from "../../../love/public/src/list_property_next_value.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { app_code_quiz_index_reset } from "../../../love/public/src/app_code_quiz_index_reset.mjs";
import { list_index_last_is } from "../../../love/public/src/list_index_last_is.mjs";
import { app_code_quiz_index_set } from "../../../love/public/src/app_code_quiz_index_set.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
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
  quiz_question,
  answer_property,
  quiz_answer,
  parent,
  quiz_fn,
  context,
  refresh,
  label_answer,
  on_quiz_answer_button,
  on_question,
  question_label,
  batch_get,
  answer_count_override,
) {
  let answer_count_max = app_code_answer_count_max();
  let a = app_code_lesson_above(
    container,
    quiz_question,
    question_label,
    on_question,
  );
  let a_container = property_get(a, "container");
  app_code_example_answer_label(a_container, label_answer);
  let quiz_batch_items = batch_get();
  let choices = ["question", "answer"];
  let question_property = list_pair_other(choices, answer_property);
  function lambda2(quiz_batch_item) {
    let question2 = property_get(quiz_batch_item, question_property);
    let answer2 = property_get(quiz_batch_item, answer_property);
    let eq3 = equal(answer2, quiz_answer);
    let eq4 = equal(question2, quiz_question);
    let ored = or(eq3, eq4);
    return ored;
  }
  list_filter_remove(quiz_batch_items, lambda2);
  let answers = list_map_property(quiz_batch_items, answer_property);
  let answers_unique = list_unique(answers);
  list_remove_if_exists(answers_unique, quiz_answer);
  let nn2 = null_not_is(answer_count_override);
  if (nn2) {
    let answer_count_max = answer_count_override;
  }
  let taken = list_shuffle_take(answers_unique, answer_count_max - 1);
  let concated = list_concat(taken, [quiz_answer]);
  list_sort_text_to(concated);
  let on_success = html_div(parent);
  let success = app_replace_success_message(on_success);
  async function on_next() {
    let size = list_size(quizzes);
    let index = list_index_of(quizzes, quiz_fn);
    let a1 = add_1(index);
    let index_new = mod(a1, size);
    app_code_quiz_index_set(context, index_new);
    let li = list_index_last_is(quizzes, index);
    if (li) {
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
  let r4 = app_code_next(
    context,
    on_success,
    "take another quiz to practice some more",
    "please give me another quiz to take",
    refresh,
    on_next,
  );
  let container_on_success = property_get(r4, "container");
  let hides = [success, container_on_success];
  html_visibility_hidden_multiple(hides);
  let buttons = list_map(concated, each_button);
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
      } else {
        if (not(answered)) {
          let color_bg = "rgb(255 168 168)";
          html_style_background_color_set(b, color_bg);
          html_font_color_set(b, "rgb(167, 51, 51)");
        }
      }
    }
    on_quiz_answer_button(b);
    return b;
  }
}
