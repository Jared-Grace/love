import { app_code_lesson_quiz_multiple_choice_qa_for } from "./app_code_lesson_quiz_multiple_choice_qa_for.mjs";
import { app_code_lesson_quiz_multiple_choice_question_property } from "./app_code_lesson_quiz_multiple_choice_question_property.mjs";
import { app_code_lesson_quiz_multiple_choice_need_more } from "./app_code_lesson_quiz_multiple_choice_need_more.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
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
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_multiple_choice(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  let answer_on_button = property_get(info, "answer_on_button");
  let r = app_code_lesson_quiz_multiple_choice_question_property(
    info,
    qa,
    batch_get,
  );
  let r2 = app_code_lesson_quiz_multiple_choice_qa_for(r, info);
  let qa_for = property_get(r2, "qa_for");
  let quiz_question_text = property_get(r2, "quiz_question_text");
  let answer_count_max = property_get(r2, "answer_count_max");
  let next_get = property_get(r2, "next_get");
  let distractor_count = property_get(r2, "distractor_count");
  let seen = property_get(r2, "seen");
  let distractors = property_get(r2, "distractors");
  let answer_property = property_get(r2, "answer_property");
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let question_property = property_get(r2, "question_property");
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
    let shown = qa_for(item);
    let answer_text = property_text_to(shown, answer_property);
    let question_text = property_text_to(shown, question_property);
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
