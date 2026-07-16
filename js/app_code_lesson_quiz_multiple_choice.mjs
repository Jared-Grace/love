import { list_iterator_refillable } from "../../love/js/list_iterator_refillable.mjs";
import { app_code_lesson_quiz_wrong_set } from "../../love/js/app_code_lesson_quiz_wrong_set.mjs";
import { not } from "../../love/js/not.mjs";
import { or } from "../../love/js/or.mjs";
import { app_code_lesson_quiz_qa_property_other } from "../../love/js/app_code_lesson_quiz_qa_property_other.mjs";
import { app_shared_button_screen_green_style_assign } from "../../love/js/app_shared_button_screen_green_style_assign.mjs";
import { html_style_margin_top } from "../../love/js/html_style_margin_top.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { list_map } from "../../love/js/list_map.mjs";
import { list_sort_text_to } from "../../love/js/list_sort_text_to.mjs";
import { list_concat } from "../../love/js/list_concat.mjs";
import { null_not_is } from "../../love/js/null_not_is.mjs";
import { app_code_answer_count_max } from "../../love/js/app_code_answer_count_max.mjs";
import { list_includes } from "../../love/js/list_includes.mjs";
import { list_add } from "../../love/js/list_add.mjs";
import { list_size } from "../../love/js/list_size.mjs";
import { and } from "../../love/js/and.mjs";
import { add } from "../../love/js/add.mjs";
import { multiply } from "../../love/js/multiply.mjs";
import { less_than } from "../../love/js/less_than.mjs";
import { equal } from "../../love/js/equal.mjs";
import { text_to } from "../../love/js/text_to.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { subtract } from "../../love/js/subtract.mjs";
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
  let quiz_answer = property_get(qa, answer_property);
  let quiz_answer_text = text_to(quiz_answer);
  let question_property =
    app_code_lesson_quiz_qa_property_other(answer_property);
  let quiz_question = property_get(qa, question_property);
  let quiz_question_text = text_to(quiz_question);
  let answer_count_max = app_code_answer_count_max();
  let nn2 = null_not_is(answer_count_override);
  if (nn2) {
    answer_count_max = answer_count_override;
  }
  let next_get = list_iterator_refillable(batch_get);
  let distractor_count = subtract(answer_count_max, 1);
  let seen = [quiz_answer_text];
  let distractors = [];
  let attempts = 0;
  let attempts_max = multiply(answer_count_max, 3);
  function need_more() {
    let more = less_than(list_size(distractors), distractor_count);
    let room = less_than(attempts, attempts_max);
    let r = and(more, room);
    return r;
  }
  while (need_more()) {
    let item = next_get();
    let answer_batch = property_get(item, answer_property);
    let answer_text = text_to(answer_batch);
    let question_batch = property_get(item, question_property);
    let question_text = text_to(question_batch);
    let ambiguous = equal(question_text, quiz_question_text);
    let already = list_includes(seen, answer_text);
    let skip = or(already, ambiguous);
    if (not(skip)) {
      list_add(seen, answer_text);
      list_add(distractors, answer_text);
    }
    attempts = add(attempts, 1);
  }
  let choices = list_concat(distractors, [quiz_answer_text]);
  list_sort_text_to(choices);
  let buttons = list_map(choices, each_button);
  let answered = false;
  function each_button(quiz_choice) {
    let b = app_shared_button_wide(parent, quiz_choice, on_click);
    html_style_background_color_set(b, "#ececec");
    html_style_margin_top(b, "0.2em");
    async function on_click() {
      if (answered) {
        ("once answered correctly the choices are locked, so the learner can ponder and advance with Next at their own pace");
        return;
      }
      let eq = equal(quiz_choice, quiz_answer_text);
      if (eq) {
        answered = true;
        app_shared_button_screen_green_style_assign(b);
        await on_success();
      } else {
        on_wrong();
        app_code_lesson_quiz_wrong_set(b);
      }
    }
    let nn = null_not_is(answer_on_button);
    if (nn) {
      answer_on_button(b, quiz_choice);
    }
    return b;
  }
}
