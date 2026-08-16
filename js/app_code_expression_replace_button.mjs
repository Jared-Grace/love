import { app_code_expression_chosen_background_color } from "./app_code_expression_chosen_background_color.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_expression_replace_button(parent, press) {
  arguments_assert(arguments, 2);
  ("the button that makes the swap happen, with the one word saying what it does written in the very colour the swap is wearing");
  ("Everything about to move on the line is blue - the block chosen, the words naming it, and the value on its way down into its room. So the word for the thing that starts all that is blue too, and a learner who has been watching the blue reads what the button does before reading the sentence on it.");
  ("The rest of the sentence stays as it was. It says where to press and nothing more, and a whole button in the colour would have said that the pressing is the thing the colour is about rather than the swap.");
  ("Weighted a little heavier as well as coloured, because the colour alone is asked to be legible on the button's own grey - and a word carrying the meaning of the button ought to be the word the eye lands on first whatever it is standing on.");
  let button = app_shared_button_wide(parent, "Click here to ", press);
  let word = html_span_text(button, "replace");
  let color = app_code_expression_chosen_background_color();
  html_font_color_set(word, color);
  html_bold_semi(word);
  return button;
}
