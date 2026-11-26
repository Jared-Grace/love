import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_to } from "./text_to.mjs";
import { newline } from "./newline.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { equal } from "./equal.mjs";
import { app_learn_js_value_nothing_paint } from "./app_learn_js_value_nothing_paint.mjs";
export function app_learn_js_button_value_lines(button, value) {
  arguments_assert(arguments, 2);
  ("a button offering a value to pick, told to keep the lines the value was written on");
  ("The value a program wrote out may stand on more than one line, and a button left to itself folds every run of blank space into one space - so the two lines of an answer would sit side by side on the button and read as one line, while the same answer on the card above stands on two. A learner told to pick the answer they were shown would be looking for something that is not there.");
  ("The value is handed over and not used. The button already carries its text; what is missing is only the instruction to keep the breaks in it, and writing the text a second time would ask this to know how the button was built.");
  ("A wrap is still allowed, so a long answer folds inside the button rather than pushing the page sideways on a phone.");
  html_style_white_space(button, "pre-wrap");
  ("2026-11-26, at the human's asking: a value of several lines has its lines lined up on the left, and the block they make together centred on the button, so an array of objects reads down one edge as it does on the card above. A flex button wraps its text in one box only as wide as the longest line; centring that box and aligning the text left inside it does both. A value of one line keeps the button as it was.");
  if (text_includes(text_to(value), newline())) {
    html_style_set(button, "display", "flex");
    html_style_set(button, "justify-content", "center");
    html_style_set(button, "text-align", "left");
  }
  if (equal(value, "")) {
    ("2026-11-11: the one time the value is used - a choice of nothing gets the word nothing, leant and gray, rather than a blank button; which choice is right is decided from the value, never from the words on the button, so the words may change");
    app_learn_js_value_nothing_paint(button);
  }
}
