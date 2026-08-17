import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text_bold } from "./html_span_text_bold.mjs";
export function app_code_definition_term(parent, term) {
  arguments_assert(arguments, 2);
  ("the word a line is defining, written the one way this app writes a word it is defining: bold");
  ("Every lesson that hands a learner a new word does the same thing to it, and this is the one place that says what the thing is. A line that reached for the bold itself would be choosing the styling again, and two lines that chose differently would tell a learner that one of the two words was a different kind of word.");
  ("Bold rather than a colour, because colour already means something on these screens - blue is the piece of a line being worked out, green is well done - and a word is being defined, not pointed at or praised.");
  ("Only at the first mention. A word bolded everywhere it is used is emphasis rather than a definition, and the one mention that was the definition would no longer be findable among them.");
  let word = html_span_text_bold(parent, term);
  return word;
}
