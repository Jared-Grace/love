import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { noop } from "./noop.mjs";
import { promise_wrap_unawait } from "./promise_wrap_unawait.mjs";
import { text_to } from "./text_to.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { each } from "./each.mjs";
import { html_remove } from "./html_remove.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function app_code_expression_value_choose_await(
  parent,
  value,
  decoys,
  on_wrong,
) {
  arguments_assert(arguments, 4);
  ("ask what the operator just chosen comes to, and wait there until the right value is pressed: the replacement is worked out by the learner rather than handed to them");
  ("This is what a line hands its pressing as the answer to a right press, in place of the moment's pause a quiz that gives the value away holds instead. The chosen operator and both its sides are already blue by the time this is asked, so what is being asked about is the thing standing lit on the line.");
  ("A wrong press dims just that value and leaves the others live, the same way every other multiple choice in this app answers one, so the learner narrows down rather than being told. The right one goes green and is held green for as long as any other success, and only then does the line move.");
  ("The offered values go in order, smallest first, so where they stand says nothing about which is right; sorted as numbers rather than as writing, because 12 written down sorts before 5.");
  ("The buttons are taken away before the line closes up. What follows is the value flying into the place the operator stood, and a row of numbers still sitting underneath would be a second set of the same numbers to read while one of them is moving.");
  let box = html_div(parent);
  let choices = list_concat(decoys, [value]);
  list_sort_number(choices);
  let press = noop;
  function lambda$resolve(resolve) {
    press = resolve;
  }
  ("the waiting is opened before the buttons are made, because each button is given what to do at the moment it is made");
  let pressed = promise_wrap_unawait(lambda$resolve);
  let answered = false;
  function each_button(choice) {
    let choice_text = text_to(choice);
    let b = app_shared_button_wide(box, choice_text, on_click);
    let background = app_shared_color_gray_light();
    html_style_background_color_set(b, background);
    async function on_click() {
      if (answered) {
        return;
      }
      let right_is = equal(choice, value);
      if (not(right_is)) {
        on_wrong();
        app_code_lesson_quiz_wrong_set(b);
        html_style_set(b, "pointer-events", "none");
        html_style_opacity(b, "0.5");
        return;
      }
      answered = true;
      app_shared_button_screen_green_style_assign(b);
      await sleep_success_color();
      press(null);
    }
  }
  each(choices, each_button);
  await pressed;
  html_remove(box);
}
