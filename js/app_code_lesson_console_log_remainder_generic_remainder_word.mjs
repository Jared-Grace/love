import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_remainder_color } from "./app_code_remainder_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_lesson_console_log_remainder_generic_remainder_word(
  host,
  remainder,
  divisor,
) {
  arguments_assert(arguments, 3);
  ("the word remainder where the lesson says what that word means, bold and wearing the colour of the chip for the remainder handed in, so the word and the number it names read as one thing");
  ("The card shows the number as a coloured chip and then says what the number is called, in black. A learner has to take on trust that the sentence is about the chips rather than about anything else on the card. Given the chips' own colour the word points straight at them and the sentence needs no trust at all.");
  ("★ THE REMAINDER IS HANDED IN RATHER THAN WORKED OUT, WITH THE SAME TWO NUMBERS THE CHIP ITSELF TAKES. The word has to match a chip that is really on the card, and which chip that is belongs to whoever is writing the card. Worked out here from the divisor alone it would be right for the one card it was written for and quietly wrong for the next card, which may well name a different remainder.");
  ("The word is coloured rather than boxed. A box here is white letters on the colour, which is how this app draws a piece of code, and an English word in a sentence is not code.");
  ("The bold stays. This is the sentence that says what a word means, and the mark on the word being explained is the one thing a learner skimming the card should still catch: the colour says which number, the bold says this is the word.");
  let color = app_code_remainder_color(remainder, divisor);
  let word = html_span_text(host, "remainder");
  html_bold(word);
  html_font_color_set(word, color);
}
