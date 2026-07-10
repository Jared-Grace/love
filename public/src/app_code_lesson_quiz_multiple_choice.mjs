import { app_code_lesson_quiz_wrong_set } from "../../../love/public/src/app_code_lesson_quiz_wrong_set.mjs";
import { app_code_lesson_quiz_qa_property_other } from "../../../love/public/src/app_code_lesson_quiz_qa_property_other.mjs";
import { app_code_lesson_quiz_qa_question } from "../../../love/public/src/app_code_lesson_quiz_qa_question.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { app_shared_button_screen_green_style_assign } from "../../../love/public/src/app_shared_button_screen_green_style_assign.mjs";
import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_sort_text_to } from "../../../love/public/src/list_sort_text_to.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { app_code_answer_count_max } from "../../../love/public/src/app_code_answer_count_max.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_filter_remove } from "../../../love/public/src/list_filter_remove.mjs";
import { or } from "../../../love/public/src/or.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function app_code_lesson_quiz_multiple_choice(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  let answer_on_button = property_get(info, "answer_on_button");
  let answer_count_override = property_get(info, "answer_count_override");
  let answer_property = property_get(info, "answer_property");
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let question_property =
    app_code_lesson_quiz_qa_property_other(answer_property);
  let quiz_answer = property_get(qa, answer_property);
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
  let count = subtract(answer_count_max, 1);
  let taken = list_shuffle_take(answers_unique, count);
  let choices = list_concat(taken, [quiz_answer]);
  list_sort_text_to(choices);
  let buttons = list_map(choices, each_button);
  let answered = false;
  function each_button(quiz_choice) {
    let b = app_replace_button_wide(parent, quiz_choice, on_click);
    html_style_background_color_set(b, "#ececec");
    html_style_margin_top(b, "0.2em");
    async function on_click() {
      let eq = equal(quiz_choice, quiz_answer);
      if (eq) {
        answered = true;
        app_shared_button_screen_green_style_assign(b);
        await on_success();
      } else {
        on_wrong();
        if (not(answered)) {
          app_code_lesson_quiz_wrong_set(b);
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
