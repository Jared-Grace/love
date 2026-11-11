import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { equal } from "./equal.mjs";
import { app_learn_js_value_nothing_paint } from "./app_learn_js_value_nothing_paint.mjs";
export function app_learn_js_button_value_lines(button, value) {
  arguments_assert(arguments, 2);
  ("a button offering a value to pick, told to keep the lines the value was written on");
  ("The value a program wrote out may stand on more than one line, and a button left to itself folds every run of blank space into one space - so the two lines of an answer would sit side by side on the button and read as one line, while the same answer on the card above stands on two. A learner told to pick the answer they were shown would be looking for something that is not there.");
  ("The value is handed over and not used. The button already carries its text; what is missing is only the instruction to keep the breaks in it, and writing the text a second time would ask this to know how the button was built.");
  ("A wrap is still allowed, so a long answer folds inside the button rather than pushing the page sideways on a phone.");
  html_style_white_space(button, "pre-wrap");
  if (equal(value, "")) {
    ("2026-11-11: the one time the value is used - a choice of nothing gets the word nothing, leant and gray, rather than a blank button; which choice is right is decided from the value, never from the words on the button, so the words may change");
    app_learn_js_value_nothing_paint(button);
  }
}
