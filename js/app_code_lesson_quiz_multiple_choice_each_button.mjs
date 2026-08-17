import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_multiple_choice_answered } from "./app_code_lesson_quiz_multiple_choice_answered.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_lesson_quiz_multiple_choice_each_button(
  r,
  distractor_count,
  next_get,
  parent,
  on_success,
  on_wrong,
  answer_on_button,
) {
  arguments_assert(arguments, 7);
  let r2 = app_code_lesson_quiz_multiple_choice_answered(
    r,
    distractor_count,
    next_get,
  );
  let answered = property_get(r2, "answered");
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let choices = property_get(r2, "choices");
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
  let r3 = {
    choices,
    each_button,
  };
  return r3;
}
