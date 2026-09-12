import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_naming_words(host, role) {
  arguments_assert(arguments, 2);
  ("the opening words of the home title of a lesson that teaches what one part of a line is called: Naming the dividend, Naming the divisor, Naming the quotient, Naming the remainder");
  ("★ FOUR LESSONS IN A ROW DO THE SAME THING AND THEIR TITLES SAID ONLY THE WORD EACH ONE TEACHES. On the home list they read Dividend, Divisor, Quotient, Remainder, which is what a lesson about dividing would be called - so four names for four kinds of division is the natural reading, and there is nothing in any of them saying that the lesson hands the learner a word rather than a sum. Naming the says it, and it says it in the same three characters on all four, which is what makes them read as one run.");
  ("The words end in a space, so whatever a title goes on to draw after them - a shape showing where in a line this part stands - already stands clear of them. A title that draws nothing more ends in a space nobody can see.");
  let words = text_combine_multiple(["Naming the ", role, " "]);
  html_span_text(host, words);
}
