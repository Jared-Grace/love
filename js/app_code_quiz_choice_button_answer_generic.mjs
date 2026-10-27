import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_choice_button } from "./app_code_quiz_choice_button.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { html_styles_inline_restore_later } from "./html_styles_inline_restore_later.mjs";
import { list_add } from "./list_add.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
export function app_code_quiz_choice_button_answer_generic({
  parent,
  text,
  right,
  state,
  on_success,
  on_wrong,
  soft_take,
}) {
  arguments_assert(arguments, 1);
  ("an answer the learner may pick, and what pressing it does: the right one turns green and the quiz goes on, a wrong one turns red and is spent, and once the right one is pressed none of them does anything. state is shared by every choice of one question, and says whether it has been answered");
  ("Three quizzes were each writing this same pressing out in full, and a fourth was about to; written once, a choice behaves the same wherever it is offered.");
  ("A wrong choice made of words is also dimmed, which says spent without taking the red away; one drawn as a run of code is left at full strength, because the red is on the code block there, and half of it over the page behind comes out as a wash rather than as red.");
  ("soft_take is asked when a wrong one is pressed, and answers whether this press is let off: a fair guess at a rule not yet said, at the human's asking 2026-10-21. One let off is spent and dimmed but not reddened, and on_wrong is not told, so it is not counted as a mistake");
  let b = app_code_quiz_choice_button(parent, text, on_click);
  ("the right one is marked as the way on as it is built, where being right is already decided, so a walk of the whole course answers every question of this kind without a second answer key that could disagree with this one");
  if (right) {
    html_data_set_test_happy(b);
  }
  function spent_get() {
    "how to put back each wrong choice of this question pressed so far, kept on the state every choice of it shares; made the first time it is asked for, so no caller has to know it is kept";
    let b2 = property_exists(state, "spent");
    if (not(b2)) {
      property_set(state, "spent", []);
    }
    let spent = property_get(state, "spent");
    return spent;
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
      ("2026-10-14, at the human's asking: once the right one is pressed, the wrong ones pressed before it lose their red and their dimming at once, so the one answer still marked is the right one. Not picked: leaving them red, as before, which kept saying wrong about a question already answered");
      for (let restore of spent_get()) {
        restore();
      }
      await on_success();
      return;
    }
    let soft = soft_take();
    if (not(soft)) {
      on_wrong();
    }
    let restore2 = html_styles_inline_restore_later(b);
    let list = spent_get();
    list_add(list, restore2);
    html_style_set(b, "pointer-events", "none");
    if (soft) {
      html_style_opacity(b, "0.5");
      return;
    }
    let coded = app_code_lesson_quiz_wrong_set(b);
    if (not(coded)) {
      html_style_opacity(b, "0.5");
    }
  }
  return b;
}
