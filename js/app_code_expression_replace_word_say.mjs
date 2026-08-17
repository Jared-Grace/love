import { app_code_expression_chosen_background_color } from "./app_code_expression_chosen_background_color.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_expression_replace_word_say(parent, word) {
  arguments_assert(arguments, 2);
  ("the word for the swap, wherever it is said, written in the very colour the swap is wearing");
  ("Everything about to move on the line is blue - the block chosen, the words naming it, and the value on its way down into its room. So the word for the thing that starts all that is blue too, and a learner who has been watching the blue reads what is being talked about before reading the sentence around it.");
  ("Weighted a little heavier as well as coloured, because the colour alone is asked to be legible on a button's own grey - and the word carrying the meaning of a sentence ought to be the word the eye lands on first whatever it is standing on.");
  ("The tense is the caller's. The button offering the swap says replace, of the press about to be made; the lesson afterwards says replaced, of the press already made. Everything else about the word is the same in both, which is why it is written here once.");
  let span = html_span_text(parent, word);
  let color = app_code_expression_chosen_background_color();
  html_font_color_set(span, color);
  html_bold_semi(span);
  return span;
}
