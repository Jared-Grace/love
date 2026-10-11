import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_choice_button } from "./app_code_quiz_choice_button.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function app_code_quiz_choice_button_answer(
  parent,
  text,
  right,
  state,
  on_success,
  on_wrong,
) {
  arguments_assert(arguments, 6);
  ("an answer the learner may pick, and what pressing it does: the right one turns green and the quiz goes on, a wrong one turns red and is spent, and once the right one is pressed none of them does anything. state is shared by every choice of one question, and says whether it has been answered");
  ("Three quizzes were each writing this same pressing out in full, and a fourth was about to; written once, a choice behaves the same wherever it is offered.");
  ("A wrong choice made of words is also dimmed, which says spent without taking the red away; one drawn as a run of code is left at full strength, because the red is on the code block there, and half of it over the page behind comes out as a wash rather than as red.");
  let b = app_code_quiz_choice_button(parent, text, on_click);
  ("the right one is marked as the way on as it is built, where being right is already decided, so a walk of the whole course answers every question of this kind without a second answer key that could disagree with this one");
  if (right) {
    html_data_set_test_happy(b);
  }
  async function on_click() {
    if (property_get(state, "answered")) {
      return;
    }
    if (right) {
      property_set(state, "answered", true);
      ("taken, so it stops being the way on - a walk that kept pressing this locked button would never reach what comes after it");
      html_data_set_test_happy_remove(b);
      app_shared_button_screen_green_style_assign(b);
      await on_success();
      return;
    }
    on_wrong();
    let coded = app_code_lesson_quiz_wrong_set(b);
    html_style_set(b, "pointer-events", "none");
    if (not(coded)) {
      html_style_opacity(b, "0.5");
    }
  }
  return b;
}
