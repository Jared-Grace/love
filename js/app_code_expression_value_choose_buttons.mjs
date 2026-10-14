import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_sort_number } from "./list_sort_number.mjs";
import { noop } from "./noop.mjs";
import { promise_wrap_unawait } from "./promise_wrap_unawait.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { text_to } from "./text_to.mjs";
import { equal } from "./equal.mjs";
import { app_code_quiz_choice_button_answer } from "./app_code_quiz_choice_button_answer.mjs";
import { each } from "./each.mjs";
export function app_code_expression_value_choose_buttons(
  parent,
  value,
  decoys,
  on_wrong,
) {
  arguments_assert(arguments, 4);
  ("the values to choose from, made in a box of their own under parent, handed back as the box, the right value's button, and a waiting that ends once the right value is pressed and has stayed green as long as any other success. Not awaited here, so a caller can point at the right button while the learner looks for it, as the step-through guide does at the human's asking 2026-10-14");
  ("The offered values go in order, smallest first, so where they stand says nothing about which is right; sorted as numbers rather than as writing, because 12 written down sorts before 5.");
  let box = html_div(parent);
  let choices = list_concat(decoys, [value]);
  list_sort_number(choices);
  let press = noop;
  function lambda$resolve(resolve) {
    press = resolve;
  }
  ("the waiting is opened before the buttons are made, because each button is given what to do at the moment it is made");
  let pressed = promise_wrap_unawait(lambda$resolve);
  let answered = {
    answered: false,
  };
  ("each value is a choice of the one kind every multiple choice in this app is built from, so it is marked as the way on, turned green or red, and spent, exactly as they are; this one only adds the pause and the waiting");
  async function on_right() {
    await sleep_success_color();
    press(null);
  }
  let result = {
    box,
    right: null,
    pressed,
  };
  function each_button(choice) {
    let choice_text = text_to(choice);
    let right_is = equal(choice, value);
    let b = app_code_quiz_choice_button_answer(
      box,
      choice_text,
      right_is,
      answered,
      on_right,
      on_wrong,
    );
    if (right_is) {
      result.right = b;
    }
  }
  each(choices, each_button);
  return result;
}
