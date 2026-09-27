import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { add_1 } from "./add_1.mjs";
import { text_to } from "./text_to.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { less_than } from "./less_than.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_code_review_quiz_jump_choose(
  parent,
  passed,
  total,
  on_jump,
  on_cancel,
) {
  arguments_assert(arguments, 5);
  ("$plain passed");
  ("the review's quizzes as numbered buttons, drawn where the progress bar was, so a learner can pick which one to do next: the ones already answered are faded, because the review has let them go and there is no copy left to go back to; the one being worked on is green; tapping any later one hands its number, counted from 1, to on_jump; Cancel puts the bar back");
  html_div_text_centered(parent, "Which quiz do you want to jump to?");
  let row = html_div(parent);
  html_style_assign(row, {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    gap: "0.4em",
    margin: "0.5em 0",
  });
  let current = add_1(passed);
  function number_draw(index) {
    let number = add_1(index);
    let text = text_to(number);
    function lambda() {
      on_jump(number);
    }
    if (equal(number, current)) {
      let here = app_shared_button_inline(row, text, on_cancel);
      app_shared_button_screen_green_style_assign(here);
      return;
    }
    let button = app_shared_button_inline(row, text, lambda);
    if (less_than(number, current)) {
      app_shared_button_disabled_set(button, true);
    }
  }
  let list = range(total);
  each(list, number_draw);
  let cancel = app_shared_button_wide(parent, "Cancel", on_cancel);
  return cancel;
}
