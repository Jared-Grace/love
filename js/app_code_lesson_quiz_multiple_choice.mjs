import { app_code_lesson_quiz_multiple_choice_need_more } from "./app_code_lesson_quiz_multiple_choice_need_more.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text_to } from "./list_sort_text_to.mjs";
import { list_concat } from "./list_concat.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_answer_count_max } from "./app_code_answer_count_max.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { each } from "./each.mjs";
import { subtract } from "./subtract.mjs";
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
  let decoy_fn = property_get_or(info, "decoys", null);
  let has_decoys = null_not_is(decoy_fn);
  if (has_decoys) {
    ("seed the TAILORED wrong answers first (the tempting mistakes for this question, e.g. the rounded-UP value), so they are guaranteed to appear; the loop below then fills any remaining slots with random distractors from other questions. Opt-in via info.decoys - lessons without it behave exactly as before");
    let tailored = decoy_fn(quiz_question, quiz_answer);
    function add_decoy(decoy) {
      let decoy_text = text_to(decoy);
      let dup = list_includes(seen, decoy_text);
      if (not(dup)) {
        list_add(seen, decoy_text);
        list_add(distractors, decoy_text);
      }
    }
    each(tailored, add_decoy);
  }
  let attempts = 0;
  let attempts_max = multiply(answer_count_max, 3);
  while (
    app_code_lesson_quiz_multiple_choice_need_more(
      distractors,
      distractor_count,
      attempts,
      attempts_max,
    )
  ) {
    let item = next_get();
    let answer_text = property_text_to(item, answer_property);
    let question_text = property_text_to(item, question_property);
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
  let answered = false;
  function each_button(quiz_choice) {
    let b = app_shared_button_wide(parent, quiz_choice, on_click);
    let background = app_shared_color_gray_light();
    html_style_background_color_set(b, background);
    html_style_margin_top(b, "0.2em");
    async function on_click() {
      if (answered) {
        ("locked once the correct choice is chosen");
        return;
      }
      let eq = equal(quiz_choice, quiz_answer_text);
      if (eq) {
        answered = true;
        app_shared_button_screen_green_style_assign(b);
        await on_success();
      } else {
        ("a wrong pick disables just THIS choice (dimmed) and leaves the others live, so the learner narrows down to the answer without it being revealed; on_wrong marks the attempt so the review requeues it");
        on_wrong();
        app_code_lesson_quiz_wrong_set(b);
        html_style_set(b, "pointer-events", "none");
        html_style_opacity(b, "0.5");
      }
    }
    let nn = null_not_is(answer_on_button);
    if (nn) {
      answer_on_button(b, quiz_choice);
    }
    return b;
  }
  list_map(choices, each_button);
}
